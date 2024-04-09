import { usePageConfig } from "src/common/hooks";
import { Modal, Space } from "antd";
import { PageType } from "./services/model";
import { useFlat } from "src/reduxService";

// change the name of the prime to primary
const TYPE_ENUM = ["prime", "parent", "sub"];

const useConfig = () => {
	const {
		setAddModalShowAct,
		deleteAct,
		queryAct,
		setIsDetailAct,
		dataList,
		formVersion,
	} = useFlat("categoryStore");

	return usePageConfig<PageType>(() => {
		return [
			{
				title: "name",
				dataIndex: "name",
				key: "name",
				config: {
					formOptions: {
						label: "name",
						name: "name",
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
				render(value) {
					return (
						<a
							onClick={() => {
								setIsDetailAct(true);
								setAddModalShowAct({
									isShowAddModal: true,
								});
							}}
						>
							{value}
						</a>
					);
				},
			},
			{
				title: "description",
				dataIndex: "description",
				key: "description",
				config: {
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
				config: {
					isSearch: true,
					type: "Select",
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
				title: "prime_id",
				dataIndex: "prime_id",
				key: "prime_id",
				config: {
					isSearch: true,
					type: "Select",
					options: () => {
						// 没有parent_id，筛选出来
						return dataList
							.filter((item) => {
								return !item.parent_id;
							})
							.map((item) => {
								return {
									key: item.id,
									value: item.id,
									label: item.name,
								};
							});
					},
					formOptions: {
						rules: [
							{
								type: "number",
							},
						],
						label: "prime_id",
						name: "prime_id",
					},
					inputAttrConfig: {
						allowClear: true,
					},
				},
			},
			{
				title: "parent_id",
				dataIndex: "parent_id",
				key: "parent_id",
				config: {
					isSearch: true,
					type: "Select",
					options: (props: any) => {
						const { formIns } = props! || {};
						let primeIdValue = formIns?.getFieldsValue()?.prime_id;
						return primeIdValue
							? dataList
									.filter((item) => {
										return item.prime_id === primeIdValue;
									})
									.map((item) => {
										return {
											key: item.id,
											value: item.id,
											label: item.name,
										};
									})
							: [];
					},
					formOptions: {
						label: "parent_id",
						name: "parent_id",
					},
					inputAttrConfig: {
						allowClear: true,
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
								setAddModalShowAct({
									isShowAddModal: true,
								});
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
