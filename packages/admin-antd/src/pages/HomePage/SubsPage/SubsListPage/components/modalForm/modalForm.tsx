import { Form, Modal } from "antd";
import { cloneDeep, merge } from "lodash-es";
import React, { useEffect } from "react";
import { useFields } from "src/common/hooks/useFields";
import { useFlat } from "src/service";
import { DealEntity } from "src/service/stores/dealStore/model";
import useConfig from "../../useConfig";
import { Category } from "@/service/stores/categoryStore/slice";
const ModalForm: React.FC = () => {
	const [form] = Form.useForm<any>();
	const {
		setIsAddModalShow,
		currentData,
		isShowAddModal,
		isDetail,
		queryListAct,
		updateAct,
	} = useFlat("subsStore");
	const config = useConfig(form);
	const FormFields = useFields<Category>({
		config,
		form,
		isDetail,
	});

	useEffect(() => {
		if (currentData) {
			let recordDataTemp = cloneDeep(currentData);
			form.setFieldsValue(recordDataTemp);
		}
	}, [currentData]);
	let extraOptions = isDetail
		? {
				footer: [],
			}
		: {};
	return (
		<Modal
			width={"60vw"}
			open={isShowAddModal}
			title={currentData ? "Update" : "Add"}
			{...extraOptions}
			onCancel={() => {
				form.resetFields();
				setIsAddModalShow(false);
			}}
			onOk={async () => {
				await form.validateFields();
				const values = form.getFieldsValue();
				let result = merge(cloneDeep(currentData), values);
				await updateAct({
					user_email: result.email,
					user_id: result.id,
					start_at: result.time?.[0],
					end_at: result.time?.[1],
					type: result.subscription,
					amount: 0,
					interval: 0,
				});
				setIsAddModalShow(false);
				form.resetFields();
				queryListAct();
			}}
		>
			<Form<DealEntity> form={form} onFieldsChange={() => {}}>
				{FormFields}
			</Form>
		</Modal>
	);
};

export default ModalForm;
