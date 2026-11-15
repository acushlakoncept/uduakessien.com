import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/content";

const nav = [
  { href: "/", label: "home", cmd: "~" },
  { href: "/about", label: "about", cmd: "01" },
  { href: "/projects", label: "projects", cmd: "02" },
  { href: "/blog", label: "writing", cmd: "03" },
  { href: "/contact", label: "contact", cmd: "04" },
];

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Lisbon" }).format(new Date()));
    f();
    const id = setInterval(f, 30000);
    return () => clearInterval(id);
  }, []);
  return <span data-testid="text-local-time">Lisbon {t}</span>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [loc] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [loc]);
  const path = loc === "/" ? "~" : `~${loc}`;

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] bg-primary text-primary-foreground px-3 py-2 font-mono text-sm">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between font-mono text-[13px]">
          <Link href="/" className="flex items-center gap-2 text-foreground" data-testid="link-logo">
            <span className="text-primary">uduak@essien</span>
            <span className="text-muted-foreground">:{path}$</span>
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {nav.slice(1).map((n) => {
              const active = loc === n.href;
              return (
                <Link key={n.href} href={n.href} data-testid={`link-nav-${n.label}`} aria-current={active ? "page" : undefined}
                  className={`px-3 py-1.5 transition-colors ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  <span className="opacity-50 mr-1">{n.cmd}</span>{n.label}
                </Link>
              );
            })}
            <a href={profile.resume} download data-testid="link-resume-header"
              className="ml-3 border border-primary/60 text-primary px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors">
              résumé.pdf
            </a>
          </nav>
          <button className="md:hidden p-2 text-foreground" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Toggle menu" data-testid="button-menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav aria-label="Mobile" className="md:hidden border-t border-border font-mono text-sm px-5 py-3 flex flex-col">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={`py-2.5 ${loc === n.href ? "text-primary" : "text-foreground"}`} data-testid={`link-mobile-${n.label}`}>
                <span className="text-muted-foreground mr-2">$ cd</span>{n.label}
              </Link>
            ))}
            <a href={profile.resume} download className="py-2.5 text-primary" data-testid="link-resume-mobile">$ download résumé.pdf</a>
          </nav>
        )}
      </header>

      <main id="main" className="flex-1">{children}</main>

      <footer className="border-t border-border font-mono text-xs text-muted-foreground">
        <div className="mx-auto max-w-6xl px-5 py-8 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span><span className="text-accent">●</span> {profile.availability.toLowerCase()}</span>
            <Clock />
          </div>
          <div className="flex flex-wrap gap-5">
            <a className="link-u hover:text-foreground" href={`mailto:${profile.email}`} data-testid="link-footer-email">email</a>
            <a className="link-u hover:text-foreground" href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="link-footer-linkedin">linkedin</a>
            <a className="link-u hover:text-foreground" href={profile.github} target="_blank" rel="noreferrer" data-testid="link-footer-github">github</a>
            <span>© {new Date().getFullYear()} {profile.fullName}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
