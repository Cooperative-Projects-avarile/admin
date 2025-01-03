import type { RatingProps } from "@mui/material/Rating";
import type { Theme, SxProps } from "@mui/material/styles";
import type { FormHelperTextProps } from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FormHelperText from "@mui/material/FormHelperText";

// ----------------------------------------------------------------------

export type FieldRatingProps = RatingProps & {
	name: string;
	helperText?: React.ReactNode;
	slotProps?: {
		wrap?: SxProps<Theme>;
		formHelperText?: FormHelperTextProps;
	};
};

function FieldRating({
	name,
	helperText,
	slotProps,
	...other
}: FieldRatingProps) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<Box sx={slotProps?.wrap}>
					<Rating
						{...field}
						onChange={(_, newValue) => {
							field.onChange(Number(newValue));
						}}
						{...other}
					/>

					{(error?.message || helperText) && (
						<FormHelperText
							error={!!error}
							{...slotProps?.formHelperText}
						>
							{error?.message ?? helperText}
						</FormHelperText>
					)}
				</Box>
			)}
		/>
	);
}

export default FieldRating;
