import { Card } from "@mui/material";
import { Outlet } from "react-router-dom";

const DealPage = () => {
	return (
		<Card
			sx={{
				padding: "32px",
				height: "100%",
				overflow: "auto",
			}}
		>
			<Outlet></Outlet>
		</Card>
	);
};

export default DealPage;
