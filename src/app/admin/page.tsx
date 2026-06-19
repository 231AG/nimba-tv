import { generateSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import FadeIn from "@/components/ui/FadeIn";
import {
  LayoutDashboard,
  FileText,
  Image,
  Users,
  FolderOpen,
  BarChart3,
  Settings,
  Database,
} from "lucide-react";

export const metadata = generateSEO({
  title: "Admin Dashboard",
  description: "Nimba TV content management dashboard placeholder.",
  url: `${siteConfig.url}/admin`,
});

const adminModules = [
  {
    icon: FileText,
    title: "Content Management",
    description: "Create, edit, and publish news articles and stories.",
    status: "Mock Data",
  },
  {
    icon: LayoutDashboard,
    title: "News Publishing",
    description: "Manage article workflow from draft to published.",
    status: "Mock Data",
  },
  {
    icon: Image,
    title: "Media Library",
    description: "Upload and manage images, videos, and documents.",
    status: "Mock Data",
  },
  {
    icon: Users,
    title: "Author Management",
    description: "Manage journalist profiles, bios, and social links.",
    status: "Mock Data",
  },
  {
    icon: FolderOpen,
    title: "Category Management",
    description: "Organize content into categories and tags.",
    status: "Mock Data",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "View site traffic, engagement, and content performance.",
    status: "Placeholder",
  },
];

export default function AdminPage() {
  return (
    <>
      <section className="bg-brand-blue text-white py-12">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex items-center gap-3">
              <Settings className="w-8 h-8" />
              <div>
                <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
                <p className="text-neutral-300 mt-1">Content management placeholder — connect Sanity.io to activate</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start gap-3">
              <Database className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-amber-800">CMS Not Connected</p>
                <p className="text-sm text-amber-700 mt-1">
                  This dashboard displays placeholder modules. To enable content management,
                  connect Sanity.io by setting environment variables and deploying Sanity Studio.
                  Schema definitions are ready in <code className="bg-amber-100 px-1 rounded">src/sanity/schemas/</code>.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminModules.map((mod, i) => (
              <FadeIn key={mod.title} delay={i * 0.05}>
                <div className="p-6 bg-white border border-neutral-200 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                      <mod.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-brand-gray text-neutral-600 rounded">
                      {mod.status}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-brand-blue mb-2">{mod.title}</h3>
                  <p className="text-sm text-neutral-600">{mod.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
