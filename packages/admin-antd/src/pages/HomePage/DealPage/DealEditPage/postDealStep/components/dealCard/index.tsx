import { useResponsive } from "@/mui/common/hooks";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { memo } from "react";
import Sharebtn from "./share-btn";
import { DealEntity, DealType } from "@/types/model/dealEntity";
import SvgColor from "@/components/svg-color";
import { Iconify, Image } from "@/mui/components";

// ----------------------------------------------------------------------

type Props = {
	deal: DealEntity;
};

export const testData = [
	{
		icon: "/assets/icons/allDeal.svg",
		title: "All",
		description: "Secure funds to fuel your growth.",
		key: DealType.ALL,
	},
	{
		icon: "/assets/icons/ic_users_group.svg",
		title: "Partnerships",
		description: "Find strategic allies for your business.",
		key: DealType.PARTNERSHIPS,
	},
	{
		icon: "/assets/icons/vector.svg",
		title: "Capital Raising",
		description: "Secure funds to fuel your growth.",
		key: DealType.CAPITAL_RAISING,
	},
	{
		icon: "/assets/icons/icon.svg",
		title: "Startup Pitch",
		description: "Pitch your groundbreaking ideas.",
		key: DealType.STARTUP_PITCH,
	},
	{
		icon: "/assets/icons/equity.svg",
		title: "Equity",
		description: "Discover investment prospects and partnerships.",
		key: DealType.EQUITY,
	},
	{
		icon: "/assets/icons/ic_shopping_cart.svg",
		title: "Business for Sale",
		description: "Promote your venture.",
		key: DealType.SELL_A_BUSINESS,
	},
];

export const returnTypeBasedOnDealType = (dealType: DealType) => {
	const item = testData.find((i) => i.key === dealType);
	if (!item) return;
	return (
		<>
			<SvgColor
				src={item.icon}
				sx={{
					width: "14px",
					height: "14px",
				}}
			/>
			{item.title}
		</>
	);
};

function DealCard({ deal }: Props) {
	const mdUp = useResponsive("up", "md");
	const { pics } = deal || {};
	return (
		// <Link underline="none" component={RouterLink} href={`/marketplace/deal/${id}`} color="inherit">
		<Card
			sx={{
				width: mdUp ? "270px" : "calc(100vw - 32px)",
				":hover": {
					boxShadow: "4px 4px 14px 0 rgb(0 0 0 / 5%)",
				},
			}}
		>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				sx={{
					pt: 1.5,
					pl: 2,
					pr: 1.5,
					top: 0,
					width: 1,
					zIndex: 9,
					position: "absolute",
					height: "40px",
				}}
			>
				<Stack
					spacing={0.5}
					direction="row"
					alignItems={"center"}
					sx={{
						px: 1,
						borderRadius: 0.75,
						typography: "subtitle2",
						bgcolor: "text.primary",
						color: (theme) =>
							theme.palette.mode === "light"
								? "common.white"
								: "text.primary",
						fontSize: "12px",
						fontStyle: "normal",
						fontWeight: 500,
						lineHeight: "20px",
					}}
				>
					{returnTypeBasedOnDealType(deal.type)}
				</Stack>

				<Checkbox
					color="default"
					checked
					icon={<Iconify icon="carbon:favorite" />}
					checkedIcon={
						<Iconify
							color={"#d85963"}
							icon="carbon:favorite-filled"
						/>
					}
					// icon={<Iconify icon="iconoir:bookmark" />}
					// checkedIcon={<Iconify icon="iconoir:bookmark-solid" />}
					sx={{ color: "#D85963" }}
				/>
			</Stack>
			<Image alt={deal.title} src={pics ? pics[0] : "N/A"} ratio="6/4" />
			<Box height="220px">
				<Stack
					direction={"column"}
					alignSelf={"stretch"}
					spacing={"8px"}
					sx={{ padding: "16px 20px 24px 20px" }}
				>
					<Stack direction={"row"} gap={"8px"} alignSelf={"stretch"}>
						<Typography
							fontSize={"16px"}
							fontStyle={"normal"}
							fontWeight={600}
							lineHeight={"28px"}
							color={"text.primary"}
						>
							{deal.title}
						</Typography>
					</Stack>
					<Typography
						fontSize={"14px"}
						fontStyle={"normal"}
						fontWeight={3500}
						lineHeight={"22px"}
						color={"#59745D"}
						width={"100%"}
						sx={{
							textOverflow: "ellipsis",
							overflow: "hidden",
							display: "-webkit-box",
							WebkitLineClamp: 3,
							WebkitBoxOrient: "vertical",
							width: "100%",
						}}
					>
						{deal.overview}
					</Typography>
				</Stack>

				<Divider sx={{ borderStyle: "hidden" }} />

				<Box
					sx={{
						position: "absolute",
						bottom: "0",
						width: "100%",
					}}
				>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent={"space-between"}
						sx={{
							p: 2.5,
						}}
						columnGap={"56px"}
					>
						<Stack
							direction="row"
							alignItems={"center"}
							justifyContent={"center"}
							sx={{
								px: 1,
								borderRadius: 0.75,
								typography: "subtitle2",
								bgcolor: "grey.200",
								color: (theme) =>
									theme.palette.mode === "light"
										? "text.primary"
										: "common.white",
								fontSize: "12px",
								fontStyle: "normal",
								fontWeight: 700,
								lineHeight: "20px",
								wordBreak: "break-all",
							}}
						>
							{deal.industry}
						</Stack>
						<Sharebtn></Sharebtn>
					</Stack>
				</Box>
			</Box>
		</Card>
		// </Link>
	);
}

export default memo(DealCard);
