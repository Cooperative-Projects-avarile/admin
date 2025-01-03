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
				Step 6
			</Label1>
			<Title1>Provide a few highlights</Title1>
			<CardInfoLabel
				width={"90%"}
				sx={{
					mb: "32px",
				}}
			>
				This is your chance to grab attention quickly. Use bullet points
				to highlight the key features or benefits of your deal. Keep it
				concise and impactful. Minimum 1.
			</CardInfoLabel>
			<FormView defaultValues={currentDeal} formRef={formRef} />
		</Box>
	);
};
