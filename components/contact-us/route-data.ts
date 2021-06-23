import { contactSchema, contactSchemaWithProjectType } from "@/lib/schemas";

export const routeData = {
  "/": {
    schema: contactSchema,
    title: "How Can We Help?",
    reasonTitle: "Topic",
    initialReason: "General Inquiry",
    reasons: [
      "General Inquiry",
      "IT Engineering",
      "Copy Editing/Proofreading",
      "Schedule Call or Meeting",
      "Invoicing/Payment Inquiry",
    ],
    hasProjectType: false,
    initialProjectType: "",
    messageTitle: "Message",
  },
  "/copy-editing-proofreading": {
    schema: contactSchemaWithProjectType,
    title: "Tell Us About Your Project…",
    reasonTitle: "Nature of Work",
    initialReason: "Advanced Education",
    reasons: [
      "Advanced Education",
      "eLearning",
      "Cover Letter/Resume Writing",
      "Social Media & Blog Posts",
      "Internet-Published Articles",
      "eNewsletters & Press Releases",
      "Technology",
      "Business",
      "Books",
      "Other",
    ],
    hasProjectType: true,
    initialProjectType: "One-time need/Short-Term",
    messageTitle: "Message (brief description of your project)",
  },
};
