"use client";
import { MutableRefObject } from "react";
import { useFlat } from "src/service";
import { StepId } from "../../mainView";
import { FormView } from "./formView";
import { FormRefType } from "@/mui/components";
import { Box } from "@mui/material";
import { CardInfoLabel, Label1, Title1 } from "../../components/label";

export default ({
	formRef,
}: {
	formRef: MutableRefObject<FormRefType | undefined>;
}) => {
	const { currentDeal, stepIndex } = useFlat("dealStore");
	return (
		<Box>
			<Label1
				sx={{
					mb: "6px",
				}}
			>
				Step 4
			</Label1>
			<Title1>Tell us where your Headquarters is located</Title1>
			<CardInfoLabel
				width={"90%"}
				sx={{
					mb: "32px",
				}}
			>
				Enter the address of the primary headquarters of your business
				or deal location.
			</CardInfoLabel>
			<CardInfoLabel
				width={"90%"}
				sx={{
					mb: "32px",
					color: "rgba(34, 75, 211, 0.911)",
				}}
			>
				Only the suburb & state will be publicly visible.
			</CardInfoLabel>
			{stepIndex == StepId.Step4 && (
				<FormView defaultValues={currentDeal} formRef={formRef} />
			)}
		</Box>
	);
};
