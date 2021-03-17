import { STATUS_CODES } from "http";
import sgMail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { contactSchema } from "../../schemas";

// FIXME: setup sentry
sgMail.setApiKey(process.env.ENDURE_SENDGRID_API_KEY);

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({
      message: STATUS_CODES[405],
    });
    return;
  }

  try {
    contactSchema.validate(JSON.parse(request.body));
  } catch (error) {
    response.status(400).json({
      message: STATUS_CODES[400],
    });
    return;
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
    } = JSON.parse(request.body);

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
  } catch (error) {
    // Error is an instance of SendGridError
    // The full response is attached to error.response
    if (error.response) {
      console.error(error.response.body);
      response.status(500).json({
        message: STATUS_CODES[500],
      });
      return;
    } else {
      console.error(error);
    }
  }

  response.status(200).json({});
};
