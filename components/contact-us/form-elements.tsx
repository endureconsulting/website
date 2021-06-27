import { ChangeEvent, PropsWithChildren } from "react";
import { useFormikContext, FieldProps } from "formik";

import { CheckSvg } from "@/components/svg/check-svg";
import { SpinnerSvg } from "@/components/svg/spinner-svg";

interface InputProps extends FieldProps {
  type?: "text" | "email" | "tel";
  onChange?: (value: string, fieldProps: FieldProps) => void;
}

export const Input = ({
  field,
  form,
  meta,
  type = "text",
  onChange,
  ...remainingProps
}: InputProps) => (
  <input
    {...field}
    {...remainingProps}
    id={field.name}
    type={type}
    className={`shadow-sm focus:ring-brand focus:border-brand block w-full sm:text-sm rounded-md ${
      form.touched[field.name] && form.errors[field.name]
        ? "border-red-500"
        : "border-gray-300"
    }`}
    onChange={(event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value, { field, form, meta });
      } else {
        field.onChange(event);
      }
    }}
  />
);

interface LabelProps {
  htmlFor: string;
}

Input.Label = ({ children, htmlFor }: PropsWithChildren<LabelProps>) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);

// @ts-ignore
Input.Label.displayName = "Input.Label";

interface HintProps {
  id: string;
}

Input.Hint = ({ children, id }: PropsWithChildren<HintProps>) => (
  <span id={id} className="ml-1 text-xs text-gray-500">
    {children}
  </span>
);

// @ts-ignore
Input.Hint.displayName = "Input.Hint";

Input.ErrorMessage = ({ children }: PropsWithChildren<{}>) => (
  <span className="ml-1 text-xs text-red-500">{children}</span>
);

// @ts-ignore
Input.ErrorMessage.displayName = "Input.ErrorMessage";

interface TextAreaProps extends FieldProps {
  rows?: number;
}

export const TextArea = ({
  field,
  form: { touched, errors },
  rows = 4,
  ...remainingProps
}: TextAreaProps) => (
  <textarea
    {...field}
    {...remainingProps}
    id={field.name}
    rows={rows}
    className={`py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand rounded-md resize-none ${
      touched[field.name] && errors[field.name]
        ? "border-red-500"
        : "border-gray-300"
    }`}
  />
);

interface SelectProps extends FieldProps {}

export const Select = ({
  field,
  form: { touched, errors },
  children,
  ...remainingProps
}: PropsWithChildren<SelectProps>) => (
  <select
    {...field}
    {...remainingProps}
    id={field.name}
    className={`mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-brand focus:border-brand sm:text-sm rounded-md ${
      touched[field.name] && errors[field.name]
        ? "border-red-500"
        : "border-gray-300"
    }`}
  >
    {children}
  </select>
);

interface SelectOptionProps {
  [prop: string]: any;
  value: string;
}

Select.Option = ({
  children,
  value,
  ...remainingProps
}: PropsWithChildren<SelectOptionProps>) => (
  <option {...remainingProps} value={value}>
    {children}
  </option>
);

// @ts-ignore
Select.Option.displayName = "Select.Option";

interface SubmitButtonProps {
  hasSentEmail: boolean;
}

export const SubmitButton = ({
  children,
  hasSentEmail,
}: PropsWithChildren<SubmitButtonProps>) => {
  const { isSubmitting } = useFormikContext();

  let icon: JSX.Element;
  if (isSubmitting) {
    icon = <SpinnerSvg className="mr-2 w-6 h-6 animate-spin" />;
  } else if (hasSentEmail) {
    icon = <CheckSvg className="mr-2 w-6 h-6" />;
  }

  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-dark hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-dark disabled:opacity-50 disabled:bg-brand-dark"
      disabled={isSubmitting || hasSentEmail}
    >
      {icon}
      {children}
    </button>
  );
};
