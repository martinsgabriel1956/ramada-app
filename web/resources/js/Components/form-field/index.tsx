import { Label } from "../ui/label";

type FormFieldProps = {
	field: {
		type: string;
		label: string;
	};
	children: JSX.Element;
	error?: string;
};

export function FormField({ children, field, error }: FormFieldProps) {
	return (
		<div className="w-full">
			<Label
				className="mb-4 text-xl text-sky-50 font-bold"
				htmlFor={field.type}
			>
				{field.label}:
			</Label>
			{children}

			{error && (
				<small className="text-red-600 text-base inline-block mt-2">
					{error}
				</small>
			)}
		</div>
	);
}
