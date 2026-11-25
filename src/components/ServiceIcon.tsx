/** Line icons for each service. Keys match the `icon` field in src/app/services/services.ts. */
const paths = {
  // a hand offering support
  hand: (
    <>
      <path d="M3 14h3l4 2h4a2 2 0 0 0 0-4h-3" />
      <path d="m6 20 1.5-1h6l6.4-4.3a1.9 1.9 0 0 0-2.2-3.1L14 14" />
      <path d="M12 3.5c-1-1.2-3-1-3.5.5-.4 1.3.7 2.6 3.5 4.5 2.8-1.9 3.9-3.2 3.5-4.5-.5-1.5-2.5-1.7-3.5-.5" />
    </>
  ),
  // a bowl with steam
  meal: (
    <>
      <path d="M3 12h18a9 9 0 0 1-18 0Z" />
      <path d="M8 8c0-1.5 1-1.5 1-3M12 8c0-1.5 1-1.5 1-3M16 8c0-1.5 1-1.5 1-3" />
    </>
  ),
  // two speech bubbles
  chat: (
    <>
      <path d="M4 5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
      <path d="M19 9h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-4-3h-4" />
    </>
  ),
  // a cup of tea: a pause for the caregiver
  cup: (
    <>
      <path d="M4 9h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6Z" />
      <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3" />
    </>
  ),
  // a map pin on a path
  pin: (
    <>
      <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  // a calendar with a loop
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M9 15.5a3 3 0 1 0 1-2.2M9 12.5v1.5h1.5" />
    </>
  ),
} as const;

export type ServiceIconName = keyof typeof paths;

export default function ServiceIcon({ name, className = "" }: { name: ServiceIconName; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}
