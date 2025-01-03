"use client";
import { Box, Grid, Stack } from "@mui/material";
import { useFlat } from "src/service";
import DealCard from "../../components/dealCard";
import {
    CardInfoLabel,
    Label1,
    MultiInfoLabel,
    Title1,
} from "../../components/label";

const icon1 = "/assets/icons/stepDeal/mdi_business.svg";
const icon2 = "/assets/icons/stepDeal/ic_user_follow.svg";
const icon3 = "/assets/icons/stepDeal/nimbus_marketing.svg";
const icon4 = "/assets/icons/stepDeal/oui_document.svg";
const icon5 = "/assets/icons/stepDeal/ph_question.svg";

export default () => {
	const { currentDeal } = useFlat("dealStore", {
		currentDeal: "IN",
	});

	return (
		<Box>
			<Grid
				container
				columns={{
					xs: 6,
					sm: 12,
					md: 12,
				}}
			>
				<Grid
					item
					xs={6}
					sx={{
						paddingRight: "50px",
					}}
				>
					<Title1>
						You have completed all the mandatory information.
					</Title1>
					<CardInfoLabel
						width={"90%"}
						sx={{
							mb: "32px",
							fontSize: "16px",
							fontWeight: 600,
							lineHeight: "24px",
						}}
					>
						You can submit right now by clicking 'Submit for
						approval' or if you really want to stand out, tell us
						more by clicking ‘Add more info’ below.
					</CardInfoLabel>
					{currentDeal && <DealCard deal={currentDeal} />}
				</Grid>
				<Grid item xs={6}>
					<MultiInfoLabel
						sx={{
							mb: "32px",
						}}
					>
						If you want to add more information about your deal,
						choose the Add more info button below.
					</MultiInfoLabel>
					<Stack gap={"24px"}>
						<Stack direction={"row"} alignItems={"flex-start"}>
							<img
								style={{
									marginRight: "12px",
								}}
								src={icon1}
							></img>
							<Stack>
								<Label1>Your business</Label1>
								<CardInfoLabel>
									What problem is your business solving?
									Describe your solution.
								</CardInfoLabel>
							</Stack>
						</Stack>
						<Stack direction={"row"} alignItems={"flex-start"}>
							<img
								style={{
									marginRight: "12px",
								}}
								src={icon2}
							></img>
							<Stack>
								<Label1>Your team</Label1>
								<CardInfoLabel>
									Introduce the key members of your team.
									Highlight their relevant experience and
									expertise. A strong team can significantly
									boost investor and partner confidence.
								</CardInfoLabel>
							</Stack>
						</Stack>
						<Stack direction={"row"} alignItems={"flex-start"}>
							<img
								style={{
									marginRight: "12px",
								}}
								src={icon3}
							></img>
							<Stack>
								<Label1>Your market</Label1>
								<CardInfoLabel>
									Tell us about your target market. Describe
									the size of the opportunity. Describe the
									competitive environment.
								</CardInfoLabel>
							</Stack>
						</Stack>
						<Stack direction={"row"} alignItems={"flex-start"}>
							<img
								style={{
									marginRight: "12px",
								}}
								src={icon4}
							></img>
							<Stack>
								<Label1>Documents and links</Label1>
								<CardInfoLabel>
									Add documents and links that you think will
									enhance and expand on your deal.
								</CardInfoLabel>
							</Stack>
						</Stack>
						<Stack direction={"row"} alignItems={"flex-start"}>
							<img
								style={{
									marginRight: "12px",
								}}
								src={icon5}
							></img>
							<Stack>
								<Label1>FAQs</Label1>
								<CardInfoLabel>
									Anticipate questions from potential partners
									or investors and provide answers. This helps
									clarify common queries upfront.
								</CardInfoLabel>
							</Stack>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
};
