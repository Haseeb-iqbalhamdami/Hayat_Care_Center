import Image from "next/image";
import Link from "next/link";
import { contactDetails, footerLinkGroups } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-[var(--line)] bg-[var(--surface-soft)] text-[var(--ink)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.8fr_0.9fr]">
        <div >
          <Image
            src="/hayat-logo.jpg"
            alt="Hayat Care Center"
            width={220}
            height={80}
            className="h-auto w-[180px] rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line)]"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--ink-soft)]">
            Hayat Care Center brings together assisted support, life enrichment,
            hospitality, and family peace of mind in one welcoming community.
          </p>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--ink-soft)]">
              {group.links.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-[var(--ink)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-soft)]">
            <li>{contactDetails.address}</li>
            <li>
              <a href={contactDetails.phoneHref} className="transition-colors hover:text-[var(--ink)]">
                {contactDetails.phoneLabel}
              </a>
            </li>
            <li>
              <a href={contactDetails.supportHref} className="transition-colors hover:text-[var(--ink)]">
                {contactDetails.supportLine}
              </a>
            </li>
            <li>{contactDetails.email}</li>
            <li>{contactDetails.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-[var(--ink-soft)] sm:flex-row">
          <p>© {new Date().getFullYear()} Hayat Care Center. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="transition-colors hover:text-[var(--ink)]">
              FAQ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[var(--ink)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
