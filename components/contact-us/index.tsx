import { useState } from "react";
import { Formik, Field, ErrorMessage, Form, FormikHelpers } from "formik";
import { useRouter } from "next/router";

import { Input, Select, TextArea, SubmitButton } from "./form-elements";
import { routeData } from "./route-data";

interface Values {
  reason: string;
  projectType?: string;
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactUs = () => {
  const router = useRouter();
  const [hasSentEmail, setHasSentEmail] = useState(false);

  const {
    title,
    schema,
    reasonTitle,
    initialReason,
    reasons,
    hasProjectType,
    initialProjectType,
    messageTitle,
  } = routeData[router.route];

  return (
    <>
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        <div className="flex-1" />
        <div className="flex-1 w-full bg-brand-dark" />
      </div>
      <div className="max-w-3xl mx-auto px-4 pt-16 sm:px-6 sm:pt-24">
        <div className="relative bg-white rounded-md shadow-2xl overflow-hidden pt-12 pb-8 px-4 sm:pb-12 sm:px-6">
          <div className="relative max-w-xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
            </div>
            <div className="mt-8">
              <Formik
                initialValues={{
                  reason: initialReason,
                  projectType: initialProjectType,
                  firstName: "",
                  lastName: "",
                  company: "",
                  title: "",
                  email: "",
                  phone: "",
                  message: "",
                }}
                validationSchema={schema}
                onSubmit={async (
                  values: Values,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  try {
                    await fetch("/api/contact", {
                      method: "POST",
                      body: JSON.stringify(values),
                    });
                    setHasSentEmail(true);
                  } catch {}

                  setSubmitting(false);
                }}
              >
                <Form className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-y-6 sm:gap-x-8">
                  <div className={hasProjectType ? "" : "sm:col-span-2"}>
                    <div className="flex items-baseline">
                      <Input.Label htmlFor="reason">{reasonTitle}</Input.Label>
                      <ErrorMessage
                        name="reason"
                        component={Input.ErrorMessage}
                      />
                    </div>
                    <div className="mt-1">
                      <Field name="reason" component={Select}>
                        {reasons.map((reason) => (
                          <Select.Option key={reason} value={reason}>
                            {reason}
                          </Select.Option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  {hasProjectType && (
                    <div>
                      <div className="flex items-baseline">
                        <Input.Label htmlFor="projectType">
                          Project Type
                        </Input.Label>
                        <ErrorMessage
                          name="projectType"
                          component={Input.ErrorMessage}
                        />
                      </div>
                      <div className="mt-1">
                        <Field name="projectType" component={Select}>
                          <Select.Option value="Ongoing/Long-Term">
                            Ongoing/Long-Term
                          </Select.Option>
                          <Select.Option value="One-Time Need/Short-Term">
                            One-Time Need/Short-Term
                          </Select.Option>
                        </Field>
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="flex items-baseline">
                      <Input.Label htmlFor="firstName">First Name</Input.Label>
                      <ErrorMessage
                        name="firstName"
                        component={Input.ErrorMessage}
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        name="firstName"
                        component={Input}
                        autoComplete="given-name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <Input.Label htmlFor="lastName">Last Name</Input.Label>
                      <ErrorMessage
                        name="lastName"
                        component={Input.ErrorMessage}
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        name="lastName"
                        component={Input}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <Input.Label htmlFor="company">Organization</Input.Label>
                      <ErrorMessage
                        name="company"
                        component={Input.ErrorMessage}
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        name="company"
                        component={Input}
                        autoComplete="organization"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <Input.Label htmlFor="title">Title</Input.Label>
                      <Input.Hint id="title-hint">(optional)</Input.Hint>
                    </div>
                    <div className="mt-1">
                      <Field
                        name="title"
                        component={Input}
                        autoComplete="organization-title"
                        aria-describedby="title-hint"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <Input.Label htmlFor="email">Email</Input.Label>
                      <ErrorMessage
                        name="email"
                        component={Input.ErrorMessage}
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        name="email"
                        component={Input}
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline">
                      <Input.Label htmlFor="phone">Phone</Input.Label>
                      <Input.Hint id="phone-hint">(optional)</Input.Hint>
                    </div>
                    <div className="mt-1">
                      <Field
                        type="tel"
                        name="phone"
                        component={Input}
                        onChange={(value: string, { form }) => {
                          value = value.replace(/[\s()\-]/g, "");

                          if (
                            value === "" ||
                            (value.length <= 10 && /\d+/.test(value))
                          ) {
                            form.setFieldValue("phone", formatPhone(value));
                          }
                        }}
                        autoComplete="tel"
                        aria-describedby="phone-hint"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-baseline">
                      <Input.Label htmlFor="message">
                        {messageTitle}
                      </Input.Label>
                      <ErrorMessage
                        name="message"
                        component={Input.ErrorMessage}
                      />
                    </div>
                    <div className="mt-1">
                      <Field name="message" component={TextArea} />
                    </div>
                  </div>
                  <div className="sm:col-span-2 flex justify-center">
                    <SubmitButton hasSentEmail={hasSentEmail}>
                      {hasSentEmail ? "Sent" : "Send Message"}
                    </SubmitButton>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function formatPhone(value: string) {
  if (value.length === 0) return "";
  if (value.length < 4) return `(${value}`;
  if (value.length < 7) return `(${value.slice(0, 3)}) ${value.slice(3, 6)}`;
  return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
}
