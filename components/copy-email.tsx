"use client";

import { useState } from "react";
import { CopyIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="mx-auto mt-6 inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
    >
      <CopyIcon className="h-4 w-4" />
      {copied ? "Email copied" : "Copy email address"}
    </button>
  );
}
