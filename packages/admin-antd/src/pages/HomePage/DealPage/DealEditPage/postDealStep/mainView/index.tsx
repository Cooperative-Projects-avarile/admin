"use client";

import { DealEntity } from "@/types/model/dealEntity";
import { Box } from "@mui/material";
import { MutableRefObject, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { updateHash } from "src/common/utils";
import { useFlat } from "src/service";
import {
	Step1,
	Step2,
	Step3,
	Step4,
	Step5,
	Step6,
	Step7,
	StepBusiness,
	StepEnd2,
	StepFaqs,
	StepMarket,
	StepMedia,
	StepSubmit,
	StepTeam,
} from "../formViews";
import PostDealTipModal from "./modalWrapper";
import StepTabs from "./stepTabs";
export enum StepId {
	Step1,
	Step2,
	Step3,
	Step4,
	Step5,
	Step6,
	Step7,
	StepSubmit,
	StepBusiness,
	StepMarket,
	StepTeam,
	StepMedia,
	StepFaqs,
	StepEnd2,
}
export default () => {
	const {
		submitDraftAct,
		createDraftAct,
		updateDraftAct,
		setCurrentDeal,
		currentDeal,
		setIsComplete,
		currentDealId: id,
		setCurrentDealId,
		stepIndex,
		targetType,
	} = useFlat("dealStore");

	// step1:type，step8:submit
	const NoValidateIndexArr = [
		StepId.Step1,
		StepId.StepSubmit,
		StepId.StepEnd2,
	];
	const handleValidateBase = async (type: string = "") => {
		if (stepIndex > formArr.current.length - 1) {
			return false;
		}
		// add阶段，未draft，保存直接退
		if (!id && type == "exit") {
			return false;
		}
		// 如果不存在，就异常了
		if (!(stepIndex in formArr.current)) {
			return false;
		}
		if (
			NoValidateIndexArr.includes(stepIndex) ||
			(await formArr.current[stepIndex]?.current!?.trigger())
		) {
			return true;
		}
		return false;
	};
	// 响应校验事件
	const handleValidate = async (
		type: "submit" | "exit" | "" = "",
		targetStep?: number,
	) => {
		const flag = await handleValidateBase();
		if (flag) {
			// 通过了
			if (type == "submit" && currentDeal?.id) {
				await submitDraftAct({ id: currentDeal?.id });
				setIsComplete(true);
				return;
			}

			const step = stepIndex + 1;
			if (type !== "exit") {
				location.hash = updateHash({
					name: "step",
					value: isNaN(targetStep! * 1) ? step + 1 : targetStep!,
				});
			}
			const values =
				formArr.current[stepIndex]?.current!?.getValues() || {};
			const newDeal = {
				...currentDeal,
				...values,
				type: targetType,
			} as DealEntity;
			setCurrentDeal(newDeal);
			// 判断add还是edit
			if (!id) {
				if (step > StepId.Step2) {
					// 如果过了第二步，那么就给他创建新的，并且设置id
					const data = await createDraftAct(newDeal);
					const id = data.payload.content?.[0]?.id;
					setCurrentDealId(Number(id));
					location.hash = updateHash({
						name: "id",
						value: id,
					});
					location.hash = updateHash({
						name: "isAdd",
						value: 1,
					});
				}
			} else {
				updateDraftAct({ ...newDeal, current_step: stepIndex });
			}
		}
	};
	const formRefStep2 = useRef<UseFormReturn>();
	const formRefStep3 = useRef<UseFormReturn>();
	const formRefStep4 = useRef<UseFormReturn>();
	const formRefStep5 = useRef<UseFormReturn>();
	const formRefStep6 = useRef<UseFormReturn>();
	const formRefStep7 = useRef<UseFormReturn>();
	const formRefBusiness = useRef<UseFormReturn>();
	const formRefMarket = useRef<UseFormReturn>();
	const formRefTeam = useRef<UseFormReturn>();
	const formRefMedia = useRef<UseFormReturn>();
	const formRefFaqs = useRef<UseFormReturn>();
	const config: {
		[key in StepId]: [
			React.ReactNode,
			MutableRefObject<UseFormReturn | undefined> | undefined,
		];
	} = {
		[StepId.Step1]: [<Step1 />, undefined],
		[StepId.Step2]: [<Step2 formRef={formRefStep2} />, formRefStep2],
		[StepId.Step3]: [<Step3 formRef={formRefStep3} />, formRefStep3],
		[StepId.Step4]: [<Step4 formRef={formRefStep4} />, formRefStep4],
		[StepId.Step5]: [<Step5 formRef={formRefStep5} />, formRefStep5],
		[StepId.Step6]: [<Step6 formRef={formRefStep6} />, formRefStep6],
		[StepId.Step7]: [<Step7 formRef={formRefStep7} />, formRefStep7],
		[StepId.StepSubmit]: [<StepSubmit />, undefined],
		[StepId.StepBusiness]: [
			<StepBusiness formRef={formRefBusiness} />,
			formRefBusiness,
		],
		[StepId.StepMarket]: [
			<StepMarket formRef={formRefMarket} />,
			formRefMarket,
		],
		[StepId.StepTeam]: [<StepTeam formRef={formRefTeam} />, formRefTeam],
		[StepId.StepMedia]: [
			<StepMedia formRef={formRefMedia} />,
			formRefMedia,
		],
		[StepId.StepFaqs]: [<StepFaqs formRef={formRefFaqs} />, formRefFaqs],
		[StepId.StepEnd2]: [
			<StepEnd2 handleCheck={handleValidate} />,
			undefined,
		],
	};
	;
	const Comp = Object.values(config)[stepIndex][0] || <></>;
	const formArrDefaultValue = Object.values(config).map((item) => {
		return item[1];
	});
	const formArr =
		useRef<(MutableRefObject<UseFormReturn | undefined> | undefined)[]>(
			formArrDefaultValue,
		);
	return (
		<PostDealTipModal handleCheck={handleValidate} open={true}>
			<Box
				sx={{
					margin: "16px 0 32px 0",
				}}
			>
				<StepTabs handleCheck={handleValidate} />
			</Box>

			{Comp}
		</PostDealTipModal>
	);
};
