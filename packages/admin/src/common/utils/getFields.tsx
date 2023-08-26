import { FormInstance, Input, Select, Switch } from "antd";
import { FieldConfig } from "../model/fieldsHooks";

export const getFields = <T,>(
	fieldConfig: FieldConfig<T>,
	formIns?: FormInstance<T>,
) => {
	const { inputType, options, inputOptions = {} } = fieldConfig;
	let FieldItem;
	if (inputType === "Select") {
		let optionsArr = [];
		if (typeof options == "function") {
			optionsArr = options({ formIns });
		} else {
			optionsArr = options;
		}
		FieldItem = (
			<Select allowClear {...inputOptions}>
				{optionsArr.map((item) => {
					let optionData: typeof item;
					if (typeof item == "object") {
						optionData = item;
					} else {
						optionData = {
							key: item,
							value: item,
							label: item,
						};
					}
					return (
						<Select.Option
							key={optionData.key}
							value={optionData.value}
						>
							{optionData.label}
						</Select.Option>
					);
				})}
			</Select>
		);
	} else {
		let InputItem;
		if (inputType === "Switch") {
			InputItem = Switch;
		} else {
			InputItem = Input;
		}
		FieldItem = <InputItem {...inputOptions} />;
	}
	return FieldItem;
};