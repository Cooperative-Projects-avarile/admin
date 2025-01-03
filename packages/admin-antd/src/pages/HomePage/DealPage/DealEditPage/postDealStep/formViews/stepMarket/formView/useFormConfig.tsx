import { FormConfig } from "@/mui/common/hooks";
import { Box } from "@mui/material";
import { useMemo } from "react";
import { useFlat } from "src/service";
import * as Yup from "yup";
import { CardInfoLabel, MultiInfoLabel } from "../../../components/label";

export const useFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
}): FormConfig => {
	const { currentDeal } = useFlat("dealStore");

	return useMemo<FormConfig>(() => {
		return {
			"market.target_market": {
				label: "",
				defaultValue: defaultValues?.market?.["target_market"] || "",
				schema: Yup.string().max(
					500,
					"Description must be less than 500 characters",
				),
				fieldConfig: {
					multiline: true,
					minRows: 4,
					type: "textarea",
					placeholder: "Max 500 characters",
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
								}}
							>
								Tell us about your target market.
							</MultiInfoLabel>
							<Box>{children}</Box>
							<CardInfoLabel
								sx={{
									mt: "16px",
								}}
							>
								Describe your target customers. Who will benefit
								most from your deal? Understanding your audience
								is crucial for potential partners or investors.
							</CardInfoLabel>
						</Box>
					);
				},
			},
			"market.opportunity_description": {
				label: "",
				defaultValue:
					defaultValues?.market?.["opportunity_description"] || "",
				schema: Yup.string().max(
					500,
					"Description must be less than 500 characters",
				),
				fieldConfig: {
					multiline: true,
					minRows: 4,
					type: "textarea",
					placeholder: "Max 500 characters",
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
								}}
							>
								Describe the size of the opportunity.
							</MultiInfoLabel>
							<Box>{children}</Box>
							<CardInfoLabel
								sx={{
									mt: "16px",
								}}
							>
								Discuss the market size, trends, and potential.
								Highlight opportunities and challenges within
								your target market.
							</CardInfoLabel>
						</Box>
					);
				},
			},
			"market.enviroment": {
				label: "",
				defaultValue: defaultValues?.market?.["enviroment"] || "",
				schema: Yup.string().max(
					500,
					"Description must be less than 500 characters",
				),
				fieldConfig: {
					multiline: true,
					minRows: 4,
					type: "textarea",
					placeholder: "Max 500 characters",
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
								}}
							>
								Describe the competitive environment.
							</MultiInfoLabel>
							<Box>{children}</Box>
							<CardInfoLabel
								sx={{
									mt: "16px",
								}}
							>
								Identify your competitors and explain how your
								deal stands out. What gives you a competitive
								advantage?
							</CardInfoLabel>
						</Box>
					);
				},
			},
		};
	}, [defaultValues, currentDeal]);
};
