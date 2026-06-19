"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-heading font-bold">Contact Us</h1>
            <p className="text-neutral-300 mt-2">Get in touch with the Nimba TV team</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <SectionHeading title="Send Us a Message" />
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm mt-1">We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue resize-y"
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </FadeIn>

            <FadeIn delay={0.1}>
              <SectionHeading title="Contact Information" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-blue">Office Address</h3>
                    <p className="text-neutral-600 mt-1">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-blue">Phone</h3>
                    <p className="text-neutral-600 mt-1">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-blue">Email</h3>
                    <p className="text-neutral-600 mt-1">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-brand-blue mb-3">Find Us</h3>
                <div className="aspect-video bg-neutral-200 rounded-xl flex items-center justify-center">
                  <p className="text-neutral-500 text-sm">Google Maps Placeholder</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
