import { usePageMeta } from "@/hooks/use-page-meta";
import { usePageAnimations } from "@/hooks/use-gsap";
import { CtaLink, PageHead, SectionLabel, Tag } from "@/components/bits";
import { education, experience, profile, skills } from "@/lib/content";

export default function About() {
  usePageMeta("About & Experience", "From network engineering to senior full stack development: Uduak Essien's background, experience at Whitelabel Collaborative and Microverse, education and skills.");
  const ref = usePageAnimations<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHead cmd="cat about.md" title={<>From routing packets<br />to shipping <span className="text-primary">product.</span></>}
        lede={<>I started as a network engineer. The repetitive parts of that job made me want to automate them, and automating them turned into programming. Today I'm a senior full stack engineer working in Ruby on Rails and React, with {"4+"} years of professional experience.</>} />

      <section className="mx-auto max-w-6xl px-5 pb-20 grid md:grid-cols-[1fr_1.6fr] gap-12">
        <aside data-reveal className="font-mono text-[13px] space-y-3 text-muted-foreground md:sticky md:top-24 self-start">
          <p><span className="text-primary">name</span> {profile.fullName}</p>
          <p><span className="text-primary">role</span> {profile.title}</p>
          <p><span className="text-primary">focus</span> {profile.stack}</p>
          <p><span className="text-primary">tz</span> {profile.location}</p>
          <p className="text-accent">{profile.availability}</p>
          <a href={profile.resume} download data-testid="link-about-resume" className="inline-block mt-3 border border-primary/60 text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors">download résumé.pdf</a>
        </aside>
        <div className="space-y-5 text-lg leading-relaxed" data-reveal>
          <p>Most of my recent work has been inside enterprise products: large Rails and React applications where reliability matters as much as the next feature. I like the unglamorous parts too — tidy APIs, migrations that don't hurt, and tests that tell you something.</p>
          <p>I also enjoy sharing what I learn. Mentoring 300+ engineers as a code reviewer, and writing technical articles on Rails and testing, both come from the same place: making the next person's path shorter.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionLabel n="01">experience</SectionLabel>
        <div className="space-y-14">
          {experience.map((r) => (
            <article key={r.id} data-reveal className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10" data-testid={`card-role-${r.id}`}>
              <div className="font-mono text-xs text-muted-foreground pt-2">{r.period}<br />{r.where}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{r.role} <span className="text-primary">@ {r.company}</span></h3>
                <ul className="mt-5 space-y-3">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-3 text-muted-foreground leading-relaxed"><span className="font-mono text-primary">›</span><span>{p}</span></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionLabel n="02">education</SectionLabel>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <div key={e.school} data-reveal className="border border-border p-6 bg-card/50">
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{e.school}</h3>
              <p className="mt-1 text-muted-foreground">{e.what}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 pb-24">
        <SectionLabel n="03">toolbox</SectionLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {skills.map((s) => (
            <div key={s.group} data-reveal>
              <p className="font-mono text-xs text-primary mb-3">{s.group}/</p>
              <div className="flex flex-wrap gap-2">{s.items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-muted-foreground" data-reveal>Also: remote collaboration across time zones, Agile delivery, and test-driven development.</p>
        <div className="mt-10"><CtaLink href="/projects" testId="link-about-projects">see the work</CtaLink></div>
      </section>
    </div>
  );
}
