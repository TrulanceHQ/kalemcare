"use client";

import Link from "next/link";
import { useState } from "react";
import { Arrow } from "./ui";

/**
 * "Who needs care?" picker: the visitor taps who the care is for and what they may need,
 * then continues to /contact with the enquiry pre-filled.
 */
export default function CarePicker({ people, needs }: { people: string[]; needs: string[] }) {
  const [person, setPerson] = useState<string | null>(null);
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (n: string) => setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  const params = new URLSearchParams();
  if (person) params.set("for", person);
  picked.forEach((n) => params.append("need", n));
  const href = `/contact${params.size ? `?${params}` : ""}#enquiry`;

  const chip =
    "cursor-pointer rounded-full border px-4 py-2.5 text-[15px] transition aria-pressed:border-purple aria-pressed:bg-purple aria-pressed:text-ivory";

  return (
    <div className="rounded-[32px] border border-line bg-white p-6 shadow-[0_30px_80px_-50px_rgb(36_10_49/0.45)] sm:p-9">
      <p className="font-display text-[12px] font-semibold tracking-[0.26em] text-bronze uppercase">Step 1 · Who needs care?</p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {people.map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={person === p}
            onClick={() => setPerson(person === p ? null : p)}
            className={`${chip} border-line bg-ivory text-ink hover:border-purple/40`}
          >
            {p}
          </button>
        ))}
      </div>

      <p className="mt-8 font-display text-[12px] font-semibold tracking-[0.26em] text-bronze uppercase">
        Step 2 · You may be looking for
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {needs.map((n) => (
          <button
            key={n}
            type="button"
            aria-pressed={picked.includes(n)}
            onClick={() => toggle(n)}
            className={`${chip} border-line bg-ivory text-ink hover:border-purple/40`}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p className="quote text-[22px] text-purple">Start with a conversation.</p>
        <Link href={href} className="btn-primary">
          Continue <Arrow />
        </Link>
      </div>
    </div>
  );
}
