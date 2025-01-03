import { MutableRefObject, useEffect } from "react";
import { useFormConfig } from "./useFormConfig";
import { Box } from "@mui/material";
import { FromRefType } from "@/mui/components";
import { useFields } from "@/mui/common/hooks";

export const FormView = ({
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
	return <Box sx={{}}>{formNode}</Box>;
};
