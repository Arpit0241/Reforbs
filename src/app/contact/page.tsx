import { buildPageMetadata } from "@/lib/seoMetadata";
import ContactPage from "./ContactClient";

export const metadata = buildPageMetadata({
  title: "Book a Free Visit | Reforbs Pune",
  description:
    "Schedule a no-pressure walkthrough at Reforbs Living properties in Viman Nagar, Sanjay Park, and Lavale, Pune. WhatsApp, call or form.",
  path: "/contact",
});

export default function ContactRoutePage() {
  return <ContactPage />;
}
