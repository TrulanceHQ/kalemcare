/** Line icons used for services and feature lists. */
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
  // excellence: a star
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />,
  // compassion: a heart
  heart: <path d="M12 20s-7.5-4.6-9-9.3C2 7.4 4.2 4.5 7.3 4.5c2 0 3.6 1.1 4.7 2.7 1.1-1.6 2.7-2.7 4.7-2.7 3.1 0 5.3 2.9 4.3 6.2-1.5 4.7-9 9.3-9 9.3Z" />,
  // reliability: a clock
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  // a shield with a tick
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  // people
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c2.8.3 5 2.7 5 5.8" />
    </>
  ),
  // a speech bubble
  message: <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />,
  // a chart rising
  chart: <path d="M4 20V4M4 20h16M8 15l4-4 3 3 5-6" />,
} as const;

export type ServiceIconName = keyof typeof paths;

export default function ServiceIcon({ name, className = "" }: { name: ServiceIconName; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}
