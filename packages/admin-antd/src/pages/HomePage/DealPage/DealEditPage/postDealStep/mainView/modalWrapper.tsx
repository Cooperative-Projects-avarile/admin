"use client";
import { useIsMobile } from "@/common/hooks";
import useHashParams from "@/common/utils/useHashParams";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { updateHash } from "src/common/utils";
import { appHelper, useFlat } from "src/service";
import { StepId } from ".";
import { FormItemLabel } from "../components/label";
import MyStepper from "../components/steper";
import { DealTag } from "../components/tag";
import StepEnd from "../formViews/stepEnd/view";

interface IPostDealTipModalProps extends React.PropsWithChildren {
	open?: boolean;
	onClose?: () => void;
	handleCheck?: () => Promise<any>;
	handleSaveValue?: () => void;
}

export default function PostDealTipModal(props: IPostDealTipModalProps) {
	const { children, handleCheck = () => Promise.resolve(true) } = props;
	const getHashData = useHashParams();
	const { stepIndex, currentDeal, targetType, isComplete, setIsComplete } =
		useFlat("dealStore", {
			stepIndex: "IN",
			currentDeal: "IN",
			targetType: "IN",
			isComplete: "IN",
		});

	const isMobile = useIsMobile();
	useEffect(() => {
		return () => {
			setIsComplete(false);
		};
	}, []);

	return (
		<Stack
			justifyContent={"center"}
			sx={{
				width: "100%",
				height: "100%",
			}}
		>
			<Stack
				sx={{
					width: "calc(100% - 12px)",
					bgcolor: "background.paper",
					padding: { xs: "16px 12px", md: "30px 45px" },
					borderRadius: "10px",
					height: "100%",
					overflow: "auto",
					position: "relative",
				}}
				alignItems={"center"}
			>
				{isComplete ? (
					<Box
						sx={{
							width: "100%",
							height: "100%",
							padding: isMobile ? "0px 1px" : "0px 100px",
						}}
						flex={1}
					>
						<StepEnd />
					</Box>
				) : (
					<>
						<Stack
							sx={{
								width: "100%",
								marginBottom: "40px",
								display: "flex",
								position: "relative",
							}}
						>
							{stepIndex == 7 && (
								<Button
									onClick={() => {}}
									sx={{
										mr: 1,
										color: "#14417D",
										position: "absolute",
										right: "150px",
									}}
								>
									Preview Deal
								</Button>
							)}
							<Button
								onClick={async () => {
									handleCheck();
									appHelper.closeTabByPath();
								}}
								sx={{
									mr: 1,
									color: "#14417D",
									position: "absolute",
									right: "20px",
								}}
							>
								save & exit
							</Button>
						</Stack>
						<Box
							sx={{
								width: "100%",
								padding: isMobile ? "0px 1px" : "0px 100px",
							}}
							flex={1}
						>
							{stepIndex !== 13 && (
								<Stack
									direction={"row"}
									alignItems={"center"}
									spacing={"12px"}
								>
									<DealTag type={targetType}></DealTag>

									{stepIndex > StepId.Step2 && (
										<FormItemLabel>
											{currentDeal?.title}
										</FormItemLabel>
									)}
								</Stack>
							)}
							{getHashData().isAdd !== "1" && stepIndex > 1 && (
								<>
									<Box
										sx={{
											height: "62px",
											width: "100%",
											textAlign: "center",
											background: "#14417D",
											boxShadow:
												"0px 4px 14px 0px rgba(0, 0, 0, 0.25)",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											position: "absolute",
											left: "0px",
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												color: "#FFF",
												fontStyle: "normal",
												fontWeight: 600,
												lineHeight: "22px",
											}}
										>
											{
												"You’re currently editing your deal"
											}
										</Typography>
									</Box>
									<Box
										sx={{
											height: "102px",
										}}
									></Box>
								</>
							)}

							{currentDeal?.reject_reason && (
								<>
									<Box
										sx={{
											height: "62px",
											width: "100%",
											textAlign: "center",
											background: "#FFAB00",
											boxShadow:
												"0px 4px 14px 0px rgba(0, 0, 0, 0.25)",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											position: "absolute",
											left: "0px",
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												color: "#141414",
												fontStyle: "normal",
												fontWeight: 400,
												lineHeight: "22px",
											}}
										>
											{currentDeal?.reject_reason ||
												"rejected"}
										</Typography>
									</Box>
									<Box
										sx={{
											height: "102px",
										}}
									></Box>
								</>
							)}
							{children}
						</Box>

						<Box
							sx={{
								textWrap: "nowrap",
								width: "100%",
								overflow: "auto",
								minHeight: "68px",
							}}
						>
							<MyStepper step={stepIndex} />
						</Box>
						{stepIndex !== 13 && (
							<Stack
								sx={{
									width: "100%",
									position: "relative",
									marginBottom: "30px",
								}}
								direction="row"
								gap={"12px"}
							>
								{stepIndex === 0 && (
									<Button
										sx={{
											position: "absolute",
											left: "0px",
										}}
										variant="outlined"
										onClick={() => {}}
									>
										Back to My Deals
									</Button>
								)}
								{stepIndex !== 0 && (
									<Button
										sx={{
											position: "absolute",
											left: "0px",
										}}
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
								)}
								<Box
									sx={{
										display: isMobile ? "flex" : "",
										position: "absolute",
										right: "0px",
									}}
								>
									{stepIndex == 7 && (
										<Button
											onClick={() => {
												handleCheck();
											}}
											sx={{
												mr: 1,
												bgcolor:
													"rgba(20, 65, 125, 0.10)",
												color: "#14417D",
											}}
										>
											Add more info
										</Button>
									)}
									{stepIndex !== 7 && (
										<Button
											variant="contained"
											onClick={() => {
												handleCheck();
											}}
											sx={{
												mr: 1,
											}}
										>
											{"Next"}
										</Button>
									)}
								</Box>
							</Stack>
						)}
					</>
				)}
			</Stack>
		</Stack>
	);
}
