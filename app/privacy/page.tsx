import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy details for Devesh Mamidi’s personal website.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="flex-1 pt-24">
      <Container className="py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          This site is a personal portfolio. It does not use analytics cookies, does not
          collect form submissions, and does not sell personal data. Contact links open
          your own email or social apps.
        </p>
        <Link href="/" className="mt-8 inline-flex text-sm text-accent hover:underline">
          Back home
        </Link>
      </Container>
    </main>
  );
}
