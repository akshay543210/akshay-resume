import { useReveal } from "@/hooks/useReveal";
import CustomCursor from "@/components/CustomCursor";
import { Download, Mail, ExternalLink, Twitter, Linkedin, Youtube, MessageCircle, Globe } from "lucide-react";

type ToolKind = "confirmed" | "required" | "bonus";
const tools: { name: string; kind: ToolKind }[] = [
  { name: "Google Veo", kind: "confirmed" },
  { name: "Google Flow", kind: "confirmed" },
  { name: "ChatGPT", kind: "confirmed" },
  { name: "Sora AI", kind: "confirmed" },
  { name: "Gemini AI", kind: "confirmed" },
  { name: "Grok AI", kind: "confirmed" },
  { name: "Midjourney", kind: "required" },
  { name: "Leonardo AI", kind: "required" },
  { name: "Kling AI", kind: "required" },
  { name: "Runway ML", kind: "required" },
  { name: "Minimax AI", kind: "required" },
  { name: "Ideogram", kind: "required" },
  { name: "Pika Labs", kind: "required" },
  { name: "Luma AI", kind: "required" },
  { name: "Stable Diffusion", kind: "required" },
  { name: "ComfyUI", kind: "required" },
  { name: "Flux AI", kind: "required" },
  { name: "ElevenLabs", kind: "required" },
  { name: "InVideo AI", kind: "required" },
  { name: "Higgsfield AI", kind: "required" },
  { name: "Seedream AI", kind: "required" },
  { name: "Google AI Studio", kind: "required" },
  { name: "JSON Prompting", kind: "bonus" },
  { name: "Cinematic Prompts", kind: "bonus" },
  { name: "AI Char. Consistency", kind: "bonus" },
  { name: "Storyboarding", kind: "bonus" },
  { name: "Motion Control", kind: "bonus" },
  { name: "Reels Editing", kind: "bonus" },
];

const creates = [
  { icon: "🎬", title: "Cinematic AI Videos", desc: "Long-form & short-form cinematic content using Google Veo, Kling, Runway ML & Sora." },
  { icon: "🎨", title: "Hyper-Realistic Images", desc: "Ultra-realistic AI visuals via Midjourney, Leonardo AI, Flux, Ideogram & Stable Diffusion." },
  { icon: "📱", title: "AI Reels & Shorts", desc: "Viral short-form content, UGC-style AI videos, hooks & captions optimized for engagement." },
  { icon: "📢", title: "AI Ads & Brand Visuals", desc: "Production-ready ad creatives, campaign visuals, and AI influencer content for brands." },
  { icon: "🔧", title: "Full-Stack AI Apps", desc: "Vibe-coded production apps with Lovable AI, Cursor, React, Supabase & Vercel." },
  { icon: "🤖", title: "AI Automation Workflows", desc: "Prompt pipelines, JSON prompting, AI character consistency, voice cloning workflows." },
];

const proofs = [
  {
    platform: "YouTube · @propfirm_knowledge",
    metric: "3 AI Videos",
    sub: "Cinematic AI thumbnails, shorts & long-form using Sora, Google Veo & Google Flow.",
    links: [
      { label: "AI Thumbnail proof", href: "https://youtu.be/QyedLRhBQ1A" },
      { label: "AI UGC Short", href: "https://youtube.com/shorts/yBpaV2C2-Ls" },
      { label: "AI Video", href: "https://youtu.be/iQY3mfmp_Pc" },
    ],
  },
  {
    platform: "Twitter / X · @propfirm_forex",
    metric: "11K+",
    sub: "Organically built audience. AI-generated images & videos, refined by real engagement data.",
    links: [{ label: "View Profile", href: "https://x.com/propfirm_forex" }],
  },
  {
    platform: "Discord Community",
    metric: "5,000+",
    sub: "Members managed. AI-assisted content, FAQs, onboarding flows & engagement strategy.",
    links: [{ label: "Join Community", href: "https://discord.gg/7MRsuqqT3n" }],
  },
  {
    platform: "Live Projects Shipped",
    metric: "5 Apps",
    sub: "PropFirm platform, trading journals, calculators — all built AI-first.",
    links: [
      { label: "propfirmknowledge.store", href: "https://propfirmknowledge.store" },
      { label: "15daystrading.vercel.app", href: "https://15daystrading.vercel.app" },
      { label: "superfunded40rule.vercel.app", href: "https://superfunded40rule.vercel.app" },
    ],
  },
];

const experience = [
  { role: "AI Full-Stack Developer & Growth Marketing Manager", co: "SuperFunded — Full-time · Remote", date: "Sep 2023 → Present" },
  { role: "Founder & Full-Stack Product Builder", co: "PropFirm Knowledge — Startup · Freelance · Remote", date: "Nov 2024 → Present" },
  { role: "Managing Director / Growth & Marketing Lead", co: "Clarity Funding Ltd — Full-time", date: "Jan 2023 → Nov 2023" },
  { role: "Frontend Web Developer", co: "Business Networks — Freelance · Remote", date: "Jun 2023 → Oct 2024" },
];

const socials = [
  { label: "Twitter / X", href: "https://x.com/propfirm_forex", Icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/@propfirm_knowledge", Icon: Youtube },
  { label: "Discord", href: "https://discord.gg/7MRsuqqT3n", Icon: MessageCircle },
  { label: "Portfolio", href: "https://propfirmknowledge.store", Icon: Globe },
];

const chipStyles: Record<ToolKind, string> = {
  confirmed: "border-[hsl(var(--confirmed)/0.45)] text-[hsl(var(--confirmed))] bg-[hsl(var(--confirmed)/0.06)] hover:bg-[hsl(var(--confirmed)/0.14)] hover:shadow-[0_0_18px_hsl(var(--confirmed)/0.35)]",
  required: "border-primary/30 text-foreground/80 bg-primary/[0.06] hover:bg-primary/[0.16] hover:text-primary hover:shadow-[0_0_18px_hsl(var(--primary)/0.45)] hover:border-primary",
  bonus: "border-[hsl(var(--bonus)/0.45)] text-[hsl(var(--bonus))] bg-[hsl(var(--bonus)/0.06)] hover:bg-[hsl(var(--bonus)/0.14)] hover:shadow-[0_0_18px_hsl(var(--bonus)/0.35)]",
};

const Index = () => {
  useReveal();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="film-grain" />
      <div className="aurora" />
      <CustomCursor />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6">
        {/* NAV */}
        <nav className="sticky top-0 z-30 -mx-4 sm:-mx-6 flex items-center justify-between gap-3 border-b border-primary/15 bg-background/85 px-4 sm:px-6 py-3 backdrop-blur-md">
          <span className="font-display text-xl tracking-[0.25em] gradient-text">AKSHAY.AI</span>
          <span className="font-mono hidden md:inline text-[0.65rem] tracking-widest text-foreground/40">
            // AI Creator · Prompt Engineer · Full-Stack
          </span>
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-primary">
            Open to Work
          </span>
        </nav>

        {/* HERO */}
        <header className="relative pt-14 pb-10 text-center">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-primary animate-[fadeUp_0.6s_ease_both]">
            // AI Video Artist · Cinematic Prompt Engineer · Content Creator
          </p>
          <h1 className="mt-4 font-display text-6xl sm:text-7xl md:text-8xl leading-none tracking-[0.08em] animate-[fadeUp_0.7s_0.1s_ease_both]">
            AKSHAY
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] gradient-text-tri">
              MUTHYALA
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm sm:text-[0.95rem] leading-relaxed text-foreground/55 animate-[fadeUp_0.7s_0.2s_ease_both]">
            I build with AI — cinematic videos, hyper-realistic visuals, viral short-form content, and full-stack AI-powered products. Fluent in 15+ AI generation tools. Shipped 5+ live products. 11K+ audience built organically.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 animate-[fadeUp_0.7s_0.3s_ease_both]">
            <a
              href="#work"
              className="rounded-lg px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white hover-lift"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 8px 30px hsl(271 91% 50% / 0.35)" }}
            >
              View My AI Work
            </a>
            <a
              href="/akshay-muthyala-resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/15 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/85 hover:border-primary hover:text-primary hover-lift"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl border border-primary/15 bg-primary/10 overflow-hidden animate-[fadeUp_0.7s_0.4s_ease_both]">
            {[
              { n: "11K+", l: "X / Twitter" },
              { n: "5K+", l: "Discord" },
              { n: "15+", l: "AI Tools" },
              { n: "5+", l: "Live Apps" },
            ].map((s) => (
              <div key={s.l} className="bg-background/90 py-5 px-3 text-center">
                <span className="block font-display text-3xl sm:text-4xl gradient-text">{s.n}</span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.15em] text-foreground/40">{s.l}</span>
              </div>
            ))}
          </div>
        </header>

        {/* TOOLS */}
        <section id="work" className="reveal py-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-primary">// AI Tools Arsenal</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-[0.15em]">TOOLS I USE</h2>
          <div className="mt-3 flex flex-wrap gap-4 text-[0.68rem] text-foreground/55">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[hsl(var(--confirmed))]" />Hands-on experience</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" />Job required</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[hsl(var(--bonus))]" />Bonus skill</span>
          </div>
          <div className="mt-5 grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))" }}>
            {tools.map((t) => (
              <span
                key={t.name}
                title={t.name}
                className={`cursor-default rounded-lg border px-2 py-2 text-center text-[0.7rem] font-medium transition-all duration-200 hover:-translate-y-0.5 ${chipStyles[t.kind]}`}
              >
                {t.name}
              </span>
            ))}
          </div>
        </section>

        {/* CONTENT I BUILD */}
        <section className="reveal py-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-primary">// What I Create</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-[0.15em]">CONTENT I BUILD</h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {creates.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-xl border border-foreground/8 bg-foreground/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.05]"
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--secondary)), transparent)" }}
                />
                <div className="text-2xl">{c.icon}</div>
                <p className="mt-2 text-sm font-semibold text-foreground">{c.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/45">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="reveal py-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-primary">// Social Proof</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-[0.15em]">REAL RESULTS</h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {proofs.map((p) => (
              <div key={p.platform} className="rounded-xl border border-foreground/8 bg-foreground/[0.02] p-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">{p.platform}</p>
                <p className="mt-1 font-display text-3xl sm:text-4xl tracking-wide text-foreground">{p.metric}</p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/45">{p.sub}</p>
                <div className="mt-3 flex flex-col gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between rounded-md border border-primary/20 bg-primary/[0.08] px-3 py-1.5 text-[0.7rem] text-[hsl(271_91%_82%)] hover:border-primary hover:bg-primary/20"
                    >
                      <span>{l.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-70" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="reveal py-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-primary">// Work History</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-[0.15em]">EXPERIENCE</h2>
          <div className="mt-5 flex flex-col gap-3">
            {experience.map((e) => (
              <div
                key={e.role}
                className="rounded-r-xl border border-foreground/8 border-l-2 border-l-primary bg-foreground/[0.02] px-4 py-3 transition-all hover:bg-primary/[0.05]"
              >
                <p className="text-[0.88rem] font-semibold text-foreground">{e.role}</p>
                <p className="mt-0.5 text-xs text-[hsl(271_91%_78%)]">{e.co}</p>
                <p className="mt-0.5 font-mono text-[0.65rem] text-foreground/40">{e.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="reveal py-10">
          <div
            className="rounded-2xl border border-primary/30 bg-primary/[0.05] px-6 py-10 text-center"
            style={{ boxShadow: "0 0 60px hsl(271 91% 50% / 0.18)" }}
          >
            <h2 className="font-display text-3xl sm:text-4xl tracking-[0.15em] gradient-text">LET'S CREATE TOGETHER</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-foreground/55">
              Applying for AI Creator / AI Video Artist at Techpixe.<br />
              Open to full-time remote roles in AI content, prompt engineering & full-stack.
            </p>
            <a
              href="mailto:akshaymuthyala77@gmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-3 font-mono text-xs text-[hsl(271_91%_82%)] hover:border-primary hover:bg-primary/20"
            >
              <Mail className="h-4 w-4" />
              akshaymuthyala77@gmail.com
            </a>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-foreground/10 bg-foreground/[0.04] px-3 py-1.5 text-[0.7rem] text-foreground/60 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-6 text-center font-mono text-[0.65rem] text-foreground/35">
          © 2025 Akshay Muthyala · Built with AI · Powered by Lovable
        </footer>
      </div>
    </div>
  );
};

export default Index;
