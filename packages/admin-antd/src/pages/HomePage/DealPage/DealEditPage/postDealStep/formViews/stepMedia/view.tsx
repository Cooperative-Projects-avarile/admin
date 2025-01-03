"use client";
import { MutableRefObject } from "react";
import { useFlat } from "src/service";
import { FormView } from "./formView";
import { FormRefType } from "@/mui/components";
import { Box } from "@mui/material";
import { CardInfoLabel, Label1, Title1 } from "../../components/label";

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
			<Title1>Documents and links (optional)</Title1>
			<CardInfoLabel
				width={"90%"}
				sx={{
					mb: "32px",
				}}
			>
				Add documents that you think will enhance and expand on your
				deal.
			</CardInfoLabel>
			<FormView defaultValues={currentDeal} formRef={formRef} />
		</Box>
	);
};
