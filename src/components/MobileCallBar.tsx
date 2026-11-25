import Link from "next/link";
import { PhoneIcon } from "./ui";

/** Always-visible call and enquiry buttons at the bottom of small screens. */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href="tel:+14374608142" className="btn-ghost px-4 py-3 text-[15px]">
          <PhoneIcon className="h-4 w-4" /> Call us
        </a>
        <Link href="/contact" className="btn-primary px-4 py-3 text-[15px]">
          Get in touch
        </Link>
      </div>
    </div>
  );
}
