"use client";
import { MutableRefObject } from "react";
import { useFlat } from "src/service";
import { DealTypeView } from "./dealTypeFormView";
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
				Step 2
			</Label1>
			<Title1>Tell us the name of your deal</Title1>
			<CardInfoLabel
				width={"90%"}
				sx={{
					mb: "32px",
				}}
			>
				This is the headline for your opportunity. It should be
				attention-grabbing and concise. Whether it's your company name
				or a catchy tagline, make it memorable. This is the first thing
				potential investors or partners will see, so choose something
				that reflects the essence of your opportunity. Keep it short and
				impactful!
			</CardInfoLabel>
			<DealTypeView defaultValues={currentDeal} formRef={formRef} />
		</Box>
	);
};
