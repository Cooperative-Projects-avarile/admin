import { Category } from "@/service/stores/categoryStore/slice";
import { FormInstance, Modal } from "antd";
import { useEffect, useMemo } from "react";
import { MyColumnType, fieldCreater } from "src/common/utils";
import { dpChain, useFlat } from "src/service";

const useConfig = (_?: FormInstance) => {
	const { queryListAct, pageData } = useFlat("categoryStore");

	useEffect(() => {
		queryListAct();
	}, []);

	//@ts-ignore
	return useMemo<MyColumnType<Category>[]>(() => {
		return [
			fieldCreater("id", {
				fieldConfig: {
					scope: ["table"],
				},
			}),
			fieldCreater("name", {
				fieldConfig: {},
			}),
			fieldCreater("description", {
				fieldConfig: {},
			}),
			{
				title: "action",
				key: "action",
				render: (_, record) => {
					return (
						<>
							<a
								style={{
									marginRight: "12px",
								}}
								onClick={() => {
									dpChain("categoryStore").setCurrentData(
										record
									);
									dpChain("categoryStore").setIsAddModalShow(
										true
									);
								}}
							>
								Edit
							</a>
							<a
								onClick={() => {
									Modal.confirm({
										title: "Are you sure?",
										onOk: async () => {
											dpChain("categoryStore").deleteAct({
												id: record.id,
											});
											queryListAct();
										},
									});
								}}
							>
								Delete
							</a>
						</>
					);
				},
			},
		];
	}, [pageData]);
};

export default useConfig;
