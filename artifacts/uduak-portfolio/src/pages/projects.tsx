import { useEffect } from "react";
import { Github } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { usePageAnimations } from "@/hooks/use-gsap";
import { CtaLink, PageHead, SectionLabel, Tag } from "@/components/bits";
import { projects, sideProjects } from "@/lib/content";

export default function Projects() {
  usePageMeta("Projects", "Professional work by Uduak Essien: OCConnect, Warranty Claims Management for Owens Corning, and Racing for Recovery mobile APIs, plus selected personal projects.");
  const ref = usePageAnimations<HTMLDivElement>();
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: "start" }), 120);
  }, []);

  return (
    <div ref={ref}>
      <PageHead cmd="ls -la ~/work --sort=recent" title={<>Professional <span className="text-primary">work.</span></>}
        lede="Client work delivered through Whitelabel Collaborative (2022 — 2026). These are private, enterprise systems, so there are no public screenshots or links here — just an honest account of the problems and what I built." />

      <section className="mx-auto max-w-6xl px-5 pb-16 space-y-6">
        {projects.map((p, i) => (
          <article key={p.id} id={p.id} data-reveal data-testid={`card-project-${p.id}`} className="scroll-mt-24 border border-border bg-card/50 hover:border-primary/50 transition-colors">
            <header className="flex flex-wrap items-center justify-between gap-2 px-5 h-10 border-b border-border font-mono text-[11px] text-muted-foreground">
              <span>case/{String(i + 1).padStart(2, "0")}_{p.id}.md</span>
              <span className="text-accent">{p.kind}</span>
            </header>
            <div className="p-6 md:p-10 grid md:grid-cols-[1fr_1.3fr] gap-8 md:gap-14">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em]">{p.name}</h2>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{p.client}</p>
                <p className="mt-6 text-muted-foreground leading-relaxed">{p.problem}</p>
                <div className="mt-6 flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>
              </div>
              <div>
                <p className="font-mono text-xs text-primary mb-4"># what I did</p>
                <ul className="space-y-4">
                  {p.work.map((w) => (
                    <li key={w} className="flex gap-3 leading-relaxed"><span className="font-mono text-primary">›</span>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 pb-24">
        <SectionLabel n="~">earlier personal projects</SectionLabel>
        <ul className="grid md:grid-cols-3 gap-4">
          {sideProjects.map((s, i) => (
            <li key={s.url} data-reveal>
              <a href={s.url} target="_blank" rel="noreferrer" data-testid={`link-side-project-${i}`} className="group flex flex-col h-full border border-border p-5 hover:border-primary/60 transition-colors">
                <Github size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="mt-4 text-lg font-semibold">{s.name}</span>
                <span className="font-mono text-xs text-muted-foreground mt-1">{s.stack}</span>
                <span className="mt-4 font-mono text-xs text-primary">source on github ↗</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12"><CtaLink href="/contact" testId="link-projects-contact">discuss a project</CtaLink></div>
      </section>
    </div>
  );
}
