import { FormConfig, useFields } from "@/mui/common/hooks";
import { Box, InputAdornment } from "@mui/material";
import { MutableRefObject, useEffect, useMemo } from "react";
import { useFlat } from "src/service";
import { MultiInfoLabel } from "../../../components/label";
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
				name: "ask.capital_raising.amount",
				label: "amount",
				defaultValue:
					defaultValues?.ask?.capital_raising?.["amount"] || 0,
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
								Amount (AUD)
							</MultiInfoLabel>
							<Box>{children}</Box>
						</Box>
					);
				},
				fieldConfig: {
					type: "money",
					required: true,
					InputProps: {
						startAdornment: (
							<InputAdornment position="start">$</InputAdornment>
						),
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
	const formConfig = useformConfig({ defaultValues });
	const { methods, formNode } = useFields(formConfig);
	useEffect(() => {
		formRef.current = methods;
	}, [methods]);
	return <>{formNode}</>;
};
