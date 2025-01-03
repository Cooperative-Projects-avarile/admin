import styled from "@emotion/styled";
import { Box, BoxProps, Stack } from "@mui/material";
import { CardInfoLabel, Label1 } from "../label";

export interface CardBoxProps extends BoxProps {
	active?: boolean;
}
export const Card = styled(Box)<CardBoxProps>(({ active }) => ({
	borderRadius: "16px",
	border: !active
		? "1px solid #696969"
		: "2px solid var(--Scaling-Blue, #256CCB)",
	background: !active ? "#FFF" : "rgba(117, 130, 142, 0.10)",
	"&:hover": {
		background: "rgba(117, 130, 142, 0.10)",
		border: "2px solid var(--Scaling-Blue, #256CCB)",
	},
}));
export const Crad1 = ({
	children,
	sx,
	title,
	info,
	icon,
	checked,
	...rest
}: React.PropsWithChildren<
	BoxProps & {
		icon: string;
		title: string;
		info: string;
		checked?: boolean;
	}
>) => {
	return (
		<Card
			{...rest}
			active={checked}
			sx={{
				height: "164px",
				padding: "20px",
				...sx,
			}}
		>
			<Stack
				direction={"row"}
				sx={{
					marginBottom: "8px",
				}}
			>
				{icon && (
					<img
						src={icon}
						style={{
							width: "28px",
							height: "28px",
							objectFit: "contain",
							marginRight: "8px",
						}}
					/>
				)}
				<Label1>{title}</Label1>
			</Stack>
			<CardInfoLabel>{info}</CardInfoLabel>
		</Card>
	);
};
