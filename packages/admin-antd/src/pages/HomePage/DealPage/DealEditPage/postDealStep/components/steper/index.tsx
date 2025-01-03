import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === "light" ? "#256CCB" : "#256CCB",
	},
}));

export default function MyStepper({
	step,
}: {
	step: number;
	progress?: number;
}) {
	return (
		<Stack
			sx={{
				paddingTop: "30px",
			}}
			direction={"row"}
			spacing={"10px"}
		>
			{Array.from(new Array(8)).map((_, index) => {
				return (
					<BorderLinearProgress
						sx={{
							flex: 1,
						}}
						variant="determinate"
						value={index <= step ? 100 : 0}
						key={index}
					/>
				);
			})}
		</Stack>
	);
}
