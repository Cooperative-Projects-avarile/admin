import type { SxProps, Theme } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

// ----------------------------------------------------------------------

export type TableNoDataProps = {
	notFound: boolean;
	sx?: SxProps<Theme>;
};

export function TableNoData({ notFound }: TableNoDataProps) {
	return (
		<TableRow>
			{notFound ? (
				<TableCell colSpan={12}></TableCell>
			) : (
				<TableCell colSpan={12} sx={{ p: 0 }} />
			)}
		</TableRow>
	);
}
