import { FormConfig, useResponsive } from "@/mui/common/hooks";
import { Box, Grid } from "@mui/material";
import { useMemo } from "react";
import { useFlat } from "src/service";
import * as yup from "yup";
import { CardInfoLabel, MultiInfoLabel } from "../../../components/label";
import { getValueByPath } from "@/mui/common/utils/getValueByPath";
import { DealFileComponentType } from "@/types/model";
import { FileType } from "@/types/model/appStoreModel";

export const useFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
}): FormConfig => {
	const { getUploadUrlAct, currentDeal } = useFlat("dealStore");
	const { id = "" } = currentDeal || {};
	const mdUp = useResponsive("up", "md");

	return useMemo<FormConfig>(() => {
		return {
			team: {
				name: "teams",
				label: "Sub-heading",
				type: "multiple",
				defaultValue: defaultValues?.["teams"],
				schema: yup.array().of(
					yup.object().shape({
						name: yup
							.string()
							.max(60, "must be at most 60 characters!")
							.notRequired()
							.test({
								test(value, ctx) {
									if (value?.length && !value?.trim()) {
										return ctx.createError({
											message:
												"The input characters cannot be empty characters!",
										});
									}
									// 如果title存在值，那么name就得填
									if (
										(ctx.parent.image ||
											ctx.parent.title) &&
										!value
									) {
										return ctx.createError({
											message:
												'If the "title" field already has a value, then this field must be filled in.',
										});
									}
									return true;
								},
							}),
						title: yup
							.string()
							.max(50, "must be at most 50 characters!")
							.notRequired()
							.test({
								test(value, ctx) {
									if (value?.length && !value?.trim()) {
										return ctx.createError({
											message:
												"The input characters cannot be empty characters!",
										});
									}
									// 如果title存在值，那么name就得填
									if (
										(ctx.parent.image || ctx.parent.name) &&
										!value
									) {
										return ctx.createError({
											message:
												'If the "name" field already has a value, then this field must be filled in.',
										});
									}
									return true;
								},
							}),
						image: yup
							.string()
							.notRequired()
							.test({
								test(value, ctx) {
									// 如果title存在值，那么name就得填
									if (
										(ctx.parent.title || ctx.parent.name) &&
										!value
									) {
										return ctx.createError({
											message:
												'If the "name" or "title" field already has a value, then this field must be filled in.',
										});
									}
									return true;
								},
							}),
					}),
				),
				fieldConfig: {
					addLabel: "Add another team member",
					mulType: "obj",
					childFieldConfig: {
						name: {
							label: "Team member name",
							schema: yup.string().max(60),
							watch(props) {
								const {
									info: { name: eventName },
									values,
									currentConfig,
								} = props;
								const { name = "" } = currentConfig;
								let mulId = name.split(".").slice(-2, -1)[0];
								const teamArr = getValueByPath(
									"teams",
									values,
									{},
								);
								let targetEventKey = `teams.${mulId}.image`;
								const imageValue =
									teamArr[Number(mulId)]?.image;

								if (eventName == targetEventKey) {
									if (!currentConfig.fieldConfig) {
										currentConfig.fieldConfig = {};
									}
									if (imageValue) {
										currentConfig.fieldConfig!.required =
											true;
										currentConfig.label =
											"Team member name";
									} else {
										currentConfig.fieldConfig!.required =
											false;
										currentConfig.label =
											"Team member name (optional)";
									}
								}
							},
							wrapper: ({ children }) => {
								return (
									<Grid
										item
										xs={6}
										sx={{
											mb: "32px",
										}}
									>
										<MultiInfoLabel
											sx={{
												mb: "8px",
											}}
										>
											Team member name
										</MultiInfoLabel>
										{children}
									</Grid>
								);
							},
							fieldConfig: {
								placeholder: "Steve Jobs",
							},
						},
						title: {
							label: "Team member role",
							schema: yup.string().max(50),
							wrapper: ({ children }) => {
								return (
									<Grid item xs={6}>
										<MultiInfoLabel
											sx={{
												mb: "8px",
											}}
										>
											Team member role
										</MultiInfoLabel>
										{children}
									</Grid>
								);
							},
							watch(props) {
								const {
									info: { name: eventName },
									values,
									currentConfig,
								} = props;
								const { name = "" } = currentConfig;
								let mulId = name.split(".").slice(-2, -1)[0];
								const teamArr = getValueByPath(
									"teams",
									values,
									{},
								);
								let targetEventKey = `teams.${mulId}.image`;
								const imageValue =
									teamArr[Number(mulId)]?.image;
								if (eventName == targetEventKey) {
									if (!currentConfig.fieldConfig) {
										currentConfig.fieldConfig = {};
									}
									if (imageValue) {
										currentConfig.fieldConfig!.required =
											true;
										currentConfig.label =
											"Team member role";
									} else {
										currentConfig.fieldConfig!.required =
											false;
										currentConfig.label =
											"Team member role (optional)";
									}
								}
							},
							fieldConfig: {
								placeholder: mdUp
									? "Head of Marketing bringing 10 years of digital marketing"
									: "Head of Marketing...",
							},
						},
						image: {
							label: (
								<MultiInfoLabel>
									Upload team member image
								</MultiInfoLabel>
							),
							type: "upload",
							wrapper: ({ children }) => {
								return (
									<Box
										sx={
											mdUp
												? {
														position: "absolute",
														right: 0,
														top: 0,
														width: "calc(50% - 20px)",
													}
												: {
														width: "100%",
													}
										}
									>
										{children}
									</Box>
								);
							},
							fieldConfig: {
								uploadLoabel: (
									<CardInfoLabel>
										Use PNG, JPG or BMP images no larger
										than 20MB and larger than 400k.
									</CardInfoLabel>
								),
								sx: {
									height: "200px",
								},
								uploadAction: async (file: File) => {
									const {
										payload: { fileUrl },
									} = await getUploadUrlAct({
										content_type: file.type,
										component_type:
											DealFileComponentType.DEAL_TEAM_PIC,
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
					} as FormConfig,
				},
				wrapper: ({ children }) => {
					return (
						<Grid
							sx={{
								position: "relative",
								"& .mulItem.MuiStack-root": {
									position: "relative",
								},
							}}
							container
							columns={{ xs: 6, sm: 12, md: 12 }}
						>
							{children}
						</Grid>
					);
				},
			},
		};
	}, [defaultValues, currentDeal, mdUp]);
};
