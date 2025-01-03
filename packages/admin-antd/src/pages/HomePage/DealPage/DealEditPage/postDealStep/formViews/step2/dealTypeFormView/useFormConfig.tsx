import { FormConfig } from "@/mui/common/hooks";
import { useEffect, useMemo } from "react";
import { useFlat } from "src/service";
import * as yup from "yup";

// 从上到下 “Partnership" => "Capital Raising" => "Startup Pitch" => "Equity" => "Business for Sale"
export const useFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
	type?: string;
}): FormConfig => {
	const { currentDeal } = useFlat("dealStore");
	const { categoryFindAllAct, allPrimeCategory = [] } =
		useFlat("categoryStore");
	useEffect(() => {
		categoryFindAllAct();
	}, []);

	const primeCategoryWithOutDealType = useMemo(() => {
		return allPrimeCategory.filter(
			(item) =>
				item.name !== "Capital Raising" &&
				item.name !== "Partnerships" &&
				item.name !== "Startup Pitch" &&
				item.name !== "Equity" &&
				item.name !== "Sell a Business",
		);
	}, [allPrimeCategory]);

	return useMemo<FormConfig>(() => {
		return {
			title: {
				label: "Deal Name",
				defaultValue: defaultValues?.["title"],
				schema: yup.string().min(2).max(50),
				fieldConfig: {
					placeholder: "Maximum 50 characters.",
					required: true,
				},
			},
			industry: {
				defaultValue: defaultValues?.["industry"],
				label: "Select industry",
				type: "select",
				fieldConfig: {
					// disabled: !isNaN(currentDeal?.id!),
					required: false,
				},
				config: {
					options: primeCategoryWithOutDealType.map((item) => {
						const { id, name } = item;
						return {
							value: name,
							key: id,
							label: name,
						};
					}),
				},
			},
		};
	}, [defaultValues, currentDeal, allPrimeCategory]);
};
