import { Box, BoxProps } from "@mui/material";
import React from "react";
import { TagLabel } from "../label";
import { DealType } from "@/types/model/dealEntity";
import { Label } from "@/mui/components";

const iconMap = {
	[DealType.CAPITAL_RAISING]: "/assets/icons/land-suite-1.png",
	[DealType.EQUITY]: "/assets/icons/land-suite-2.png",
	[DealType.PARTNERSHIPS]: "/assets/icons/land-suite-4.png",
	[DealType.STARTUP_PITCH]: "/assets/icons/land-suite-3.png",
	[DealType.SELL_A_BUSINESS]: "/assets/icons/land-suite-5.png",
};

const tagMap = {
	[DealType.CAPITAL_RAISING]: "CAPITAL RAISING",
	[DealType.EQUITY]: "EQUITY",
	[DealType.PARTNERSHIPS]: "PARTNERSHIPS",
	[DealType.STARTUP_PITCH]: "STARTUP PITCH",
	[DealType.SELL_A_BUSINESS]: "SELL A BUSINESS",
};
export const DealTag = ({ type }: { type: DealType }) => {
	return (
		<Label
			variant="filled"
			color="success"
			sx={{
				mt: 3,
				mb: 3,
				background: "rgba(37, 108, 203, 0.08)",
				color: "rgba(37, 108, 203, 1)",
				height: "24px",
			}}
		>
			<Box
				component={"img"}
				src={(type && iconMap[type]) || ""}
				height={"14px"}
				marginRight={"5px"}
				sx={{ fill: "#256CCB" }}
			/>
			<TagLabel>{type && tagMap[type]}</TagLabel>
		</Label>
	);
};

export const Tag2 = ({
	info,
	children,
	sx,
	...rest
}: React.PropsWithChildren<{ info?: string } & BoxProps>) => {
	return (
		<Box
			sx={{
				borderRadius: "6px",
				background: "#FFF",
				...sx,
			}}
			{...rest}
		>
			{info}
			{children}
		</Box>
	);
};
