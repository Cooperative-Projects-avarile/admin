import { useIsMobile } from "@/mui/common/hooks";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Title1 = styled(Typography)(() => {
	const isMobile = useIsMobile();
	return {
		fontSize: isMobile ? "24px" : "32px",
		fontWeight: "700",
		lineHeight: isMobile ? "36px" : "48px",
		color: "#256CCB",
	};
});

export const Title0 = styled(Typography)(() => ({
	fontSize: "64px",
	fontWeight: "700",
	lineHeight: "48px",
	color: "#256CCB",
}));

export const Title3 = styled(Typography)(() => ({
	fontSize: "12px",
	fontWeight: "700",
	lineHeight: "20px",
	color: "#256CCB",
}));

export const Label1 = styled(Typography)(() => {
	const isMobile = useIsMobile();
	return {
		fontSize: isMobile ? "17px" : "18px",
		fontWeight: "600",
		lineHeight: isMobile ? "26px" : "28px",
		color: "#141414",
	};
});

export const CardInfoLabel = styled(Typography)(() => ({
	color: "#696969",
	fontSize: "14px",
	fontStyle: "normal",
	fontWeight: "400",
	lineHeight: "22px",
}));

export const DescribeLabel = styled(Typography)(() => ({
	color: "#696969",
	fontSize: "12px",
	fontStyle: "normal",
	fontWeight: "400",
	lineHeight: "18px",
}));

export const MultiInfoLabel = styled(Typography)(() => ({
	color: "#141414",
	fontSize: "16px",
	fontStyle: "normal",
	fontWeight: "600",
	lineHeight: "24px",
}));

export const CardTitleLabel = styled(Typography)(() => {
	const isMobile = useIsMobile();
	return {
		color: "#141414",
		fontSize: isMobile ? "20px" : "24px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: isMobile ? "30px" : "36px",
	};
});

export const FormItemLabel = styled(Typography)(() => {
	const isMobile = useIsMobile();
	return {
		color: "#141414",
		fontSize: isMobile ? "16px" : "14px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: isMobile ? "24px" : "22px",
	};
});

export const EndLabel = styled(Typography)(() => ({
	color: "#696969",
	fontSize: "24px",
	fontStyle: "normal",
	fontWeight: "600",
	lineHeight: "36px",
}));

export const TagLabel = styled(Typography)(() => {
	const isMobile = useIsMobile();
	return {
		color: "#256CCB",
		fontSize: isMobile ? "14px" : "12px",
		fontStyle: "normal",
		fontWeight: isMobile ? "500" : "400",
		lineHeight: isMobile ? "22px" : "20px",
	};
});

export const FieldGroupTitle = styled(Typography)(() => {
	const isMobile = useIsMobile();
	return {
		color: "#141414",
		fontSize: isMobile ? "20px" : "16px",
		fontStyle: "normal",
		fontWeight: "600",
		lineHeight: "24px",
	};
});

export const EndTitle = styled(Typography)(() => {
	const isMobile = useIsMobile();
	return {
		color: "#256CCB",
		fontSize: isMobile ? "40px" : "64px",
		fontStyle: "normal",
		fontWeight: isMobile ? "700" : "700",
		lineHeight: isMobile ? "50px" : "80px",
	};
});

export const EndInfoLabel = styled(Typography)(() => ({
	color: "#696969",
	fontSize: "16px",
	fontStyle: "normal",
	fontWeight: "400",
	lineHeight: "24px",
}));
