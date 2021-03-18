import { STATUS_CODES } from "http";
import sgMail from "@sendgrid/mail";
import { ResponseError } from "@sendgrid/helpers/classes";
import type { NextApiRequest, NextApiResponse } from "next";

import { contactSchema } from "@/lib/schemas";

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

  try {
    await contactSchema.validate(JSON.parse(request.body));
  } catch {
    response.status(400).json({
      message: STATUS_CODES[400],
    });
    return;
  }

  interface RequestBody {
    reason: string;
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
      firstName,
      lastName,
      company,
      title,
      email,
      phone,
      message,
    }: RequestBody = JSON.parse(request.body);

    const name = `${firstName.trim()} ${lastName.trim()}`;

    await sgMail.send({
      to:
        email === "bmealhouse@gmail.com"
          ? email
          : "thomas@endureconsulting.net",
      from: `${name} <${email.trim()}>`,
      subject: reason.trim(),
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
