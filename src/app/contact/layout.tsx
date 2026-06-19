import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = generateSEO({
  title: "Contact",
  description: "Get in touch with Nimba TV. Send us a message or find our office location in Monrovia, Liberia.",
  url: `${siteConfig.url}/contact`,
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
