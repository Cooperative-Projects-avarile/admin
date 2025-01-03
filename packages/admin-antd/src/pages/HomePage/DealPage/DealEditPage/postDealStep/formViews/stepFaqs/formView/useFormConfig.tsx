import { FormConfig } from "@/mui/common/hooks";
import { getValueByPath } from "@/mui/common/utils/getValueByPath";
import { Stack } from "@mui/material";
import { useMemo } from "react";
import { MultiInfoLabel } from "../../../components/label";

export const useFormConfig = ({
	defaultValues,
}: {
	id?: string;
	defaultValues?: any;
}): FormConfig => {
	return useMemo<FormConfig>(() => {
		return {
			faq: {
				name: "faq",
				label: "Upload documents (optional)",
				type: "multiple",
				defaultValue: defaultValues?.["faq"],
				// schema: Yup.array().of(
				//   Yup.object().shape({
				//     question: Yup.string()
				//       .optional()
				//       .test({
				//         test(value: any, ctx) {
				//           if (ctx.parent.answer) {
				//             if (value) {
				//               return true;
				//             } else {
				//               return ctx.createError({ message: 'This is required!' });
				//             }
				//           }
				//           return true;
				//         },
				//       }),
				//     answer: Yup.string().test({
				//       test(value: any, ctx) {
				//         if (ctx.parent.question) {
				//           if (value) {
				//             return true;
				//           } else {
				//             return ctx.createError({ message: 'This is required!' });
				//           }
				//         }
				//         return true;
				//       },
				//     }),
				//   })
				// ),
				fieldConfig: {
					addLabel: "Add Another Faq",
					mulType: "obj",
					childFieldConfig: {
						question: {
							label: "Question (optional)",
							fieldConfig: {
								multiline: true,
								minRows: 2,
								type: "textarea",
								placeholder: "Enter question here",
							},
							watch(props) {
								const {
									info: { name: eventName = "" },
									values,
									currentConfig,
									api,
								} = props;
								let mulId = eventName
									.split(".")
									.slice(-2, -1)[0];
								const arr = getValueByPath("faq", values, {});
								let targetEventKey = `faq.${mulId}.answer`;
								const targetValue = arr[Number(mulId)]?.answer;

								if (eventName == targetEventKey) {
								}
								if (eventName == targetEventKey) {
									if (!currentConfig.labelMap) {
										currentConfig.labelMap = {};
									}
									if (targetValue) {
										currentConfig.labelMap[mulId] =
											"Question";
									} else {
										currentConfig.labelMap[mulId] =
											"Question (optional)";
									}
								}
								api.trigger(targetEventKey);
							},
							wrapper: ({ children }) => {
								return (
									<Stack
										sx={{
											width: "100%",
										}}
									>
										<MultiInfoLabel
											sx={{
												mb: "8px",
											}}
										>
											Question
										</MultiInfoLabel>
										{children}
									</Stack>
								);
							},
						},
						answer: {
							label: "Answer (optional)",
							fieldConfig: {
								multiline: true,
								minRows: 2,
								type: "textarea",
								placeholder: "Enter answer here",
							},
							wrapper: ({ children }) => {
								return (
									<Stack
										sx={{
											width: "100%",
										}}
									>
										<MultiInfoLabel
											sx={{
												mb: "8px",
											}}
										>
											Answer
										</MultiInfoLabel>
										{children}
									</Stack>
								);
							},
							watch(props) {
								const {
									info: { name: eventName = "" },
									values,
									currentConfig,
									api,
								} = props;
								let mulId = eventName
									.split(".")
									.slice(-2, -1)[0];
								const arr = getValueByPath("faq", values, {});
								let targetEventKey = `faq.${mulId}.question`;
								const targetValue =
									arr[Number(mulId)]?.question;
								if (eventName == targetEventKey) {
									if (!currentConfig.labelMap) {
										currentConfig.labelMap = {};
									}
									if (targetValue) {
										currentConfig.labelMap[mulId] =
											"Answer";
									} else {
										currentConfig.labelMap[mulId] =
											"Answer (optional)";
									}
								}
								api.trigger(targetEventKey);
							},
						},
					} as FormConfig,
				},
			},
		};
	}, [defaultValues]);
};
