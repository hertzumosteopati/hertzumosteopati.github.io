import type { ReactNode, MouseEventHandler } from "react";

/** Pill-shaped call to action. Primary (tang) is the default; use accent (rav) once per view, for the online booking. */
export interface ButtonProps {
  /** "primary" tang fill · "accent" rav fill with tang text · "outline" hairline tang border. */
  variant?: "primary" | "accent" | "outline";
  /** "md" 52px tall · "sm" 44px, for the sticky mobile bar and dense lists. */
  size?: "md" | "sm";
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Opens in a new tab with rel="noopener" (booking systems, maps). */
  external?: boolean;
  /** Trailing stroke icon: "arrow" for navigation and booking, "phone" for call-to-book. */
  icon?: "arrow" | "phone";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
  className?: string;
  children: ReactNode;
}

/** Uppercase Bricolage label with the rav touchpoint dot, set above a headline or card title. */
export interface EyebrowProps {
  /** The surface it sits on: "kalk" (default, also bone/siv/sand) or "tang". */
  on?: "kalk" | "tang";
  /** Element to render; defaults to span. */
  as?: "span" | "p" | "div" | "h2" | "h3";
  className?: string;
  children: ReactNode;
}

export interface ClinicBooking {
  /** "online" renders an accent button that opens the booking system · "phone" renders a primary button with a tel: link. */
  kind: "online" | "phone";
  /** Verb first, with the town: "Book tid i Brøndby", "Ring 59 31 10 05". */
  label: string;
  href: string;
}

/** One tinted card per clinic: role, name, intro, address, days and the right booking action. */
export interface ClinicCardProps {
  /** Eyebrow text: "Egen klinik · 2 dage om ugen", "Ansat · 3 dage om ugen". */
  role: string;
  /** "Brøndby Manuel Klinik", "Manuel Medicinsk Klinik". */
  name: string;
  /** One sentence on what Anne does there. */
  intro?: string;
  /** Street, postcode and town on one line: "Vestre Gade 6D, st. th. · 2605 Brøndby". */
  address: string;
  /** "Tirsdag og torsdag" — the days Anne is at this clinic. */
  days?: string;
  booking: ClinicBooking;
  /** Optional outline button, e.g. "Find vej" with a maps link. */
  secondary?: { label: string; href: string };
  /** Small serif note under the actions: "Klinikken er ofte i behandling – læg en besked eller send en sms." */
  note?: string;
  /** "siv" cool tint (default, Brøndby) · "sand" warm tint (Nykøbing) · "bone" bordered card. */
  tone?: "siv" | "sand" | "bone";
  className?: string;
}

export interface PriceRow {
  /** "Osteopati, 1. behandling (voksen)". */
  service: string;
  /** "40 min." — shown after the service in tang-muted. */
  duration?: string;
  /** "750 kr." exactly as the clinic writes it. */
  price: string;
}

/** Bordered bone card listing services and prices with hairline dividers; the amount in rav-deep. */
export interface PriceListProps {
  title?: string;
  rows: PriceRow[];
  /** Footnote: "Alle tider er inkl. omklædning og journalføring." */
  note?: string;
  className?: string;
}

export declare const Button: (props: ButtonProps) => JSX.Element;
export declare const Eyebrow: (props: EyebrowProps) => JSX.Element;
export declare const ClinicCard: (props: ClinicCardProps) => JSX.Element;
export declare const PriceList: (props: PriceListProps) => JSX.Element;
