import useHashParams from "@/common/utils/useHashParams";
import { FormConfig, useBoolean } from "@/mui/common/hooks";
import { Checkbox, Stack } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { useFlat } from "src/service";
import { MultiInfoLabel } from "../../../components/label";

// 从上到下 “Partnership" => "Capital Raising" => "Startup Pitch" => "Equity" => "Business for Sale"
export const useFormConfig = ({
	defaultValues,
}: {
	defaultValues?: any;
}): FormConfig => {
	const { currentDeal } = useFlat("dealStore");
	const isNullRef = useRef(false);
	const getHash = useHashParams();
	const id = getHash().id;
	useEffect(() => {
		if (id && !currentDeal?.address) {
			isNullRef.current = true;
		}
	}, [currentDeal]);
	return useMemo<FormConfig>(() => {
		return {
			address: {
				label: "Start typing your address",
				defaultValue: defaultValues?.["address"],
				type: "autoCompleteGoogle",
				fieldConfig: {
					placeholder: "Enter your address",
					required: true,
					multiline: true,
					minRows: 4,
					// TODO: replace with .env variable
					apiKey: "AIzaSyC2UQBWd-kkALximl2gxxBxuVTJ9rE2b7w",
				},
				watch: (props) => {
					const { values, currentConfig, api, info } = props;
					if (
						info.name == "address" &&
						(values["address"] as string)
					) {
						const strArr = (values["address"] as string)?.split(
							",",
						);
						if (strArr.length >= 3) {
							api.setValue("address", strArr.slice(1).join(","));
						}
					}
					if (isNullRef.current) {
						currentConfig.fieldConfig!.required = false;
						currentConfig.fieldConfig!.disabled = true;
						api.clearErrors();
					} else {
						currentConfig.fieldConfig!.required = true;
						currentConfig.fieldConfig!.disabled = false;
					}
				},
				wrapper: ({ children, formMethods }) => {
					const ref = useRef();
					let values = formMethods?.getValues();
					const isNull = useBoolean(
						id && !values!?.address ? true : false,
					);
					useEffect(() => {
						if (isNull.value) {
							ref.current = formMethods?.getValues().address;
							formMethods?.setValue("address", null);
						} else {
							!formMethods?.getValues().address &&
								formMethods?.setValue(
									"address",
									ref.current || "",
								);
						}
					}, [isNull.value]);
					return (
						<>
							<MultiInfoLabel
								sx={{
									position: "relative",
									bottom: "-10px",
								}}
							>
								Headquarters address
							</MultiInfoLabel>
							{children}
							{/* <FieldMapLazy address={values!.address}></FieldMapLazy> */}
							<Stack
								direction="row"
								sx={{
									alignItems: "center",
								}}
							>
								<Checkbox
									checked={isNull.value}
									onChange={() => {
										isNull.onToggle();
										isNullRef.current = !isNullRef.current;
									}}
								/>
								<MultiInfoLabel>
									Online business only. Check this box if you
									do not have a physical address
								</MultiInfoLabel>
							</Stack>
						</>
					);
				},
			},
		};
	}, [defaultValues, currentDeal]);
};
