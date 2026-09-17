import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contact",
  description:
    "Reach the Nimba TV newsroom in Saclepea, Nimba County — by phone, email, WhatsApp or message.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
