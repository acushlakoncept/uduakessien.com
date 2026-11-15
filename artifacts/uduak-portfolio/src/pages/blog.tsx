import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { usePageAnimations } from "@/hooks/use-gsap";
import { PageHead } from "@/components/bits";
import { posts } from "@/lib/content";

const topics = ["all", "rails", "testing", "frontend"];

export default function Blog() {
  usePageMeta("Writing", "Technical articles by Uduak Essien on Ruby on Rails, RSpec, TDD, Capybara, file uploads with Shrine and responsive design, published on Microverse, Medium and UX Collective.");
  const ref = usePageAnimations<HTMLDivElement>();
  const [topic, setTopic] = useState("all");
  const list = posts.filter((p) => topic === "all" || p.topic === topic);

  return (
    <div ref={ref}>
      <PageHead cmd="git log --author=uduak --articles" title={<>Notes from the <span className="text-primary">codebase.</span></>}
        lede="Eight published articles on Rails, testing and front-end practice. Each one opens on the publication where it lives." />
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2 font-mono text-xs mb-8" data-intro>
          {topics.map((t) => (
            <button key={t} onClick={() => setTopic(t)} aria-pressed={topic === t} data-testid={`button-topic-${t}`}
              className={`px-3 py-1.5 border transition-colors ${topic === t ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
              --{t}
            </button>
          ))}
        </div>
        <ol className="border-t border-border">
          {list.map((p) => (
            <li key={p.url} className="border-b border-border">
              <a href={p.url} target="_blank" rel="noreferrer" data-testid={`link-post-${p.iso}`}
                className="group grid md:grid-cols-[150px_1fr_140px_24px] gap-2 md:gap-8 py-7 items-baseline px-2 hover:bg-card/60 transition-colors">
                <time dateTime={p.iso} className="font-mono text-xs text-muted-foreground">{p.date}</time>
                <span className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">{p.title}</span>
                <span className="font-mono text-xs text-accent">{p.outlet}</span>
                <ArrowUpRight size={18} className="hidden md:block text-muted-foreground group-hover:text-primary transition-colors" aria-hidden />
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
          ))}
        </ol>
        <p className="mt-6 font-mono text-xs text-muted-foreground">{list.length} of {posts.length} articles</p>
      </section>
    </div>
  );
}
