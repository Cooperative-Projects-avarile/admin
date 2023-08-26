import { useFormFields } from "@/common/hooks";
import { Form, Modal } from "antd";
import { useEffect, useRef } from "react";
import { useStore } from "../../services/pageStore";
import { PageType } from "../../services/pageStore/model";
import useConfig from "../../useConfig";

const ModalForm: React.FC = () => {
	const [form] = Form.useForm<PageType>();
	const {
		setAddModalShowAct,
		addAct,
		updateAct,
		queryAct,
		refreshFormVersionAct,
		recordData,
		isShowAddModal,
		isDetail,
	} = useStore()[0];
	const { formList } = useConfig();
	const FormFields = useFormFields(formList, {
		formIns: form,
		isJustShow: isDetail,
	});
	useEffect(() => {
		if (recordData) {
			form.setFieldsValue(recordData);
			refreshFormVersionAct()
		}
	}, [recordData]);
	let extraOptions = isDetail
		? {
				footer: [],
		  }
		: {};
	const prime_id = useRef();
	return (
		<Modal
			open={isShowAddModal}
			title="add"
			{...extraOptions}
			onCancel={() => {
				form.resetFields();
				setAddModalShowAct(false);
			}}
			onOk={() => {
				form.validateFields()
					.then(async (values) => {
						let act = recordData ? updateAct : addAct;
						await act(values);
						setAddModalShowAct(false);
						form.resetFields();
						queryAct();
					})
					.catch((info) => {
						console.log("Validate Failed:", info);
					});
			}}
		>
			<Form<PageType>
				form={form}
				onFieldsChange={(values, old) => {
					// 当prime_id表单修改，并且修改新的值和旧的值不一样的时候，清空parent_id
					if (
						values[0].name === "prime_id" &&
						prime_id.current !== values[0].value
					) {
						prime_id.current = values[0].value;
						form.setFieldValue("parent_id", "");
					}
					refreshFormVersionAct();
				}}
			>
				{FormFields}
			</Form>
		</Modal>
	);
};

export default ModalForm;
