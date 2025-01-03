import { FormConfig, useFields } from "@/mui/common/hooks";
import { Box, InputAdornment, Typography } from "@mui/material";
import { MutableRefObject, useEffect, useMemo } from "react";
import { useFlat } from "src/service";
import { CardInfoLabel, MultiInfoLabel } from "../../../components/label";
import { FromRefType } from "@/mui/components";

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
				name: "ask.sell_a_business.amount",
				label: "amount",
				defaultValue: defaultValues?.ask?.sell_a_business?.["amount"],
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
								}}
							>
								Price (AUD)
							</MultiInfoLabel>
							<Box>{children}</Box>
						</Box>
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
			vendor_financing: {
				name: "ask.sell_a_business.vendor_financing",
				defaultValue:
					defaultValues?.ask?.sell_a_business?.["vendor_financing"],
				label: (
					<Typography
						sx={{
							color: "black",
							fontSize: "14px",
							fontWeight: "600",
							lineHeight: "22px",
						}}
					>
						Vendor financing available
					</Typography>
				),
				type: "checkbox",
				wrapper: ({ children }) => {
					return (
						<Box>
							<Box>{children}</Box>
							<CardInfoLabel
								sx={{
									maxWidth: "735px",
								}}
							>
								Vendor financing is a win-win arrangement where
								the prospective business buyer can make a
								manageable down payment and the business seller
								finances the remaining purchase price on agreed
								terms. This typically includes negotiated
								interest rates and flexible repayment schedules.
							</CardInfoLabel>
						</Box>
					);
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
	const formConfig = useformConfig({ defaultValues });
	const { methods, formNode } = useFields(formConfig);
	useEffect(() => {
		formRef.current = methods;
	}, [methods]);
	return <>{formNode}</>;
};
