import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center justify-center px-5 py-24">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-muted">
          That route does not exist. Head back to the homepage to see experience,
          projects, and contact details.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
