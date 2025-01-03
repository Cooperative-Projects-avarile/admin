"use client";
import { FormRefType } from "@/mui/components";
import { Box } from "@mui/material";
import { MutableRefObject } from "react";
import { useFlat } from "src/service";
import { Label1, Title1 } from "../../../components/label";
import { FormView } from "./formView";

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
				Step 5
			</Label1>
			<Title1
				sx={{
					mb: "32px",
				}}
			>
				Enter the asking price
			</Title1>
			<FormView defaultValues={currentDeal} formRef={formRef} />
		</Box>
	);
};
