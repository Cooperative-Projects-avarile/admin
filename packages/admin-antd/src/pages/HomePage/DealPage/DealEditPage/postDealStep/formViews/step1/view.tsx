"use client";
import { Box, Grid } from "@mui/material";
import { useFlat } from "src/service";
import { Crad1 } from "../../components/card";
import { Label1, Title1 } from "../../components/label";
import { DealType } from "@/types/model/dealEntity";

const datas = [
	{
		title: "Partnership",
		id: "partnerships",
		icon: "/assets/icons/land-suite-4.png",
		info: "Create high value synergies by seeking suppliers, distribution channels, or collaborative opportunities for mutual growth.",
	},
	{
		title: "Capital Raising",
		id: "capital_raising",
		icon: "/assets/icons/land-suite-1.png",
		info: "Need capital to grow? Pitch to the Scaling community & find the perfect investor for you by negotiating directly with them.",
	},
	{
		title: "StartUp Pitch",
		id: "startup_pitch",
		icon: "/assets/icons/land-suite-3.png",
		info: "Got a great idea for a business & need partners? Find & connect with the right people to start your business with instantly.",
	},
	{
		title: "Equity",
		id: "equity",
		icon: "/assets/icons/land-suite-2.png",
		info: "Find the right person to own a small or large share of your business & bring their skills or connections to help you grow.",
	},
	{
		title: "Sell A Business",
		id: "sell_a_business",
		icon: "/assets/icons/land-suite-5.png",
		info: "List your biz for sale here to reach the perfect buyer audience. You can even let people know if you are open to vendor finance.",
	},
];

export default () => {
	const { setDealType, targetType } = useFlat("dealStore");

	return (
		<Box>
			<Label1
				sx={{
					mb: "6px",
				}}
			>
				Step 1
			</Label1>
			<Title1
				sx={{
					mb: "32px",
				}}
			>
				Choose the type of deal you’d like to post
			</Title1>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2} columns={{ xs: 2, sm: 2, md: 12 }}>
					{datas.map(({ id, title, info, icon }, index) => {
						return (
							<Grid key={index} item xs={2} sm={2} md={4}>
								<Crad1
									onClick={() => {
										if (
											!sessionStorage.getItem(
												"currentDealId",
											)
										) {
											setDealType(id as DealType);
										}
									}}
									title={title}
									info={info}
									icon={icon}
									checked={targetType == id}
								></Crad1>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
};
