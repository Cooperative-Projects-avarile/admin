import { FieldCheckbox } from "@/mui/components/form/field-checkbox";
import FieldSwitch from "@/mui/components/form/field-switch";
import FieldDatePicker from "@/mui/components/form/field-datePicker";
import FieldText from "@/mui/components/form/field-text-field";
import FieldMul from "@/mui/components/form/field-mul";
import {
	FieldUpload,
	FieldUploadAvatar,
	FieldUploadBox,
} from "@/mui/components/form/field-upload";
import FieldRadioGroup from "@/mui/components/form/field-radio-group";
import {
	FieldMultiSelect,
	FieldSelect,
} from "@/mui/components/form/field-select";
import FieldEditor from "@/mui/components/form/field-editor";
import FieldAutocompleteGoogle from "@/mui/components/form/field-autocompleteGoogle";
import FieldRating from "@/mui/components/form/field-rating";

const FormMapObj = {
	switch: FieldSwitch,
	radio: FieldRadioGroup,
	select: FieldSelect,
	editer: FieldEditor,
	autoCompleteGoogle: FieldAutocompleteGoogle,
	checkbox: FieldCheckbox,
	datePicker: FieldDatePicker,
	string: FieldText,
	multiple: FieldMul,
	upload: FieldUpload,
	uploadBox: FieldUploadBox,
	uploadAvatar: FieldUploadAvatar,
	multiSelect: FieldMultiSelect,
	rating: FieldRating,
};

export type InputType = keyof typeof FormMapObj;

export const getField = <T extends InputType>(type: T) => {
	return FormMapObj[type];
};
