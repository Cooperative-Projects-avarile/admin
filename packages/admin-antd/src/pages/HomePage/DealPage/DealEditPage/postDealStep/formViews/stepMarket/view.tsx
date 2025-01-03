"use client";
import { MutableRefObject } from "react";
import { useFlat } from "src/service";
import { FormView } from "./formView";
import { FormRefType } from "@/mui/components";
import { Box } from "@mui/material";
import { Label1, Title1 } from "../../components/label";

export default ({
	formRef,
}: {
	formRef: MutableRefObject<FormRefType | undefined>;
}) => {
	const { currentDeal } = useFlat("dealStore", {
		currentDeal: "IN",
	});
	return (
		<Box>
			<Label1
				sx={{
					mb: "6px",
				}}
			>
				Add more info
			</Label1>
			<Title1>About the market (optional)</Title1>
			<FormView defaultValues={currentDeal} formRef={formRef} />
		</Box>
	);
};
