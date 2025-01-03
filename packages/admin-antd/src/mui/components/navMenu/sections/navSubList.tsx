import { NavMenuList } from "./navMenuList";
import { MenuItem } from "./navMenuVertical";
import { NavUl } from "./navUl";

// ----------------------------------------------------------------------
interface NavSubListProps {
	depth: number;
	data: MenuItem[];
	lineCount: number;
	onSubMenuToggle?: (isOpen: boolean, index: number) => void;
}
export function NavSubList({
	lineCount,
	data,
	depth,
	onSubMenuToggle,
}: NavSubListProps) {
	return (
		<NavUl sx={{ gap: "var(--nav-item-gap)" }}>
			<div
				style={{
					position: "absolute",
					width: "2px",
					left: 0,
					top: 0,
					background: "var(--nav-bullet-light-color)",
					height: `calc(var(--nav-item-sub-height) * ${lineCount}  + 4px * ${lineCount} - 28px`,
					transition: "all 0.2s",
				}}
			></div>
			{data.map((list, index) => (
				<NavMenuList
					onSubMenuToggle={onSubMenuToggle}
					index={index}
					key={list.title}
					data={list}
					depth={depth + 1}
				/>
			))}
		</NavUl>
	);
}
