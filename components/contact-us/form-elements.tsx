import { ReactNode, ChangeEvent } from "react";
import { useFormikContext, FieldProps } from "formik";

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
  children: ReactNode;
  htmlFor: string;
}

Input.Label = ({ children, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);

interface HintProps {
  children: ReactNode;
  id: string;
}

Input.Hint = ({ children, id }: HintProps) => (
  <span id={id} className="ml-1 text-xs text-gray-500">
    {children}
  </span>
);

interface ErrorMessage {
  children: ReactNode;
}

Input.ErrorMessage = ({ children }: ErrorMessage) => (
  <span className="ml-1 text-xs text-red-500">{children}</span>
);

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

interface SelectProps extends FieldProps {
  children: ReactNode;
}

export const Select = ({
  field,
  form: { touched, errors },
  children,
  ...remainingProps
}: SelectProps) => (
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
  children: ReactNode;
  value: string;
}

Select.Option = ({ children, value, ...remainingProps }: SelectOptionProps) => (
  <option {...remainingProps} value={value}>
    {children}
  </option>
);

interface SubmitButtonProps {
  children: ReactNode;
  hasSentEmail: boolean;
}

export const SubmitButton = ({ children, hasSentEmail }: SubmitButtonProps) => {
  const { isSubmitting } = useFormikContext();

  let icon = null;
  if (isSubmitting) {
    icon = (
      <img
        src="./spinner.svg"
        className="mr-2 animate-spin"
        width={24}
        height={24}
        alt="sending email"
      />
    );
  } else if (hasSentEmail) {
    icon = (
      <img
        src="./check.svg"
        className="mr-2"
        width={24}
        height={24}
        alt="email sent"
      />
    );
  }

  return (
    <button
      type="submit"
      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-dark hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand disabled:opacity-50 disabled:bg-brand-dark"
      disabled={isSubmitting || hasSentEmail}
    >
      {icon}
      {children}
    </button>
  );
};
