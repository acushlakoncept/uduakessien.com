import { Link } from "wouter";
import { ArrowUpRight, Download } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { usePageAnimations } from "@/hooks/use-gsap";
import { CtaLink, SectionLabel, Tag } from "@/components/bits";
import { posts, profile, projects, skills } from "@/lib/content";

export default function Home() {
  usePageMeta("Senior Full Stack Engineer (Rails | React)", "Uduak Essien builds enterprise Ruby on Rails and React applications, REST APIs and dependable production systems. Portugal, remote worldwide.");
  const ref = usePageAnimations<HTMLDivElement>();

  return (
    <div ref={ref}>
      <section className="relative grid-bg border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 pt-14 md:pt-24 pb-16 md:pb-24 grid md:grid-cols-[1.35fr_1fr] gap-12 items-center">
          <div>
            <p data-intro className="font-mono text-[13px] text-muted-foreground">
              <span className="text-accent">$</span> <span data-type>whoami --verbose</span><span className="caret" />
            </p>
            <h1 data-intro className="mt-6 text-[clamp(3rem,9vw,7.2rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
              Uduak<br />Essien<span className="text-primary">.</span>
            </h1>
            <p data-intro className="mt-6 text-xl md:text-2xl leading-snug max-w-xl">
              Senior full stack engineer. I build and keep alive the <span className="text-primary">Rails and React</span> systems that businesses actually run on.
            </p>
            <dl data-intro className="mt-8 font-mono text-[13px] grid grid-cols-[auto_1fr] gap-x-5 gap-y-1.5 text-muted-foreground max-w-md">
              <dt className="text-primary/80">experience</dt><dd className="text-foreground">4+ years, professional</dd>
              <dt className="text-primary/80">based_in</dt><dd className="text-foreground">{profile.location}</dd>
              <dt className="text-primary/80">status</dt><dd className="text-accent">{profile.availability.toLowerCase()}</dd>
            </dl>
            <div data-intro className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
              <Link href="/projects" data-testid="link-hero-projects" className="bg-primary text-primary-foreground px-5 py-3 hover:translate-y-[-2px] transition-transform">view work</Link>
              <a href={profile.resume} download data-testid="link-hero-resume" className="inline-flex items-center gap-2 border border-border px-5 py-3 hover:border-primary hover:text-primary transition-colors">
                <Download size={15} /> résumé.pdf
              </a>
              <a href={`mailto:${profile.email}`} data-testid="link-hero-email" className="px-5 py-3 text-muted-foreground hover:text-foreground link-u">{profile.email}</a>
            </div>
          </div>
          <figure data-intro className="relative mx-auto w-full max-w-[380px]">
            <div className="border border-border bg-card">
              <div className="flex items-center gap-1.5 px-3 h-8 border-b border-border font-mono text-[11px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary/70" /><span className="w-2 h-2 rounded-full bg-muted-foreground/40" /><span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                <span className="ml-2">portrait.png</span>
              </div>
              <img src={profile.portrait} alt="Portrait of Uduak Essien" className="w-full aspect-square object-cover" data-testid="img-portrait" />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground">// ruby, react, and a well-kept test suite</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionLabel n="01">recent work</SectionLabel>
        <ol className="divide-y divide-border border-y border-border">
          {projects.map((p, i) => (
            <li key={p.id} data-reveal>
              <Link href={`/projects#${p.id}`} data-testid={`link-home-project-${p.id}`}
                className="group grid md:grid-cols-[60px_1.1fr_1.4fr_auto] gap-3 md:gap-8 py-8 items-baseline hover:bg-card/60 transition-colors px-2">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <span>
                  <span className="block text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-primary transition-colors">{p.name}</span>
                  <span className="block font-mono text-xs text-muted-foreground mt-1">{p.client}</span>
                </span>
                <span className="text-muted-foreground leading-relaxed">{p.summary}</span>
                <ArrowUpRight className="hidden md:block text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </li>
          ))}
        </ol>
        <div className="mt-8"><CtaLink href="/projects" testId="link-all-projects">all projects and case notes</CtaLink></div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24 grid md:grid-cols-[1fr_1.4fr] gap-12">
          <div data-reveal>
            <SectionLabel n="02">how I work</SectionLabel>
            <p className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Ship the feature. Keep production calm. Leave the codebase easier to change.
            </p>
          </div>
          <div data-reveal className="font-mono text-[13px] border border-border bg-background">
            <div className="px-4 h-9 flex items-center border-b border-border text-muted-foreground">~/stack.yml</div>
            <div className="p-5 space-y-2 overflow-x-auto">
              {skills.map((s) => (
                <p key={s.group}><span className="text-primary">{s.group}</span><span className="text-muted-foreground">: </span>[{s.items.map((it, j) => <span key={it}><span className="text-accent">{it}</span>{j < s.items.length - 1 ? ", " : ""}</span>)}]</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionLabel n="03">writing</SectionLabel>
        <ul className="grid md:grid-cols-2 gap-x-10">
          {posts.slice(0, 4).map((p, i) => (
            <li key={p.url} data-reveal className="border-t border-border">
              <a href={p.url} target="_blank" rel="noreferrer" data-testid={`link-home-post-${i}`} className="group block py-6">
                <span className="font-mono text-[11px] text-muted-foreground">{p.date} · {p.outlet}</span>
                <span className="block mt-2 text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6"><CtaLink href="/blog" testId="link-all-posts">all 8 publications</CtaLink></div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28" data-reveal>
          <p className="font-mono text-sm text-muted-foreground"><span className="text-accent">$</span> ./hire --remote</p>
          <h2 className="mt-4 text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold tracking-[-0.035em] leading-[0.95] max-w-4xl">
            Need a Rails and React engineer who has done this in production?
          </h2>
          <div className="mt-8 flex flex-wrap gap-6 items-center">
            <CtaLink href="/contact" testId="link-cta-contact">start a conversation</CtaLink>
            <Tag>employers</Tag><Tag>freelance clients</Tag>
          </div>
        </div>
      </section>
    </div>
  );
}
