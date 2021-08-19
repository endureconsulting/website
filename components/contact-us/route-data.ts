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
    description:
      "We would love to earn the opportunity to speak with you — and LISTEN TO YOU. If you are interested in getting acquainted to discuss your project(s), you can fill out the form below to schedule a free 'discovery' meeting (via phone or video chat). We will respond to your inquiry within 12 hours. Thank you!",
    schema: contactSchemaWithProjectType,
    reasonTitle: "Nature of Work",
    initialReason: "Online",
    reasons: [
      "Online",
      "Business & Human Resources",
      "Books/Manuscripts",
      "Advanced Education",
      "eLearning Curriculum",
      "Other",
    ],
    hasProjectType: true,
    initialProjectType: "One-Time Need/Short-Term",
    messageTitle: "Message (brief description of your project)",
  },
  "/services/it-engineering": defaultRouteData,
  "/services/learning-education": defaultRouteData,
};
