import { Category } from "@/service/stores/categoryStore/slice";
import { FormInstance } from "antd";
import { useEffect, useMemo } from "react";
import { MyColumnType, fieldCreater } from "src/common/utils";
import { dpChain, useFlat } from "src/service";

const useConfig = (_?: FormInstance) => {
	const { queryListAct, pageData } = useFlat("subsStore");

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
			fieldCreater("first_name", {
				fieldConfig: {
					scope: ["table"],
				},
			}),
			fieldCreater("last_name", {
				fieldConfig: {
					scope: ["table"],
				},
			}),
			fieldCreater("email", {
				fieldConfig: {
					scope: ["table"],
				},
			}),
			{
				title: "subscription",
				dataIndex: "subscription",
				key: "subscription",
				fieldConfig: {
					type: "Select",
					options: [
						{ value: "Pro", label: "Pro", key: "Pro" },
						{ value: "Premium", label: "Premium", key: "Premium" },
					],
				},
				render(a) {
					if (!a) {
						return "Free";
					} else {
						return a;
					}
				},
			},
			{
				title: "start to end",
				dataIndex: "time",
				key: "time",
				fieldConfig: {
					type: "RangePicker",
					scope: ["modal"],
					options: [
						{ value: "Pro", label: "Pro", key: "Pro" },
						{ value: "Premium", label: "Premium", key: "Premium" },
					],
				},
				render(a) {
					if (!a) {
						return "Free";
					} else {
						return a;
					}
				},
			},
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
									dpChain("subsStore").setCurrentData(record);
									dpChain("subsStore").setIsAddModalShow(
										true,
									);
								}}
							>
								Edit
							</a>
							
						</>
					);
				},
			},
		];
	}, [pageData]);
};

export default useConfig;
