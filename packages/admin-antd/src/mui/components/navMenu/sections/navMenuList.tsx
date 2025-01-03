import { useEffect, useState } from "react";
import { NavCollapse, NavLi } from ".";
import { useCss } from "../useCss";
import { NavMenuItem } from "./navMenuItem";
import { MenuItem } from "./navMenuVertical";
import { NavSubList } from "./navSubList";

// ----------------------------------------------------------------------
interface NavMenuListProps {
	depth: number;
	data: MenuItem;
	onSubMenuToggle?: (isOpen: boolean, index: number) => void;
	index: number;
}
export function NavMenuList({
	index,
	data,
	depth,
	onSubMenuToggle,
}: NavMenuListProps) {
	const { classNameObj } = useCss();
	const [lineCount, setLineCount] = useState(0);
	// const active = useActiveLink(data.path, !!data.children);
	let active = false;
	const [openMenu, setOpenMenu] = useState(active);

	const handleToggleMenu = () => {
		if (data.children) {
			setOpenMenu((prev) => !prev);
			onSubMenuToggle?.(!openMenu, index);
		}
	};

	const renderNavItem = (
		<NavMenuItem
			data={data}
			// state
			depth={depth}
			active={active}
			hasChild={!!data.children}
			open={data.children && openMenu}
			onClick={handleToggleMenu}
		/>
	);
	useEffect(() => {
		if (!openMenu) return;
		if (data.children) {
			let count = data.children.length;
			for (let i = count - 1; i >= 0; i--) {
				if (data.children[i].children?.length) {
					count = i + 1;
					break;
				}
			}
			setLineCount(count);
		}
	}, [data.children, openMenu]);
	// Has children
	if (data.children) {
		return (
			<NavLi
				sx={{
					[`& .${classNameObj.li}`]: {
						"&:first-of-type": { mt: "var(--nav-item-gap)" },
					},
				}}
			>
				{renderNavItem}

				<NavCollapse
					data-group={data.title}
					in={openMenu}
					depth={depth}
					unmountOnExit
					mountOnEnter
				>
					<NavSubList
						onSubMenuToggle={(isOpen, index) => {
							if (index == data.children!?.length - 1) return;
							if (isOpen) {
								setLineCount(
									lineCount +
										data.children!?.[index]?.children!
											?.length || 0,
								);
							} else {
								setLineCount(
									lineCount -
										data.children!?.[index]?.children!
											?.length || 0,
								);
							}
						}}
						lineCount={lineCount}
						data={data.children}
						depth={depth}
					/>
				</NavCollapse>
			</NavLi>
		);
	}

	// Default
	return <NavLi>{renderNavItem}</NavLi>;
}
