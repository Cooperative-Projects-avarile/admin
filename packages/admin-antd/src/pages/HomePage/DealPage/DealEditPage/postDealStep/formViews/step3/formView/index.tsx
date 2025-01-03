import { useFields } from "@/mui/common/hooks";
import { FromRefType } from "@/mui/components";
import { MutableRefObject, useEffect } from "react";
import { useFormConfig } from "./useFormConfig";

export const DealTypeView = ({
	defaultValues = {},
	formRef,
}: {
	defaultValues: any;
	formRef: MutableRefObject<FromRefType | undefined>;
}) => {
	const formConfig = useFormConfig({ defaultValues });
	const { methods, formNode } = useFields(formConfig);
	useEffect(() => {
		formRef.current = methods;
	}, [methods]);

	return <>{formNode}</>;
};
