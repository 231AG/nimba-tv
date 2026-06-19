import Link from "next/link";
import type { Category } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import {
  Landmark,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Trophy,
  Film,
  Cpu,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  landmark: Landmark,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse,
  trophy: Trophy,
  film: Film,
  cpu: Cpu,
  users: Users,
};

interface CategoriesPreviewProps {
  categories: Category[];
}

export default function CategoriesPreview({ categories }: CategoriesPreviewProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <SectionHeading title="Browse by Category" subtitle="Explore news across all topics" align="center" />
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, i) => {
            const Icon = iconMap[category.icon] || Landmark;
            return (
              <FadeIn key={category.id} delay={i * 0.05}>
                <Link
                  href={`/category/${category.slug}`}
                  className="group flex flex-col items-center p-6 bg-white border border-neutral-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors mb-3">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-blue group-hover:text-brand-red transition-colors text-center">
                    {category.name}
                  </h3>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
