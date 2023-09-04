import { usePageConfig } from "@/common/hooks";
import { Modal, Space } from "antd";
import { useStore } from "./services/pageStore";
import { PageType } from "./services/pageStore/model";
import { FieldCreater } from "@/common/utils";

const TYPE_ENUM = ["prime", "parent", "sub"];

const useConfig = () => {
	const [store] = useStore();
	const {
		setAddModalShowAct,
		deleteAct,
		queryAct,
		setIsDetailAct,
		dataList,
		formVersion,
	} = store;

	return usePageConfig<PageType>(() => {
		return [
			FieldCreater("nick_name"),
			FieldCreater("email", {
				render(value, record) {
					return (
						<a
							onClick={() => {
								setIsDetailAct(true);
								setAddModalShowAct(true, record);
							}}
						>
							{value}
						</a>
					);
				}
			}),
			FieldCreater("first_name"),
			FieldCreater("last_name"),
			// FieldCreater("password", {}),
			FieldCreater("postcode"),
			FieldCreater("mobile"),
			FieldCreater("role"),
			FieldCreater("stripe_customer_id", {
				fieldConfig: {
					scope: ["modal"],
				},
			}),
			FieldCreater("stripe_session_id", {
				fieldConfig: {
					scope: ["modal"],
				},
			}),
			FieldCreater("stripe_subscription_id", {
				fieldConfig: {
					scope: ["modal"],
				},
			}),
			FieldCreater("hubspotId", {
				fieldConfig: {
					scope: ["modal"],
				},
			}),
			FieldCreater("company_id", {
				fieldConfig: {
					scope: ["modal"],
				},
			}),
			FieldCreater("id"),
			{
				title: "description",
				dataIndex: "description",
				key: "description",
				fieldConfig: {
					isSearch: true,
					formOptions: {
						label: "description",
						name: "description",
						rules: [
							{
								required: true,
							},
							{
								type: "string",
								min: 4,
								max: 60,
							},
						],
					},
				},
			},
			{
				title: "type",
				dataIndex: "type",
				key: "type",
				fieldConfig: {
					isSearch: true,
					inputType: "Select",
					options: TYPE_ENUM,
					formOptions: {
						initialValue: TYPE_ENUM[0],
						label: "type",
						name: "type",
						rules: [
							{
								required: true,
							},
						],
					},
				},
			},
			{
				title: "action",
				key: "action",
				render: (_, record) => (
					<Space size="middle">
						<a
							onClick={() => {
								setAddModalShowAct(true, record);
							}}
						>
							edit
						</a>
						<a
							onClick={() => {
								Modal.confirm({
									content: "are you sure?",
									onOk: async () => {
										await deleteAct({
											id: record.id,
										});
										queryAct();
									},
								});
							}}
						>
							delete
						</a>
					</Space>
				),
			},
		];
	}, [dataList, formVersion]);
};

export default useConfig;
