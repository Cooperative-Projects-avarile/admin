import { useFlat } from "@/service";
import { Box, Tab, Tabs } from "@mui/material";

const StepTabs = ({
	handleCheck,
}: {
	handleCheck?: (type: string, step: number) => Promise<any>;
}) => {
	const TabConfig = [
		{
			step: 0,
			label: "Step 1 : Type",
		},
		{
			step: 1,
			label: "Step 2 : Name",
		},
		{
			step: 2,
			label: "Step 3 : Overview",
		},
		{
			step: 3,
			label: "Step 4 : Headquarters",
		},
		{
			step: 4,
			label: "Step 5 ",
		},
		{
			step: 5,
			label: "Step 6 : Highlights",
		},
		{
			step: 6,
			label: "Step 7 : images",
		},
		{
			step: 7,
			label: "Step 8 : Add more info",
		},
		{
			step: 8,
			label: "Step 9 : Add more info",
		},
		{
			step: 9,
			label: "Step 10 : Market",
		},
		{
			step: 10,
			label: "Step 11 : Team",
		},
		{
			step: 11,
			label: "Step 12 : Media",
		},
		{
			step: 12,
			label: "Step 13 : Faqs",
		},
		{
			step: 13,
			label: "Step 14 : End",
		},
	];
	const { stepIndex } = useFlat("dealStore");

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		handleCheck?.("", newValue + 1);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={stepIndex}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					{TabConfig.map(({ step, label }) => {
						return (
							<Tab
								sx={{
									margin: "0 12px",
								}}
								value={step}
								label={label}
							/>
						);
					})}
				</Tabs>
			</Box>
		</Box>
	);
};

export default StepTabs;
