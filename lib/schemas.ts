import * as yup from "yup";

export const contactSchema = yup.object().shape({
  reason: yup.string().trim().required("(required)"),
  firstName: yup.string().trim().required("(required)"),
  lastName: yup.string().trim().required("(required)"),
  company: yup.string().trim().required("(required)"),
  email: yup
    .string()
    .trim()
    .email("(invalid email address)")
    .required("(required)"),
  message: yup.string().trim().required("(required)"),
});

export const contactSchemaWithProjectType = yup.object().shape({
  reason: yup.string().trim().required("(required)"),
  projectType: yup.string().trim().required("(required)"),
  firstName: yup.string().trim().required("(required)"),
  lastName: yup.string().trim().required("(required)"),
  company: yup.string().trim().required("(required)"),
  email: yup
    .string()
    .trim()
    .email("(invalid email address)")
    .required("(required)"),
  message: yup.string().trim().required("(required)"),
});
