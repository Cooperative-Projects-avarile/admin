"use client";
import { MutableRefObject } from "react";
import { useFlat } from "src/service";
import CapitalRaisingView from "./capitalRaisingView";
import EquityPitchView from "./equityPitchView";
import PartnershipView from "./partnershipView";
import SellBusinessView from "./sellBusinessView";
import StartupPitchView from "./startupPitchView";
import { FormRefType } from "@/mui/components";
import { DealType } from "@/types/model/dealEntity";
import { Box } from "@mui/material";

export default ({
	formRef,
}: {
	formRef: MutableRefObject<FormRefType | undefined>;
}) => {
	const { targetType } = useFlat("dealStore");
	const View: { [key in Exclude<DealType, DealType.ALL>]: any } = {
		[DealType.CAPITAL_RAISING]: CapitalRaisingView,
		[DealType.EQUITY]: EquityPitchView,
		[DealType.SELL_A_BUSINESS]: SellBusinessView,
		[DealType.STARTUP_PITCH]: StartupPitchView,
		[DealType.PARTNERSHIPS]: PartnershipView,
	};
	const ViewNode = View[targetType as Exclude<DealType, DealType.ALL>];
	return (
		<Box>
			<ViewNode formRef={formRef}></ViewNode>
		</Box>
	);
};
