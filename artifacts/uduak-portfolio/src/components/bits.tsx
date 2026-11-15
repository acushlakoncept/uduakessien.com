import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { nudge } from "@/hooks/use-gsap";

export function Prompt({ cmd, className = "" }: { cmd: string; className?: string }) {
  return (
    <p className={`font-mono text-[13px] text-muted-foreground ${className}`} data-intro>
      <span className="text-accent">$</span> <span>{cmd}</span>
    </p>
  );
}

export function PageHead({ cmd, title, lede }: { cmd: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 md:pt-24 pb-12">
      <Prompt cmd={cmd} />
      <h1 data-intro className="mt-5 text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-[-0.035em]">{title}</h1>
      {lede && <p data-intro className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{lede}</p>}
    </section>
  );
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8" data-reveal>
      <span className="text-primary">{n}</span>
      <span>{children}</span>
      <span data-line className="h-px flex-1 bg-border" />
    </div>
  );
}

export function CtaLink({ href, children, testId }: { href: string; children: ReactNode; testId: string }) {
  return (
    <Link href={href} data-testid={testId}
      className="group inline-flex items-center gap-2 font-mono text-sm text-primary"
      onMouseEnter={(e) => nudge(e.currentTarget.querySelector("svg") as unknown as HTMLElement, 6)}
      onMouseLeave={(e) => nudge(e.currentTarget.querySelector("svg") as unknown as HTMLElement, 0)}>
      <span className="link-u">{children}</span> <ArrowRight size={15} />
    </Link>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="font-mono text-[11px] border border-border px-2 py-0.5 text-muted-foreground">{children}</span>;
}
