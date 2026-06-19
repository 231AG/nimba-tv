import Link from "next/link";
import { Tv, Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, XIcon, YoutubeIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">Nimba TV</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {siteConfig.tagline}. Providing reliable, balanced, and impactful media content since {siteConfig.established}.
            </p>
            <div className="flex gap-3 mt-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                <XIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-white/10 rounded-full hover:bg-brand-red transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><Link href="/news" className="hover:text-brand-gold transition-colors">Latest News</Link></li>
              <li><Link href="/videos" className="hover:text-brand-gold transition-colors">Watch Broadcasts</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              {siteConfig.categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="hover:text-brand-gold transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {siteConfig.contact.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                {siteConfig.contact.email}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-400">
          <p>&copy; {currentYear} Nimba TV. All rights reserved.</p>
          <p>Informing, Educating, and Inspiring Communities</p>
        </div>
      </div>
    </footer>
  );
}
