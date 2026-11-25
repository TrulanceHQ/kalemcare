"use client";

import Link from "next/link";
import { useState } from "react";
import { Arrow, CheckIcon } from "./ui";

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
    "inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[15px] text-ink transition hover:border-purple/50 aria-pressed:border-purple aria-pressed:bg-lilac aria-pressed:text-purple";

  return (
    <div className="card sm:p-10">
      <p className="text-[15px] font-semibold text-plum">1. Who needs care?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {people.map((p) => (
          <button key={p} type="button" aria-pressed={person === p} onClick={() => setPerson(person === p ? null : p)} className={chip}>
            {person === p && <CheckIcon className="h-4 w-4" />}
            {p}
          </button>
        ))}
      </div>

      <p className="mt-8 text-[15px] font-semibold text-plum">2. You may be looking for</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {needs.map((n) => (
          <button key={n} type="button" aria-pressed={picked.includes(n)} onClick={() => toggle(n)} className={chip}>
            {picked.includes(n) && <CheckIcon className="h-4 w-4" />}
            {n}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p className="text-muted">Start with a conversation.</p>
        <Link href={href} className="btn-primary">
          Continue <Arrow />
        </Link>
      </div>
    </div>
  );
}
