"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 bg-brand-gray">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-brand-blue" />
            </div>
            <SectionHeading
              title="Stay Updated With Nimba TV"
              subtitle="Get the latest news and broadcasts delivered to your inbox"
              align="center"
            />

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 mt-4">
                <p className="font-semibold">Thank you for subscribing!</p>
                <p className="text-sm mt-1">You&apos;ll receive our latest updates soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="flex-1 px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  aria-label="Your email address"
                />
                <Button type="submit" variant="primary" size="lg">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
