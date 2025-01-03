import { FormConfig, useResponsive } from "@/mui/common/hooks";
import { Box, Grid, InputAdornment, Typography } from "@mui/material";
import { useMemo } from "react";
import { useFlat } from "src/service";
import { MultiInfoLabel } from "../../../components/label";
import { DealFileComponentType } from "@/types/model";
import { FileType } from "@/types/model/appStoreModel";

export const useFormConfig = ({
	defaultValues,
}: {
	id?: string;
	defaultValues?: any;
	type?: string;
}): FormConfig => {
	const { getUploadUrlAct, currentDeal } = useFlat("dealStore");
	const { id = "" } = currentDeal || {};
	const mdUp = useResponsive("up", "md");
	return useMemo<FormConfig>((): FormConfig => {
		return {
			"documents_social.linkedin": {
				defaultValue: defaultValues?.documents_social?.linkedin,
				label: "LinkedIn (optional)",
				fieldConfig: {
					placeholder: "linkedin.com/company/yours",
					InputProps: {
						startAdornment: (
							<InputAdornment position="start">
								<Box
									component={"img"}
									src={"/assets/icons/lingyin.svg"}
								></Box>
							</InputAdornment>
						),
					},
				},

				wrapper: ({ children }) => {
					return (
						<Grid xs={6}>
							<MultiInfoLabel
								sx={{
									mb: "8px",
								}}
							>
								LinkedIn
							</MultiInfoLabel>
							{children}
						</Grid>
					);
				},
			},
			"documents_social.facebook": {
				defaultValue: defaultValues?.documents_social?.facebook,
				label: "Facebook (optional)",
				wrapper: ({ children }) => {
					return (
						<Grid xs={6}>
							<MultiInfoLabel
								sx={{
									mb: "8px",
								}}
							>
								Facebook
							</MultiInfoLabel>
							{children}
						</Grid>
					);
				},
				fieldConfig: {
					placeholder: "facebook.com/yours_company",
					InputProps: {
						startAdornment: (
							<InputAdornment position="start">
								<Box
									component={"img"}
									src={"/assets/icons/facebook.svg"}
								></Box>
							</InputAdornment>
						),
					},
				},
			},
			"documents_social.instagram": {
				defaultValue: defaultValues?.documents_social?.instagram,
				label: "Instagram (optional)",
				watch: true,
				wrapper: ({ children, formMethods }) => {
					const { documents_social } = formMethods?.getValues() || {};
					const { attachments } = documents_social;
					const len = attachments ? attachments.length : 0;
					return (
						<Grid
							xs={6}
							sx={{
								mb: len * 45 + "px",
							}}
						>
							<MultiInfoLabel
								sx={{
									mb: "8px",
								}}
							>
								Instagram
							</MultiInfoLabel>
							{children}
						</Grid>
					);
				},
				fieldConfig: {
					placeholder: "instagram.com/yourcompany",
					InputProps: {
						startAdornment: (
							<InputAdornment position="start">
								<Box
									component={"img"}
									src={"/assets/icons/ins.svg"}
								></Box>
							</InputAdornment>
						),
					},
				},
			},
			"documents_social.attachments": {
				label: "Upload documents (optional)",
				type: "upload",
				watch: ({ currentConfig, api }) => {
					const { documents_social } = api?.getValues() || {};
					const { attachments } = documents_social;
					const len = attachments ? attachments.length : 0;
					currentConfig!.fieldConfig!.disabled = len >= 2;
				},
				wrapper: ({ children }) => {
					return (
						<Box
							sx={
								mdUp
									? {
											height: "0px",
											position: "absolute",
											right: "0px",
											top: "0px",
											width: "calc(50% - 32px)",
											marginLeft: "32px",
											"& .uploadDragMul": {
												height: "200px",
											},
										}
									: {}
							}
						>
							{children}
						</Box>
					);
				},
				defaultValue: defaultValues?.documents_social?.["attachments"],
				fieldConfig: {
					uploadLoabel: (
						<>
							<Typography
								sx={{
									color: "var(--Scaling-Grey2, #696969)",
									textAlign: "center",
									fontSize: "14px",
									fontStyle: "normal",
									fontWeight: 400,
									lineHeight: "22px",
								}}
							>
								Max 2 PDF files only no larger than 20MB
							</Typography>
						</>
					),
					multiple: true,
					accept: {
						"application/pdf": [],
					},
					uploadAction: async (file: File) => {
						if (!file) return "";
						const {
							payload: { fileUrl },
						} = await getUploadUrlAct({
							content_type: file.type,
							component_type:
								DealFileComponentType.DEAL_ATTACHMENT_FILE,
							file_name: file.name,
							file_size: file.size,
							id,
							type: FileType.DealPic,
							file,
						});
						return fileUrl;
					},
				},
			},
		};
	}, [defaultValues, id, mdUp]);
};
