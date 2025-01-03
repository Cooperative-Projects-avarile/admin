import { MutableRefObject, useEffect } from "react";
import { useFormConfig } from "./useFormConfig";
import { FromRefType } from "@/mui/components";
import { useFields } from "@/mui/common/hooks";
import { Grid } from "@mui/material";

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
	return (
		<Grid
			container
			columns={{ xs: 6, sm: 12, md: 12 }}
			sx={{
				widows: "100%",
				marginBottom: "100px",
				position: "relative",
				"& .formStack": {
					width: "100%",
					gap: "32px",
				},
				"& form": {
					width: "100%",
				},
			}}
		>
			{formNode}
		</Grid>
	);
};
