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
			<Title1>Team (optional)</Title1>
			<CardInfoLabel
				width={"90%"}
				sx={{
					mb: "32px",
				}}
			>
				Introduce the key members of your team. Highlight their relevant
				experience and expertise. A strong team can significantly boost
				investor and partner confidence.
			</CardInfoLabel>
			<FormView defaultValues={currentDeal} formRef={formRef} />
		</Box>
	);
};
