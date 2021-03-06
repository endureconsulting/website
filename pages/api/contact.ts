import { STATUS_CODES } from "http";
import sgMail from "@sendgrid/mail";
import { ResponseError } from "@sendgrid/helpers/classes";
import type { NextApiRequest, NextApiResponse } from "next";

import { contactSchema, contactSchemaWithProjectType } from "@/lib/schemas";

// FIXME: setup sentry
sgMail.setApiKey(process.env.ENDURE_SENDGRID_API_KEY);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({
      message: STATUS_CODES[405],
    });
    return;
  }

  const requestBody: string = request.body;

  try {
    const json = JSON.parse(requestBody);
    // eslint-disable-next-line unicorn/prefer-ternary
    if (json.projectType) {
      await contactSchemaWithProjectType.validate(json);
    } else {
      await contactSchema.validate(json);
    }
  } catch {
    response.status(400).json({
      message: STATUS_CODES[400],
    });
    return;
  }

  interface RequestBody {
    reason: string;
    projectType?: string;
    firstName: string;
    lastName: string;
    company: string;
    title?: string;
    email: string;
    phone?: string;
    message: string;
  }

  try {
    const {
      reason,
      projectType,
      firstName,
      lastName,
      company,
      title,
      email,
      phone,
      message,
    }: RequestBody = JSON.parse(requestBody);

    const name = `${firstName.trim()} ${lastName.trim()}`;

    await sgMail.send({
      to:
        email === "bmealhouse@gmail.com"
          ? email
          : "thomas@endureconsulting.net",
      from: `${name} <${email.trim()}>`,
      subject: projectType
        ? `${projectType.trim()} ${reason.trim()} Project`
        : reason.trim(),
      text: `${message.trim()}

${name}
${company.trim()}${title.trim() ? ` | ${title.trim()}` : ""}
${email.trim()}
${phone.trim()}`,
    });
  } catch (error: unknown) {
    const typedError = error as ResponseError;
    // Error is an instance of SendGridError
    // The full response is attached to error.response
    if (typedError.response) {
      console.error(typedError.response.body);
      response.status(500).json({
        message: STATUS_CODES[500],
      });
      return;
    }

    console.error(typedError);
  }

  response.status(200).json({});
}
