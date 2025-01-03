"use client";
import { useBoolean } from "@/mui/common/hooks";
import { ConfirmDialog } from "@/mui/components/customDialog";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { ColumnItem } from "./customTable";
import styles from "./style.module.scss";

// ----------------------------------------------------------------------

type Props<T> = {
	row: T;
	selected: boolean;
	onSelectRow: (row: T) => void;
	columns: ColumnItem<T>[];
	isScroll?: boolean;
	index?: number;
};

export function OrderTableRow<T extends { id: string }>({
	isScroll,
	columns,
	row,
	selected,
	onSelectRow,
	fileds,
	table,
	methods,
}: Props<T>) {
	const confirm = useBoolean();
	const isEditing = table.editKey == row.id;
	const [isHover, setIsHover] = useState(false);
	useEffect(() => {
		if (table.editKey == row.id) {
			for (let key in row) {
				methods.setValue(key as any, row[key]);
			}
		}
	}, [table.editKey]);
	const renderPrimary = (
		<TableRow
			onMouseOver={() => {
				setIsHover(true);
			}}
			onMouseOut={() => {
				setIsHover(false);
			}}
			hover
			selected={selected}
		>
			<TableCell
				sx={{
					zIndex: 1,
					position: "sticky",
					left: 0,
					backgroundColor: selected || isHover ? "#f7f7f8" : "white",
				}}
				padding="checkbox"
			>
				<Checkbox
					checked={selected}
					onClick={() => {
						onSelectRow(row);
					}}
					inputProps={{
						id: `row-checkbox-${row.id}`,
						"aria-label": `Row checkbox`,
					}}
				/>
			</TableCell>
			{columns?.map((item, index) => {
				const { render, renderEdit } = item;
				let sxData = {};
				if (item.fixed == "left") {
					sxData = {
						position: "sticky",
						left: item._offect,
						zIndex: 1,
						backgroundColor:
							selected || isHover ? "#f7f7f8" : "white",
					};
				} else if (item.fixed == "right") {
					;
					sxData = {
						position: "sticky",
						right: item._offect,
						zIndex: 1,
						backgroundColor:
							selected || isHover ? "#f7f7f8" : "white",
					};
				}
				return (
					<TableCell
						className={
							isScroll && item._isEdge
								? item.fixed == "left"
									? styles.left
									: styles.right
								: ""
						}
						sx={{
							overflow: "hidden",

							...(item.fixed ? sxData : {}),
						}}
						key={(item.dataIndex as string) || index}
					>
						<Box
							sx={{
								...(isEditing
									? {
											zIndex: 0,
											position: "relative",
										}
									: {}),
							}}
						>
							{isEditing
								? renderEdit
									? renderEdit({
											api: table,
										})
									: fileds[index]
								: render
									? render?.({
											value: row[item.dataIndex!],
											record: row,
											index,
											api: table,
										})
									: row[item.dataIndex!]}
						</Box>
					</TableCell>
				);
			})}
		</TableRow>
	);

	// const renderSecondary = (
	//     <TableRow>
	//         <TableCell sx={{ p: 0, border: "none" }} colSpan={8}>
	//             <Collapse
	//                 in={collapse.value}
	//                 timeout="auto"
	//                 unmountOnExit
	//                 sx={{ bgcolor: "background.neutral" }}>
	//                 <Paper sx={{ m: 1.5 }}>
	//                     {row.items.map((item) => (
	//                         <Stack
	//                             key={item.id}
	//                             direction="row"
	//                             alignItems="center"
	//                             sx={{
	//                                 p: (theme) =>
	//                                     theme.spacing(1.5, 2, 1.5, 1.5),
	//                                 "&:not(:last-of-type)": {
	//                                     borderBottom: (theme) =>
	//                                         `solid 2px ${theme.vars.palette.background.neutral}`,
	//                                 },
	//                             }}>
	//                             <Avatar
	//                                 src={item.coverUrl}
	//                                 variant="rounded"
	//                                 sx={{ width: 48, height: 48, mr: 2 }}
	//                             />

	//                             <ListItemText
	//                                 primary={item.name}
	//                                 secondary={item.sku}
	//                                 primaryTypographyProps={{
	//                                     typography: "body2",
	//                                 }}
	//                                 secondaryTypographyProps={{
	//                                     component: "span",
	//                                     color: "text.disabled",
	//                                     mt: 0.5,
	//                                 }}
	//                             />

	//                             <div>x{item.quantity} </div>

	//                             <Box sx={{ width: 110, textAlign: "right" }}>
	//                                 {toCurrency(item.price)}
	//                             </Box>
	//                         </Stack>
	//                     ))}
	//                 </Paper>
	//             </Collapse>
	//         </TableCell>
	//     </TableRow>
	// );

	return (
		<>
			{renderPrimary}
			<ConfirmDialog
				open={confirm.value}
				onClose={confirm.onFalse}
				title="Delete"
				content="Are you sure want to delete?"
				action={
					<Button
						variant="contained"
						color="error"
						onClick={() => {}}
					>
						Delete
					</Button>
				}
			/>
		</>
	);
}
