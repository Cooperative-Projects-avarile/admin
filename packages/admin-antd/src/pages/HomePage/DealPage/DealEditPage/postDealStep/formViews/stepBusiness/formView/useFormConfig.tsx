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
	const URL =
		/^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

	return useMemo<FormConfig>(() => {
		return {
			"components.business_name": {
				label: "",
				defaultValue:
					defaultValues?.components?.["business_name"] || "",
				schema: Yup.string().max(
					30,
					"Company name must be less than 30 characters",
				),
				fieldConfig: {
					multiline: false,
					type: "textarea",
					placeholder: "Max 30 characters",
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
								Business name
							</MultiInfoLabel>
							<Box>{children}</Box>
						</Box>
					);
				},
			},
			"components.business_website": {
				label: "",
				defaultValue:
					defaultValues?.components?.["business_website"] || "",
				// schema: Yup.string().min(0).matches(URL, "Please provide a valid website url!").max(50, 'Website url must be less than 50 characters'),
				schema: Yup.string().test({
					test(value, ctx) {
						if (!value) {
							return true;
						}
						if (value.length > 0 && value.match(URL)) {
							return true;
						} else {
							return ctx.createError({
								message: "Please provide a valid website url!",
							});
						}
					},
				}),
				fieldConfig: {
					multiline: false,
					type: "textarea",
					placeholder: "Max 50 characters",
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
								Business Website
							</MultiInfoLabel>
							<Box>{children}</Box>
						</Box>
					);
				},
			},
			"components.problem_to_be_solved": {
				label: "",
				defaultValue:
					defaultValues?.components?.["problem_to_be_solved"] || "",
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
								What problem is your business solving?
							</MultiInfoLabel>
							<Box>{children}</Box>
							<CardInfoLabel>
								Describe the problem your deal addresses or the
								gap it fills in the market. Help others
								understand the need your deal fulfils.
							</CardInfoLabel>
						</Box>
					);
				},
			},
			"components.solution": {
				label: "",
				defaultValue: defaultValues?.components?.["solution"] || "",
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
								Describe your solution.
							</MultiInfoLabel>
							<Box>{children}</Box>
							<CardInfoLabel
								sx={{
									mt: "16px",
								}}
							>
								Detail your product, service, or solution.
								Explain what it does, how it works, and why it's
								valuable. Focus on its unique features.
							</CardInfoLabel>
						</Box>
					);
				},
			},
			"components.achivement": {
				label: "",
				defaultValue: defaultValues?.components?.["achivement"] || "",
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
								What are your business achievements so far?
							</MultiInfoLabel>
							<Box>{children}</Box>
							<CardInfoLabel
								sx={{
									mt: "16px",
								}}
							>
								Share any relevant milestones or achievements
								your project or business has reached. Traction
								can include customer acquisitions, revenue
								growth, partnerships, or successful pilot
								programs.
							</CardInfoLabel>
						</Box>
					);
				},
			},
			"components.business_model": {
				label: "",
				defaultValue:
					defaultValues?.components?.["business_model"] || "",
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
								Tell us about your business model.
							</MultiInfoLabel>
							<Box>{children}</Box>
							<CardInfoLabel
								sx={{
									mt: "16px",
								}}
							>
								Explain how your venture generates revenue or
								plans to do so. Detail your pricing strategy,
								target customers, and any monetization methods.
								You can also upload any images or slides that
								may help your pitch.
							</CardInfoLabel>
						</Box>
					);
				},
			},

			"components.funding": {
				label: "",
				defaultValue: defaultValues?.components?.["funding"] || "",
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
								What (if any) funding have you already raised?
							</MultiInfoLabel>
							<Box>{children}</Box>
							<CardInfoLabel
								sx={{
									mt: "16px",
								}}
							>
								Specify your existing funding position &/or your
								funding requirements and how you plan to utilise
								the funds. Investors need to know where their
								investment will go.
							</CardInfoLabel>
						</Box>
					);
				},
			},
		};
	}, [defaultValues, currentDeal]);
};
