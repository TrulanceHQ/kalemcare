"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 font-normal text-ink outline-none transition focus:border-purple focus:ring-4 focus:ring-purple/10";
const label = "flex flex-col gap-2 text-[15px] font-semibold text-plum";

/**
 * The form opens the visitor's email app with the enquiry filled in, so it works
 * without a backend. To receive enquiries directly, swap handleSubmit for a call to
 * your form service (e.g. Formspree, Resend or a Next.js route handler).
 *
 * Links like /contact?for=…&need=… (from the homepage "Who needs care?" picker)
 * pre-fill the enquiry type and the message.
 */
export default function ContactForm({ enquiryTypes }: { enquiryTypes: string[] }) {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Pre-fill from the URL once the page has loaded (the page itself is static).
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    const as = params.get("as");
    if (as) {
      const radio = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="type"]')).find((r) => r.value === as);
      if (radio) radio.checked = true;
    }
    const forWhom = params.get("for");
    const needs = params.getAll("need");
    const message = form.elements.namedItem("message") as HTMLTextAreaElement | null;
    if (message && !message.value && (forWhom || needs.length)) {
      const lines = [];
      if (forWhom) lines.push(`I'm looking for care for ${forWhom.toLowerCase()}.`);
      if (needs.length) lines.push(`We may need: ${needs.join(", ").toLowerCase()}.`);
      message.value = lines.join("\n") + "\n\n";
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Website enquiry from ${get("name") || "a visitor"}`;
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Enquiring as: ${get("type")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:hello@kalemcare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      id="enquiry"
      ref={formRef}
      onSubmit={handleSubmit}
      className="card grid grid-cols-1 gap-5 sm:grid-cols-2 sm:p-10"
    >
      <fieldset className="sm:col-span-2">
        <legend className={`${label} mb-3`}>I am</legend>
        <div className="flex flex-wrap gap-2">
          {enquiryTypes.map((t, i) => (
            <label
              key={t}
              className="cursor-pointer rounded-full border border-line bg-white px-4 py-2 text-[15px] text-ink transition hover:border-purple/50 has-checked:border-purple has-checked:bg-lilac has-checked:text-purple has-focus-visible:ring-4 has-focus-visible:ring-purple/20"
            >
              <input type="radio" name="type" value={t} defaultChecked={i === 0} className="sr-only" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>
      <label className={label}>
        Your name
        <input className={field} type="text" name="name" autoComplete="name" required />
      </label>
      <label className={label}>
        Phone
        <input className={field} type="tel" name="phone" autoComplete="tel" />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Email
        <input className={field} type="email" name="email" autoComplete="email" required />
      </label>
      <label className={`${label} sm:col-span-2`}>
        How can we help?
        <textarea
          className={`${field} resize-y`}
          name="message"
          rows={5}
          required
        />
      </label>
      <button type="submit" className="btn-primary cursor-pointer sm:col-span-2">
        Send message
      </button>
      {sent && (
        <p role="status" className="text-sm text-muted sm:col-span-2">
          Your email app should open with your message ready to send. If it doesn&apos;t, email us at{" "}
          <a href="mailto:hello@kalemcare.com">hello@kalemcare.com</a>.
        </p>
      )}
    </form>
  );
}
