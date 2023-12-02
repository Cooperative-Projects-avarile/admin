import { usePageConfig } from "@/common/hooks";
import { fieldCreater } from "@/common/utils";
import { Descriptions, Form, FormInstance, Input, Modal, Space } from "antd";
import { useStore } from "./services/pageStore";
import { PageType, Status, TypeEnum } from "./services/pageStore/model";

const RejectReasonModal = ({
	resolver,
}: {
	resolver: { form: FormInstance };
}) => {
	const [form] = Form.useForm<{ reject_reason: string }>();

	resolver.form = form;

	return (
		<Form form={form}>
			<Form.Item
				label="reject_reason"
				name="reject_reason"
				rules={[{ required: true }]}
				initialValue={""}
			>
				<Input />
			</Form.Item>
		</Form>
	);
};

const useConfig = () => {
	const [store] = useStore();
	const {
		setAddModalShowAct,
		deleteAct,
		queryAct,
		approveAct,
		rejectAct,
		setIsDetailAct,
		dataList,
		formVersion,
	} = store;

	return usePageConfig<PageType>(() => {
		return [
			fieldCreater("id"),
			{
				...fieldCreater("title"),
				render: (_, record) => (
					// FIXME: rewrite in modal form style
					<a
						onClick={() => {
							Modal.confirm({
								icon: null,
								width: 800,
								content: (
									<Descriptions
										title="deal detail"
										column={2}
									>
										{Object.entries(record).map(
											([key, value]) => (
												<Descriptions.Item
													key={key}
													label={key}
												>
													{typeof value == "object"
														? JSON.stringify(value)
														: value}
												</Descriptions.Item>
											),
										)}
									</Descriptions>
								),
							});
						}}
					>
						{record.title}
					</a>
				),
			},
			fieldCreater("sub_title"),
			fieldCreater("user_id"),
			fieldCreater("is_submitted", {
				fieldConfig: {
					scope: ["search"],
				},
			}),
			fieldCreater("is_approved", {
				fieldConfig: {
					scope: ["search"],
				},
			}),
			fieldCreater("is_draft", {
				fieldConfig: {
					scope: ["search"],
				},
			}),
			fieldCreater("official_deal_id"),
			{
				title: "type",
				dataIndex: "type",
				key: "type",
				fieldConfig: {
					isSearch: true,
					inputType: "Select",
					options: [
						TypeEnum.CapitalRaising,
						TypeEnum.Equity,
						TypeEnum.Partnerships,
						TypeEnum.SellABusiness,
						TypeEnum.StartupPitch,
					],
					formOptions: {
						label: "type",
						name: "type",
					},
				},
			},
			fieldCreater("category_id", { fieldConfig: { isSearch: false } }),
			{
				title: "prime_category",
				dataIndex: "prime_category_name",
				key: "prime_category_name",
			},
			// 现有数据都不含这3个字段
			// {
			// 	title: "parent_category",
			// 	dataIndex: "parent_category_name",
			// 	key: "parent_category_name",
			// },
			// {
			// 	title: "sub_category",
			// 	dataIndex: "sub_category_name",
			// 	key: "sub_category_name",
			// },
			// fieldCreater("tags", {
			// 	render(v) {
			// 		return v?.map((it) => <Tag>{it}</Tag>);
			// 	},
			// }),
			{
				title: "status",
				dataIndex: "status",
				key: "status",
				fieldConfig: {
					isSearch: true,
					inputType: "Select",
					options: [
						Status.Active,
						Status.Deactivated,
						Status.Fullfilled,
						Status.FullyFunded,
						Status.Pending,
						Status.Rejected,
						Status.Sold,
						Status.SoldOut,
						Status.Suspended,
					],
					formOptions: {
						label: "status",
						name: "status",
					},
				},
			},
			fieldCreater("reject_reason", {
				fieldConfig: {
					scope: ["table"],
				},
			}),
			{
				title: "action",
				key: "action",
				render: (_, record) => (
					<Space size="middle">
						<a
							onClick={async () => {
								await approveAct({
									id: record.id,
									title: record.title,
								});
								await queryAct();
							}}
						>
							approve
						</a>
						<a
							onClick={async () => {
								// await rejectAct({
								// 	id: record.id,
								// 	reject_reason: record.title,
								// });
								// await queryAct();

								let resolver = { form: null } as {
									form: FormInstance;
								};

								Modal.confirm({
									title: "reject reason",
									content: (
										<RejectReasonModal
											resolver={resolver}
										/>
									),
									icon: null,
									async onOk(...args) {
										await resolver.form.validateFields();

										const x = {
											id: record.id,
											reject_reason:
												resolver.form.getFieldValue(
													"reject_reason",
												),
										};

										console.log(x);

										await rejectAct(x);
										await queryAct();
									},
								});
							}}
						>
							reject
						</a>
					</Space>
				),
			},
		];
	}, [dataList, formVersion]);
};

export default useConfig;
