import {
	Form,
	FormInstance,
	Input,
	Modal,
	Space,
	Switch,
	notification,
} from "antd";
import { useEffect, useMemo } from "react";
import { MyColumnType, fieldCreater } from "src/common/utils";
import { useFlat } from "src/service";
import {
	DealEntity,
	Status,
	TypeEnum,
} from "src/service/stores/dealStore/model";
const RejectReasonModal = ({
	resolver,
	info,
	name,
}: {
	resolver: { form: FormInstance };
	info: string;
	name: string;
}) => {
	const [form] = Form.useForm<{ reject_reason: string }>();

	resolver.form = form;

	return (
		<Form form={form}>
			<Form.Item
				label={info}
				name={name}
				rules={[{ required: true }]}
				initialValue={""}
			>
				<Input.TextArea rows={12} />
			</Form.Item>
		</Form>
	);
};

const useConfig = () => {
	const {
		setIsAddModalShow,
		approveAct,
		rejectAct,
		recordData,
		formVersion,
		approvalPageData,
		queryLiveDealListAct,
	} = useFlat("dealStore");
	const { dataList } = approvalPageData;
	const { queryListAct, pageData } = useFlat("categoryStore");
	const { dataList: categoryList } = pageData;
	useEffect(() => {
		queryListAct();
	}, []);

	return useMemo<MyColumnType<DealEntity>[]>(() => {
		return [
			fieldCreater("id", {
				fieldConfig: {
					scope: ["table"],
				},
			}),
			{
				title: "user_id",
				dataIndex: "user_id",
				key: "user_id",
				fieldConfig: {
					isSearch: true,
					scope: ["table"],
					formOptions: {
						label: "user_id",
						name: "user_id",
					},
				},
			},
			{
				title: "live",
				dataIndex: "live",
				key: "live",
				fieldConfig: {
					scope: ["table"],
				},
				render(a) {
					if (a) {
						return "true";
					} else {
						return "false";
					}
				},
			},
			{
				title: "type",
				dataIndex: "type",
				key: "type",
				fieldConfig: {
					isSearch: true,
					type: "Select",
					options: [
						TypeEnum.CapitalRaising,
						TypeEnum.Equity,
						TypeEnum.Partnerships,
						TypeEnum.SellABusiness,
						TypeEnum.StartupPitch,
					],
					formOptions: {
						required: true,
						label: "type",
						name: "type",
					},
				},
			},
			{
				title: "title",
				dataIndex: "title",
				key: "title",
				fieldConfig: {
					formOptions: {
						initialValue: recordData?.title,
						rules: [
							{
								required: true,
							},
						],
						label: "title",
						name: "title",
					},
				},
				render: (_, record) => (
					<a
						onClick={() => {
							setIsAddModalShow({
								isShowAddModal: true,
								recordData: record,
								isDetail: true,
							});
						}}
					>
						{record.title}
					</a>
				),
			},
			{
				title: "industry",
				dataIndex: "industry",
				key: "industry",
				fieldConfig: {
					options: categoryList
						?.filter(
							(item) =>
								item.name !== "Capital Raising" &&
								item.name !== "Partnerships" &&
								item.name !== "Startup Pitch" &&
								item.name !== "Equity" &&
								item.name !== "Sell a Business",
						)
						.map((item) => {
							return {
								label: item.name,
								key: item.id,
								value: item.id,
							};
						}),
					formOptions: {
						label: "industry",
					},
					type: "Select",
					isSearch: false,
				},
			},
			{
				title: "reject_reason",
				dataIndex: "reject_reason",
				key: "reject_reason",
				fieldConfig: {
					type: "TextArea",
					scope: ["table", "modal"],
					formOptions: {
						label: "reject_reason",
					},
				},
			},
			{
				title: "status",
				dataIndex: "status",
				key: "status",
				fieldConfig: {
					scope: ["search"],
					isSearch: true,
					type: "Select",
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
			{
				title: "is_submitted",
				dataIndex: "is_submitted",
				key: "is_submitted",
				fieldConfig: {
					type: "Switch",
					scope: ["search"],
					formOptions: {
						name: "is_submitted",
						valuePropName: "checked",
						label: "is_submitted",
					},
				},
				render: (value) => {
					return <Switch checked={value}></Switch>;
				},
			},
			{
				title: "is_draft",
				dataIndex: "is_draft",
				key: "is_draft",
				fieldConfig: {
					type: "Switch",
					scope: ["search"],
					formOptions: {
						name: "is_draft",
						valuePropName: "checked",
						label: "is_draft",
					},
				},
				render: (value) => {
					return <Switch checked={value}></Switch>;
				},
			},
			{
				title: "is_approved",
				dataIndex: "is_approved",
				key: "is_approved",
				fieldConfig: {
					type: "Switch",
					scope: ["search"],
					formOptions: {
						name: "is_approved",
						valuePropName: "checked",
						label: "is_approved",
					},
				},
				render: (value) => {
					return <Switch checked={value}></Switch>;
				},
			},
			{
				title: "action",
				key: "action",
				render: (_, record) => {
					return (
						<Space size="middle">
							{record.is_draft &&
								record.is_submitted &&
								!record.is_approved && (
									<a
										onClick={async () => {
											//@ts-ignore
											let resolver = { form: null } as {
												form: FormInstance;
											};
											Modal.confirm({
												title: "approve reason",
												content: (
													<RejectReasonModal
														info="approve"
														name="approve_reason"
														resolver={resolver}
													/>
												),
												icon: null,
												async onOk() {
													await approveAct({
														id: record.id,
														title: record.title,
														content:
															resolver.form.getFieldValue(
																"approve_reason",
															),
													});
													await queryLiveDealListAct();
													notification.info({
														message: "success!",
													});
												},
											});
										}}
									>
										approve
									</a>
								)}
							{record.is_draft &&
								record.is_submitted &&
								!record.is_approved && (
									<a
										onClick={async () => {
											//@ts-ignore
											let resolver = { form: null } as {
												form: FormInstance;
											};

											Modal.confirm({
												title: "reject reason",
												content: (
													<RejectReasonModal
														info={"reject"}
														name={"reject_reason"}
														resolver={resolver}
													/>
												),
												icon: null,
												async onOk() {
													await resolver.form.validateFields();

													const x = {
														id: record.id,
														reject_reason:
															resolver.form.getFieldValue(
																"reject_reason",
															),
													};

													await rejectAct(x);
													await queryLiveDealListAct();
												},
											});
										}}
									>
										reject
									</a>
								)}
						</Space>
					);
				},
			},
		];
	}, [dataList, formVersion, recordData]);
};

export default useConfig;
