import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { usePageAnimations } from "@/hooks/use-gsap";
import { PageHead } from "@/components/bits";
import { profile } from "@/lib/content";

export default function Contact() {
  usePageMeta("Contact", "Contact Uduak Essien, senior Rails and React engineer based in Portugal, for remote roles or freelance work — by email or LinkedIn.");
  const ref = usePageAnimations<HTMLDivElement>();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* clipboard unavailable */ }
  };

  const channels = [
    { icon: Linkedin, label: "LinkedIn", value: "in/acushlakoncept", href: profile.linkedin, id: "linkedin" },
    { icon: Github, label: "GitHub", value: "acushlakoncept", href: profile.github, id: "github" },
  ];

  return (
    <div ref={ref}>
      <PageHead cmd="ssh uduak@essien" title={<>Let's <span className="text-primary">talk.</span></>}
        lede={<>Hiring for a remote role, or need help with a Rails and React product? Email is the fastest way to reach me. I work from {profile.location}.</>} />
      <section className="mx-auto max-w-6xl px-5 pb-24 grid md:grid-cols-[1.4fr_1fr] gap-6">
        <div data-reveal className="border border-border bg-card/50 p-6 md:p-10">
          <p className="font-mono text-xs text-muted-foreground flex items-center gap-2"><Mail size={14} /> email</p>
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent("Hello Uduak")}`} data-testid="link-contact-email"
            className="mt-4 block text-[clamp(1.3rem,3.6vw,2.4rem)] font-semibold tracking-tight break-all hover:text-primary transition-colors">
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <a href={`mailto:${profile.email}`} data-testid="link-contact-email-btn" className="bg-primary text-primary-foreground px-5 py-3">open mail client</a>
            <button onClick={copy} data-testid="button-copy-email" className="inline-flex items-center gap-2 border border-border px-5 py-3 hover:border-primary hover:text-primary transition-colors">
              {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "copied" : "copy address"}
            </button>
          </div>
          <p className="mt-8 font-mono text-xs text-muted-foreground" aria-live="polite">
            <span className="text-accent">●</span> {profile.availability.toLowerCase()} — full-time roles and freelance projects
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {channels.map((c) => (
            <a key={c.id} href={c.href} target="_blank" rel="noreferrer" data-reveal data-testid={`link-contact-${c.id}`}
              className="group border border-border p-6 hover:border-primary/60 transition-colors">
              <c.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <p className="mt-4 text-xl font-semibold">{c.label}</p>
              <p className="font-mono text-xs text-muted-foreground">{c.value} ↗</p>
            </a>
          ))}
          <a href={profile.resume} download data-reveal data-testid="link-contact-resume"
            className="group border border-border p-6 hover:border-primary/60 transition-colors">
            <Download size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            <p className="mt-4 text-xl font-semibold">Résumé</p>
            <p className="font-mono text-xs text-muted-foreground">Uduak_Essien_Resume.pdf</p>
          </a>
        </div>
      </section>
    </div>
  );
}
