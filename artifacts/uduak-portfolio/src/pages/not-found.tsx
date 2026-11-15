import { Link, useLocation } from "wouter";
import { usePageMeta } from "@/hooks/use-page-meta";
import { usePageAnimations } from "@/hooks/use-gsap";

export default function NotFound() {
  usePageMeta("404 — Not found", "This page doesn't exist on Uduak Essien's site.");
  const ref = usePageAnimations<HTMLDivElement>();
  const [loc] = useLocation();
  const routes = [["/", "home"], ["/about", "about"], ["/projects", "projects"], ["/blog", "writing"], ["/contact", "contact"]];
  return (
    <div ref={ref} className="mx-auto max-w-6xl px-5 py-20 md:py-32 font-mono">
      <p data-intro className="text-sm text-muted-foreground"><span className="text-accent">$</span> cd {loc}</p>
      <p data-intro className="text-sm text-destructive mt-1">bash: cd: {loc}: No such file or directory</p>
      <h1 data-intro className="font-sans mt-10 text-[clamp(4rem,14vw,10rem)] font-extrabold leading-none tracking-[-0.05em]">404<span className="text-primary">.</span></h1>
      <p data-intro className="mt-6 text-muted-foreground">Try one of these instead:</p>
      <ul data-intro className="mt-4 space-y-2 text-sm">
        {routes.map(([h, l]) => (
          <li key={h}><Link href={h} className="link-u text-primary" data-testid={`link-404-${l}`}>cd {h === "/" ? "~" : h}</Link> <span className="text-muted-foreground"># {l}</span></li>
        ))}
      </ul>
    </div>
  );
}
