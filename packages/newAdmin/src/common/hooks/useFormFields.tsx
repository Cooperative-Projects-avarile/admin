import { Divider, FormInstance } from "antd";
import { cloneDeep } from "lodash-es";
import { Fragment } from "react";
import { MyColumnType } from "src/common/model/fieldsHooks";
import { getField } from "src/common/utils";

const useFormFields = <T,>(
	formList: MyColumnType<T>[],
	{ isJustShow, formIns }: { isJustShow: boolean; formIns: FormInstance<T> },
) => {
	let recordKeyObj: Record<PropertyKey, any> = {};

	return formList
		.filter((item) => item.fieldConfig || item.fieldConfig!?.formOptions)
		.map((item) => {
			const { fieldConfig = {}, dataIndex } = item;
			const { formRender, formOptions } = fieldConfig! || {};
			const { name } = formOptions! || { name: dataIndex };
			let temp: any = [];
			if (Array.isArray(name)) {
				let nameArr = name.slice(0, -1);
				nameArr.forEach((nameItem, index) => {
					if (!recordKeyObj[nameItem]) {
						recordKeyObj[nameItem] = true;
						temp.push(
							<Divider
								key={`${index} ${nameItem}`}
								orientation="left"
							>
								{index === 0 ? (
									<h3>{nameItem}</h3>
								) : (
									<h5>{nameItem}</h5>
								)}
							</Divider>,
						);
					}
				});
			}
			let InputItem;
			if (formRender) {
				InputItem = formRender();
			} else if (fieldConfig) {
				fieldConfig.inputAttrConfig = cloneDeep(
					fieldConfig.inputAttrConfig || {},
				);
				if (!("disabled" in fieldConfig.inputAttrConfig)) {
					if (isJustShow) {
						fieldConfig.inputAttrConfig.disabled = true;
					} else {
						fieldConfig.inputAttrConfig.disabled = false;
					}
				}
				InputItem = getField<T>(fieldConfig, formIns);
			}
			return (
				<Fragment key={item.key || String(item.dataIndex)}>
					<>{temp}</>
					{InputItem}
				</Fragment>
			);
		});
};

export default useFormFields;
