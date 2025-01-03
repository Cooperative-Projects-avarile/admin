"use client";

import { useEffect } from "react";
import { updateHash } from "src/common/utils";
import { useFlat } from "src/service";
import StepView from "./mainView";
import useHashParams from "@/common/utils/useHashParams";

const View = () => {
	const getHash = useHashParams();
	const id = getHash().id;
	const {
		setIsFirstAdd,
		setCurrentDealId,
		setCurrentDeal,
		currentDeal,
		setStepIndex,
		queryDealByIdAct,
	} = useFlat("dealStore");

	// 监听hash改变，响应hash改变，从而切换显示的step内容
	useEffect(() => {
		const handleHashChange = () => {
			setStepIndex(
				Number(getHash().step) > 0
					? Number(getHash().step) - 1
					: Number(getHash().step),
			);
		};
		handleHashChange();
		window.addEventListener("hashchange", handleHashChange, false);
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
			setCurrentDeal(null);
		};
	}, []);

	// 根据hash中的id，来分发编辑还是添加的业务流程
	useEffect(() => {
		const id = getHash().id;
		const isAdd = getHash().isAdd == "1";
		setIsFirstAdd(isAdd);
		// id存在就更新，不存在就清空
		setCurrentDealId(id);
		// id不存在，就说明是添加，反之就是编辑
		if (!id) {
			// 如果刷新了，没有id，页码归零，重来
			let stepStr = updateHash({
				name: "step",
				value: "1",
			});
			location.hash = stepStr;
			location.hash = updateHash({
				name: "isAdd",
				value: "1",
			});
			setStepIndex(0);
			setCurrentDeal(null);
		} else {
			// 编辑，使用id去请求
			queryDealByIdAct({
				id: Number(id),
			});
		}
	}, []);
	if (id) {
		// 存在id，就说明是修改，但前提是需要currentDeal存在数据，再显示
		// 这样可以防止初始化默认值的时候不存在的问题
		return <>{currentDeal && <StepView />}</>;
	} else {
		return <StepView />;
	}
};

export default View;
