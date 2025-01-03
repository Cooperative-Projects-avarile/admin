import { FormConfig } from "@/mui/common/hooks";
import { useMemo } from "react";
import { useFlat } from "src/service";
import * as yup from "yup";

export const useFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
}): FormConfig => {
	const { currentDeal } = useFlat("dealStore");
	return useMemo<FormConfig>(() => {
		return {
			highlights: {
				defaultValue: defaultValues?.["highlights"] || [""],
				label: "Highlights",
				type: "multiple",
				fieldConfig: {
					addLabel: "Add highlight",
					label: "highlights",
					itemFieldConfig: {
						label: "Enter highlights",
						placeholder: "Max 100 characters",
					},
				},
				schema: yup
					.array()
					.of(
						yup
							.string()
							.max(
								100,
								"Highlight must be less than 100 characters",
							)
							.required("This is a required field"),
					)
					.test({
						test(value, ctx) {
							if (value!?.length >= 1) {
								return true;
							} else {
								return ctx.createError({
									message:
										"You need to create at least 1 Highlights!",
								});
							}
						},
					}),
				wrapper: ({ children }) => {
					return <>{children}</>;
				},
			},
		};
	}, [defaultValues, currentDeal]);
};
