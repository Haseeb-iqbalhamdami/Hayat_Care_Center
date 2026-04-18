import Image from "next/image";
import Link from "next/link";
import { contactDetails, footerLinkGroups } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200 bg-[#ffffff] text-[var(--ink)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr_0.9fr]">
        <div>
          <Image
            src="/hayat-logo.png"
            alt="Hayat Care Centers"
            width={200}
            height={72}
            className="h-auto w-[168px]"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--ink-soft)]">
            Hayat Care Centers brings together an adult care center and a home care agency—so families can choose daytime
            community support, care at home, or a thoughtful combination as needs change.
          </p>
        </div>

        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-gold)]">{group.title}</h3>
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
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-gold)]">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--ink-soft)]">
            <li>{contactDetails.address}</li>
            <li>
              <a href={contactDetails.phoneHref} className="transition-colors hover:text-[var(--ink)]">
                {contactDetails.phoneLabel}
              </a>
            </li>
            <li>
              <a href={contactDetails.websiteHref} className="transition-colors hover:text-[var(--ink)]">
                {contactDetails.websiteLabel}
              </a>
            </li>
            <li>{contactDetails.email}</li>
            <li>{contactDetails.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-[#ffffff]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-[var(--ink-soft)] sm:flex-row">
          <p>© {new Date().getFullYear()} Hayat Care Centers. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="transition-colors hover:text-[var(--ink)]">
              FAQ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[var(--ink)]">
              Contact
            </Link>
            <Link href="/home-care-agency" className="transition-colors hover:text-[var(--ink)]">
              Home care
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
