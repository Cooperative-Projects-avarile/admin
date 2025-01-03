"use client";
import { MutableRefObject } from "react";
import { useFlat } from "src/service";
import { FormView } from "./formView";
import { FormRefType } from "@/mui/components";
import { Box } from "@mui/material";
import { CardInfoLabel, Label1, Title1 } from "../../../components/label";

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
			<Title1>The Ask - what are you looking for?</Title1>
			<CardInfoLabel
				sx={{
					mb: "32px",
				}}
			>
				Please choose the one that best fits your needs. Do you need
				only investors, only partners or both?
			</CardInfoLabel>
			<FormView defaultValues={currentDeal} formRef={formRef} />
		</Box>
	);
};
