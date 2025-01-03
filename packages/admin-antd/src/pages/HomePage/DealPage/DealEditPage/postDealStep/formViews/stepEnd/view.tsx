"use client";
import { Box, Button } from "@mui/material";
import { useFlat } from "src/service";
import { EndInfoLabel, EndLabel, EndTitle } from "../../components/label";
import { useIsMobile } from "@/mui/common/hooks";
import DealCard from "../../components/dealCard";

export default () => {
	const { currentDeal } = useFlat("dealStore");
	const isMobile = useIsMobile();
	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
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
				<EndTitle
					sx={{
						mb: "18px",
					}}
				>
					Keep up the great work!
				</EndTitle>
				<EndLabel
					sx={{
						mb: "40px",
					}}
					width={"90%"}
				>
					Your Deal has been submitted for approval.
				</EndLabel>
				<EndInfoLabel
					sx={{
						marginBottom: "30px",
					}}
				>
					The Scaling Team are now reviewing your deal submission and
					you will receive a response within 1-2 business days.
				</EndInfoLabel>
				<EndInfoLabel
					sx={{
						marginBottom: "40px",
					}}
				>
					When approved, you will see it posted within 24 hours. If
					not, we will contact you with guidance on how to improve
					your listing to resubmit and get it posted. 
				</EndInfoLabel>
				<Button onClick={() => {}} variant="contained">
					View More Deals
				</Button>
				<Button
					sx={{
						ml: "10px",
					}}
					onClick={() => {
						// window.location.href = paths.account.postDealStep;
					}}
					variant="outlined"
				>
					Add another deal
				</Button>
			</Box>
			<Box>{currentDeal && <DealCard deal={currentDeal} />}</Box>
		</Box>
	);
};
