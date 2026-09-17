"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import SocialIcons from "@/components/ui/SocialIcons";

const DETAILS = [
  { Icon: MapPin, label: "Studio", value: siteConfig.contact.address, href: undefined },
  { Icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
  { Icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { Icon: WhatsAppIcon, label: "WhatsApp", value: "Send the newsroom a tip", href: siteConfig.social.whatsapp },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const field =
    "w-full border border-line bg-paper px-3.5 py-3 font-ui text-sm text-navy placeholder:text-muted focus:border-azure focus:outline-none";

  return (
    <>
      <div className="border-b border-line bg-surface">
        <div className="wrap py-8 lg:py-12">
          <span aria-hidden className="mb-3 block h-1 w-10 bg-flag-red" />
          <h1 className="text-3xl text-navy sm:text-4xl">Contact Nimba TV</h1>
          <p className="mt-2 max-w-2xl font-read text-base text-muted">
            Have a story from your community? Reach the newsroom in {siteConfig.city} — by phone,
            WhatsApp, email, or the form below.
          </p>
        </div>
      </div>

      <div className="wrap py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
          <section aria-labelledby="form-heading">
            <h2 id="form-heading" className="text-2xl text-navy">
              Send a message
            </h2>

            {submitted ? (
              <div className="mt-5 flex gap-3 border-l-2 border-azure bg-azure-wash p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" />
                <div>
                  <p className="font-ui text-sm font-semibold text-navy">Message ready to send</p>
                  <p className="mt-1 font-read text-sm leading-relaxed text-muted">
                    This form is a design demonstration and does not deliver mail yet. Connect it to
                    a form service before launch — until then, please use the phone, WhatsApp or
                    email details listed here.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className="mt-5 flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="eyebrow mb-1.5 block text-muted">
                      Full name
                    </label>
                    <input id="fullName" name="fullName" type="text" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow mb-1.5 block text-muted">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={field} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="eyebrow mb-1.5 block text-muted">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" required className={field} />
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow mb-1.5 block text-muted">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={6} required className={field} />
                </div>

                <Button type="submit" variant="primary" className="self-start">
                  <Send className="h-4 w-4" />
                  Send message
                </Button>
              </form>
            )}
          </section>

          <aside className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl text-navy">Reach us directly</h2>
              <ul className="mt-5 flex flex-col divide-y divide-line border-y border-line">
                {DETAILS.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex gap-3.5 py-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" />
                    <div className="min-w-0">
                      <p className="eyebrow text-muted">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                          className="mt-0.5 block font-ui text-sm font-semibold text-navy hover:text-flag-red"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-ui text-sm font-semibold text-navy">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-5">
              <h3 className="eyebrow text-muted">Follow the station</h3>
              <SocialIcons className="mt-3" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
