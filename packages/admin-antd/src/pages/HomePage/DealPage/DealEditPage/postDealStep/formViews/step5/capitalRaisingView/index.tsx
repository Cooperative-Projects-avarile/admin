"use client";
import { MutableRefObject } from "react";
import { FormView } from "./formView";
import { useFlat } from "src/service";
import { FormRefType } from "@/mui/components";
import { Label1, Title1 } from "../../../components/label";

export default ({
	formRef,
}: {
	formRef: MutableRefObject<FormRefType | undefined>;
}) => {
	const { currentDeal } = useFlat("dealStore");
	return (
		<>
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
				Target amount to raise
			</Title1>
			<FormView defaultValues={currentDeal} formRef={formRef} />
		</>
	);
};
