"use client";
import { MutableRefObject } from "react";
import { FormView } from "./formView";
import { useFlat } from "@/service";
import { FormRefType } from "@/mui/components";
import { Label1, Title1 } from "../../components/label";
import { Box } from "@mui/material";

export default ({
	formRef,
}: {
	formRef: MutableRefObject<FormRefType | undefined>;
}) => {
	const { currentDeal } = useFlat("dealStore");
	return (
		<Box>
			<Label1
				sx={{
					mb: "6px",
				}}
			>
				Add more info
			</Label1>
			<Title1>About your business (optional)</Title1>
			<FormView defaultValues={currentDeal} formRef={formRef} />
		</Box>
	);
};
