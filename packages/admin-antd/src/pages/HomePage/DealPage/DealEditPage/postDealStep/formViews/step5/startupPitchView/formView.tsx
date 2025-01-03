import { FormConfig, useFields, useIsMobile } from "@/mui/common/hooks";
import { Box, Grid, InputAdornment, Stack } from "@mui/material";
import { MutableRefObject, useEffect, useMemo, useState } from "react";
import { useFlat } from "src/service";
import * as yup from "yup";
import { CardTitleLabel, MultiInfoLabel } from "../../../components/label";
import { FromRefType } from "@/mui/components";
import { Card } from "../../../components/card";

// form生成hook
const useformConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
}): FormConfig => {
	const { currentDeal } = useFlat("dealStore");

	return useMemo<FormConfig>(() => {
		return {
			amount: {
				name: "ask.startup_pitch.amount",
				label: "amount",
				defaultValue:
					defaultValues?.ask?.startup_pitch?.["amount"] || 0,
				wrapper: ({ children }) => {
					return (
						<Stack
							sx={{
								margin: "20px 0px",
							}}
						>
							<MultiInfoLabel
								fontSize={"20px"}
								sx={{
									mb: "18px",
								}}
							>
								Investors
							</MultiInfoLabel>
							<MultiInfoLabel
								sx={{
									mb: "8px",
									fontSize: "16px",
								}}
							>
								Ideal investment amount (AUD)
							</MultiInfoLabel>
							<Box>{children}</Box>
						</Stack>
					);
				},
				fieldConfig: {
					type: "money",
					InputProps: {
						startAdornment: (
							<InputAdornment position="start">$</InputAdornment>
						),
					},
				},
			},
			ask_desc: {
				name: "ask.startup_pitch.usage",
				defaultValue:
					defaultValues?.ask?.startup_pitch?.["usage"] || "",
				label: "usage",
				schema: yup
					.string()
					.max(500, "Description must be less than 500 characters"),
				fieldConfig: {
					multiline: true,
					minRows: 4,
					type: "textarea",
					placeholder: "Enter text here",
				},
				wrapper: ({ children }) => {
					return (
						<Box
							sx={{
								flex: 1,
							}}
						>
							<MultiInfoLabel
								sx={{
									mb: "8px",
									fontSize: "16px",
								}}
							>
								How will the funds be used
							</MultiInfoLabel>
							<Box>{children}</Box>
						</Box>
					);
				},
			},
		};
	}, [defaultValues, currentDeal]);
};

const usePartnersFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
}): FormConfig => {
	const { currentDeal } = useFlat("dealStore");
	const isMobile = useIsMobile();
	return useMemo<FormConfig>(() => {
		return {
			partners: {
				name: "ask.startup_pitch.partners",
				type: "multiple",
				label: "partners",
				defaultValue: defaultValues?.ask?.startup_pitch?.["partners"],
				schema: yup
					.array()
					.of(
						yup
							.string()
							.max(100)
							.required("This is a required field"),
					)
					.test({
						test(value, ctx) {
							if (value!?.length >= 1 && value!?.length <= 5) {
								return true;
							} else if (value!?.length < 1) {
								return ctx.createError({
									message:
										"You need to create at least 1 partner!",
								});
							} else if (value!?.length > 5) {
								return ctx.createError({
									message:
										"You need to create at most 5 partners!",
								});
							}
						},
					}),
				wrapper({ children }) {
					return (
						<Stack
							sx={{
								gap: "50px",
								margin: "20px 0px",
							}}
						>
							<MultiInfoLabel fontSize={"20px"}>
								Partners
							</MultiInfoLabel>
							{children}
						</Stack>
					);
				},
				fieldConfig: {
					addLabel: "Add partner description",
					placeholder: "eg. Digital marketing specialist",
					required: true,
					max: 5,
					childFieldConfig: {
						label: "",
						fieldConfig: {
							placeholder: "eg. Digital marketing specialist",
						},
						wrapper: ({ children }) => {
							return (
								<Box
									sx={{
										flex: 1,
									}}
								>
									<MultiInfoLabel
										height={isMobile ? "initial" : 0}
										sx={{
											position: "relative",
											bottom: "28px",
											color: "#637381",
											fontSize: "12px",
										}}
									>
										{isMobile
											? "Example: Marketing Partner : Digital market..."
											: "Add a new bullet for each partnership you are seeking (if more than one). Explain what you would like them to bring to your business."}
									</MultiInfoLabel>
									<Box>{children}</Box>
								</Box>
							);
						},
					},
				},
			},
		};
	}, [defaultValues, currentDeal]);
};

const useInvestorsPartnersPartnersFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
}): FormConfig => {
	const { currentDeal } = useFlat("dealStore");
	const config1 = useformConfig({ defaultValues });
	const config2 = usePartnersFormConfig({ defaultValues });

	return useMemo<FormConfig>(() => {
		return {
			...config1,
			...config2,
		};
	}, [defaultValues, currentDeal]);
};
const datas = [
	{
		title: "Investors",
	},
	{
		title: "Partners",
	},
	{
		title: "Investors & Partners",
	},
];
export const FormView = ({
	formRef,
}: {
	defaultValues: any;
	formRef: MutableRefObject<FromRefType | undefined>;
}) => {
	const { currentDeal } = useFlat("dealStore");
	const [step, setStep] = useState(2);
	const formConfig = useformConfig({ defaultValues: { ...currentDeal } });
	const pFormConfig = usePartnersFormConfig({
		defaultValues: { ...currentDeal },
	});
	const investorsPartnersConfig = useInvestorsPartnersPartnersFormConfig({
		defaultValues: { ...currentDeal },
	});
	const { methods, formNode } = useFields(formConfig);
	const { methods: partnersMethods, formNode: partnersFormNode } =
		useFields(pFormConfig);
	const {
		methods: investorsPartnersMethods,
		formNode: investorsPartnersFormNode,
	} = useFields({
		...investorsPartnersConfig,
	});
	useEffect(() => {
		if (step === 0) {
			formRef.current = methods;
		} else if (step === 1) {
			formRef.current = partnersMethods;
		} else {
			formRef.current = investorsPartnersMethods;
		}
	}, [methods, step]);

	return (
		<Box sx={{ flexGrow: 1, mb: "48px" }}>
			<Grid
				container
				spacing={2}
				columns={{ xs: 2, sm: 2, md: 12 }}
				sx={{
					mb: "48px",
				}}
			>
				{datas.map(({ title }, index) => {
					return (
						<Grid key={index} item xs={2} sm={2} md={4}>
							<Card
								active={step == index}
								onClick={() => {
									setStep(index);
								}}
								sx={{
									height: "116px",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<CardTitleLabel>{title}</CardTitleLabel>
							</Card>
						</Grid>
					);
				})}
			</Grid>
			{step === 0 && formNode}
			{step === 1 && partnersFormNode}
			{step === 2 && investorsPartnersFormNode}
		</Box>
	);
};
