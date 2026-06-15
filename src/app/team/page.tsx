import SiteFooter from "@/components/site-footer";
import TeamSection from "@/components/team-section";
import { getRequestLocale } from "@/lib/i18n-server";
import { getDictionary } from "@/dictionaries";
import { getTeamMembers } from "@/lib/team";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

const baseUrl = SITE_URL;

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind Akku-Craft — the people building a modular battery system.",
  alternates: {
    canonical: "/team",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Team | Akku-Craft",
    description: "Meet the team behind Akku-Craft.",
    type: "website",
    url: `${baseUrl}/team`,
  },
  twitter: {
    title: "Team | Akku-Craft",
    description: "Meet the team behind Akku-Craft.",
  },
};

export default async function TeamPage() {
  const locale = await getRequestLocale();
  const dict = await getDictionary(locale, "home");

  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 pb-0 md:px-8 md:pb-0">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[36px_36px] opacity-10" />

      <TeamSection title={dict.team.title} index="01" members={getTeamMembers()} />

      <SiteFooter />
    </main>
  );
}
