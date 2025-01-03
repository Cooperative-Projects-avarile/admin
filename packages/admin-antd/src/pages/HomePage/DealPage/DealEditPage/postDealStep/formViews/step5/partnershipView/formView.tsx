import { Box, Stack, Typography } from "@mui/material";
import { MutableRefObject, useEffect, useMemo } from "react";
import { useFlat } from "src/service";
import * as yup from "yup";
import { FormConfig, useFields, useIsMobile } from "@/mui/common/hooks";
import { MultiInfoLabel } from "../../../components/label";
import { FromRefType } from "@/mui/components";

// form生成hook
const useFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
	type?: string;
}): FormConfig => {
	const { currentDeal } = useFlat("dealStore");
	const isMobile = useIsMobile();

	return useMemo<FormConfig>(() => {
		return {
			partners: {
				name: "ask.partners",
				type: "multiple",
				label: "partners",
				defaultValue: defaultValues?.["ask"]?.["partners"] || [""],
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
							{children}
						</Stack>
					);
				},
				fieldConfig: {
					addLabel: "Add partner description",
					placeholder:
						"Example: Marketing Partner : Digital marketing specialist",
					max: 5,
					required: true,
					childFieldConfig: {
						label: "Example: Marketing Partner : Digital marketing specialist",
						wrapper: ({ children }) => {
							return (
								<Box
									sx={{
										flex: 1,
									}}
								>
									<MultiInfoLabel
										height={0}
										sx={{
											position: "relative",
											bottom: "28px",
										}}
									>
										{isMobile
											? "eg. Digital market..."
											: "eg. Digital market..."}
									</MultiInfoLabel>
									<Box>{children}</Box>
									<Typography
										marginTop="8px"
										marginLeft="12px"
										fontSize={"12px"}
										fontWeight={400}
										lineHeight={"12px"}
										fontStyle={"normal"}
									>
										Max 50 Characters
									</Typography>
								</Box>
							);
						},
					},
				},
			},
		};
	}, [defaultValues, currentDeal]);
};
export const FormView = ({
	defaultValues = {},
	formRef,
}: {
	defaultValues: any;
	formRef: MutableRefObject<FromRefType | undefined>;
}) => {
	const formConfig = useFormConfig({ defaultValues });
	const { methods, formNode } = useFields(formConfig);
	useEffect(() => {
		formRef.current = methods;
	}, [methods]);
	return <>{formNode}</>;
};
