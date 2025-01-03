"use client";
import { Box, Typography } from "@mui/material";
import { MutableRefObject } from "react";
import { useFlat } from "src/service";
import { DealTypeView } from "./formView";
import { FormRefType } from "@/mui/components";
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
				Step 3
			</Label1>
			<Title1>Provide a high-level overview of your deal</Title1>
			<CardInfoLabel
				width={"90%"}
				sx={{
					mb: "32px",
				}}
			>
				Summarise your deal in a concise manner. Provide an overview of
				your opportunity, including its key benefits and potential
				impact.
			</CardInfoLabel>

			<DealTypeView defaultValues={currentDeal} formRef={formRef} />

			<Typography
				marginTop="8px"
				marginLeft="12px"
				fontSize={"12px"}
				fontWeight={400}
				lineHeight={"12px"}
				fontStyle={"normal"}
			>
				Max 30 - 500 Characters
			</Typography>
		</Box>
	);
};
