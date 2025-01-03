import { FormConfig, useResponsive } from "@/mui/common/hooks";
import { Alert, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useFlat } from "src/service";
import * as Yup from "yup";
import { FormItemLabel } from "../../../components/label";
import { DealFileComponentType } from "@/types/model";
import { FileType } from "@/types/model/appStoreModel";

export const useFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
}): FormConfig => {
	const { getUploadUrlAct, currentDeal } = useFlat("dealStore", {
		currentDeal: "IN",
	});
	const { id = "" } = currentDeal || {};
	const mdUp = useResponsive("up", "md");

	return useMemo<FormConfig>(() => {
		return {
			pics: {
				type: "upload",
				label: <FormItemLabel>Upload images (minimum 3)</FormItemLabel>,
				name: "components.pics",
				defaultValue: defaultValues?.["components"]?.["pics"] || [],
				schema: Yup.array().test({
					test(value, ctx) {
						if (value!?.length >= 3) {
							return true;
						} else {
							return ctx.createError({
								message: "Minimum 3 images.",
							});
						}
					},
				}),
				wrapper: ({ children, formMethods }) => {
					const value = formMethods?.getValues("components.pics");
					const [isShowAlert, setIsShowAlert] = useState(
						value.length > 1 ? true : false,
					);
					useEffect(() => {
						const subscription = formMethods?.watch((value) => {
							if (value?.components?.pics) {
								if (value?.components?.pics.length > 1) {
									setIsShowAlert(true);
								} else {
									setIsShowAlert(false);
								}
							}
						});
						return () => subscription?.unsubscribe();
					}, [formMethods?.watch]);
					return (
						<div>
							<Stack>{children}</Stack>
							{isShowAlert && (
								<Stack>
									<Alert severity="info">
										You can drag and drop the images to
										adjust the order.
									</Alert>
								</Stack>
							)}
						</div>
					);
				},
				fieldConfig: {
					uploadLoabel: (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
							}}
						>
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
								Use PNG, JPG or BMP images no larger than 20MB
								and larger than 400k.
							</Typography>
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
								It will be cropped to a 16:9 ratio.
							</Typography>
						</div>
					),
					isCrop: mdUp ? true : false,
					multiple: true,
					validateFunc: (file) => {
						let flag = true;
						let info = "";
						if (file.size > 6 * 1024 * 1024) {
							flag = false;
							info = "The file size cannot be larger than 6M";
						}
						return [flag, info];
					},
					uploadAction: async (file: File) => {
						const {
							payload: { fileUrl },
						} = await getUploadUrlAct({
							content_type: file.type,
							component_type: DealFileComponentType.DEAL_PIC_MAIN,
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
			logo: {
				type: "upload",
				label: <FormItemLabel>Upload logo (optional)</FormItemLabel>,
				name: "logo",
				defaultValue: defaultValues?.["logo"] || null,
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
								Use PNG, JPG or BMP images no larger than 2MB
								and larger than 400k
							</Typography>
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
								It will be cropped to a square or sphere (1:1
								ratio).
							</Typography>
						</>
					),
					required: false,
					multiple: false,
					validateFunc: (file) => {
						let flag = true;
						let info = "";
						if (file.size > 2 * 1024 * 1024) {
							flag = false;
							info = "The file size cannot be larger than 2M";
						}
						return [flag, info];
					},
					uploadAction: async (file: File) => {
						const {
							payload: { fileUrl },
						} = await getUploadUrlAct({
							content_type: file.type,
							component_type: DealFileComponentType.DEAL_LOGO,
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
	}, [defaultValues, currentDeal]);
};
