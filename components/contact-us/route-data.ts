import { contactSchema, contactSchemaWithProjectType } from "@/lib/schemas";

const defaultRouteData = {
  title: "How Can We Help?",
  schema: contactSchema,
  reasonTitle: "Topic",
  initialReason: "General Inquiry",
  reasons: [
    "General Inquiry",
    "IT Engineering",
    "Copy Editing/Proofreading",
    "Learning/Education",
    "Schedule Call or Meeting",
    "Invoicing/Payment Inquiry",
  ],
  hasProjectType: false,
  initialProjectType: "",
  messageTitle: "Message",
};

export const routeData = {
  "/": defaultRouteData,
  "/about": defaultRouteData,
  "/services/copy-editing-proofreading": {
    title: "Tell Us About Your Project…",
    schema: contactSchemaWithProjectType,
    reasonTitle: "Nature of Work",
    initialReason: "Advanced Education",
    reasons: [
      "Advanced Education",
      "eLearning",
      "Cover Letter & Resume Writing",
      "Social Media & Blog Posts",
      "Internet-Published Articles",
      "eNewsletters & Press Releases",
      "Technology",
      "Business",
      "Books/Manuscripts",
      "Other",
    ],
    hasProjectType: true,
    initialProjectType: "One-Time Need/Short-Term",
    messageTitle: "Message (brief description of your project)",
  },
  "/services/it-engineering": defaultRouteData,
  "/services/learning-education": defaultRouteData,
};
