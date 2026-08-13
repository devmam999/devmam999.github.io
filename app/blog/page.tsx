import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/section";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes and writing from Devesh Mamidi on software engineering, full-stack development, and AI-powered products.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main id="main" className="flex-1">
      <Container className="py-20 sm:py-24">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">
          {"// blog"}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Writing</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          A space for future posts on building full-stack products and AI-powered
          learning tools. No posts yet.
        </p>

        {posts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
            <p className="font-mono text-sm text-muted">Coming soon</p>
            <p className="mt-3 text-sm text-muted">
              Add entries in <code className="font-mono text-foreground">lib/posts.ts</code>{" "}
              when you are ready to publish.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg"
            >
              Let’s Work Together
            </Link>
          </div>
        ) : (
          <ul className="mt-12 space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
                >
                  <p className="font-mono text-xs text-muted">{post.date}</p>
                  <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{post.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  );
}
