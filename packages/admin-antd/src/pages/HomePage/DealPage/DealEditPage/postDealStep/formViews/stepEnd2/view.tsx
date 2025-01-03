"use client";
import { useResponsive } from "@/mui/common/hooks";
import { Box, Button } from "@mui/material";
import { updateHash } from "src/common/utils";
import { useFlat } from "src/service";
import { EndLabel, Title0 } from "../../components/label";
import DealCard from "../../components/dealCard";

export default ({
	handleCheck,
}: {
	handleCheck: (name: string) => Promise<any>;
}) => {
	const { stepIndex, currentDeal } = useFlat("dealStore");
	const isMobile = useResponsive("down", "md");
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				flexDirection: isMobile ? "column" : "row",
			}}
		>
			<Box
				sx={{
					paddingRight: isMobile ? 0 : "50px",
					maxWidth: isMobile ? "100%" : "50%",
					mb: isMobile ? "30px" : "0px",
					...(isMobile
						? {
								paddingTop: "18px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}
						: {}),
				}}
			>
				<Title0
					sx={{
						mb: "18px",
					}}
				>
					Great work!
				</Title0>
				<EndLabel
					width={"90%"}
					sx={{
						mb: "40px",
					}}
				>
					You are ready to submit your deal!
				</EndLabel>
				<Button
					variant="outlined"
					onClick={() => {
						if (stepIndex > 0) {
							const step = stepIndex - 1;
							location.hash = updateHash({
								name: "step",
								value: String(step + 1),
							});
						}
					}}
				>
					Previous
				</Button>
			</Box>
			<Box>{currentDeal && <DealCard deal={currentDeal} />}</Box>
		</Box>
	);
};
