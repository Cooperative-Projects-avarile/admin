import useHashParams from "@/common/utils/useHashParams";
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
	
	return useMemo<FormConfig>(() => {
		;
		return {
			overview: {
				label: "Deal overview",
				defaultValue: defaultValues?.["overview"],
				schema: yup.string().min(30).max(500),
				fieldConfig: {
					placeholder: "Enter deal overview",
					required: true,
					multiline: true,
					minRows: 4,
				},
			},
		};
	}, [defaultValues, currentDeal]);
};
