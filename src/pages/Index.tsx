import { useReveal } from "@/hooks/useReveal";
import CustomCursor from "@/components/CustomCursor";
import { Mail, ExternalLink, Twitter, Linkedin, Youtube, MessageCircle, Globe, ArrowUpRight, Sparkles } from "lucide-react";

/* TOOL STACK — strictly from resume */
const stack: { group: string; items: string[] }[] = [
  { group: "Prompt Engineering", items: ["Text Prompting", "Image Prompting", "Video Prompting", "Prompt Evaluation", "Prompt Refinement"] },
  { group: "AI Models & Generation", items: ["ChatGPT", "Sora AI", "Google Veo", "Google Flow"] },
  { group: "AI Vibe Coding", items: ["Lovable AI", "Cursor AI", "Dyad AI"] },
  { group: "Frontend", items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend & DB", items: ["Supabase"] },
  { group: "Version Control", items: ["Git", "GitHub"] },
  { group: "Deployment", items: ["Vercel", "Netlify"] },
];

const projects = [
  {
    title: "PropFirm Knowledge Store",
    tag: "Full-Stack AI Platform",
    href: "https://www.propfirmknowledge.store",
    desc: "Aggregator of prop-firm reviews, payouts, rules & discounts. Built with Lovable AI + Cursor AI + Supabase. Dynamic filtering, scalable models, SEO-optimized.",
    stack: ["Lovable AI", "Cursor AI", "Supabase", "React"],
  },
  {
    title: "15 Days Trading Journal",
    tag: "GPT-Powered Journal",
    href: "https://15daystrading.vercel.app",
    desc: "GPT-powered journaling app for trader consistency — daily submissions, calendar tracking, leaderboard logic. Designed entirely from AI prompts → logic → UI.",
    stack: ["ChatGPT", "React", "Vercel"],
  },
  {
    title: "PropFirm Knowledge Journal",
    tag: "Mobile-First Journal",
    href: "https://www.propfirmknowledgejournal.in/",
    desc: "Minimalistic, mobile-first journaling tool for real traders. Built AI-assisted with Lovable AI and Cursor AI. Clarity, performance, clean UX.",
    stack: ["Lovable AI", "Cursor AI", "Tailwind"],
  },
  {
    title: "SuperFunded 40% Calculator",
    tag: "Interactive Calculator",
    href: "https://superfunded40rule.vercel.app",
    desc: "Converted complex trading rules into a simple, instant calculator. Logic generated from AI prompts and refined to production quality.",
    stack: ["React", "JavaScript", "Vercel"],
  },
  {
    title: "Equity Drawdown Calculator",
    tag: "Risk Visualizer",
    href: "https://peak-equity-drawdown-calci.vercel.app",
    desc: "Risk-management calculator that visualizes equity drawdowns. Prompt-driven UI and logic generation, focused on trader decision-making.",
    stack: ["React", "Tailwind", "Vercel"],
  },
];

const proofs = [
  {
    platform: "YouTube · @propfirm_knowledge",
    metric: "AI Video Lab",
    sub: "Thumbnails via Sora AI. Short & long-form via Google Veo and Google Flow. Hooks, captions and descriptions via ChatGPT — refined by CTR and watch time.",
    links: [
      { label: "AI Thumbnail proof", href: "https://youtu.be/QyedLRhBQ1A" },
      { label: "AI UGC Short", href: "https://youtube.com/shorts/yBpaV2C2-Ls" },
      { label: "AI Video", href: "https://youtu.be/iQY3mfmp_Pc" },
    ],
  },
  {
    platform: "Twitter / X · @propfirm_forex",
    metric: "12K+ Followers",
    sub: "Built organically with AI-generated images, videos and captions. Outputs compared and refined against real human feedback — likes, shares, comments.",
    links: [{ label: "View profile", href: "https://x.com/propfirm_forex" }],
  },
  {
    platform: "Discord · Founder & Manager",
    metric: "5,000+ Members",
    sub: "Onboarding, moderation, announcements, engagement. AI-assisted FAQs and educational content refined by community feedback.",
    links: [{ label: "Join community", href: "https://discord.gg/7MRsuqqT3n" }],
  },
  {
    platform: "Live Apps Shipped",
    metric: "5 Projects",
    sub: "End-to-end ownership — idea, build, launch, growth. All shipped with AI-first development workflows.",
    links: [{ label: "propfirmknowledge.store", href: "https://www.propfirmknowledge.store" }],
  },
];

const experience = [
  {
    role: "AI Full-Stack Developer & Growth Marketing Manager",
    co: "SuperFunded",
    meta: "Full-time · Remote",
    date: "Sep 2023 → Present",
    bullets: [
      "Built and maintained AI-assisted full-stack web platforms with React + Supabase.",
      "Led growth and marketing strategy across Twitter/X and multi-platform.",
      "Managed affiliate programs and influencer collaborations with prop firms.",
    ],
  },
  {
    role: "Founder & Full-Stack Product Builder",
    co: "PropFirm Knowledge",
    meta: "Startup · Freelance · Remote",
    date: "Nov 2024 → Present",
    bullets: [
      "Founded and scaled a trading-focused startup community with thousands of active users.",
      "Designed and built prop-firm comparison tools, journals, and calculators.",
      "Owned product end-to-end: idea → development → launch → growth.",
    ],
  },
  {
    role: "Managing Director / Growth & Marketing Lead",
    co: "Clarity Funding Ltd",
    meta: "Full-time",
    date: "Jan 2023 → Nov 2023",
    bullets: [
      "Worked directly with senior leadership on marketing, ops and growth strategy.",
      "Led branding, content and promotional initiatives.",
      "Oversaw daily operations: marketing execution, support, content review.",
    ],
  },
  {
    role: "Frontend Web Developer",
    co: "Business Networks",
    meta: "Freelance · Remote",
    date: "Jun 2023 → Oct 2024",
    bullets: [
      "Built responsive interfaces with React, HTML, CSS, JavaScript.",
      "Converted Figma designs into fully functional websites.",
      "Improved UI/UX performance, accessibility and responsiveness.",
    ],
  },
];

const socials = [
  { label: "Twitter / X", href: "https://x.com/propfirm_forex", Icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-problem-solver-ai-fullstack-lovable-cursor-prompt-engineer-292497244", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com/@propfirm_knowledge", Icon: Youtube },
  { label: "Discord", href: "https://discord.gg/7MRsuqqT3n", Icon: MessageCircle },
  { label: "Portfolio", href: "https://www.propfirmknowledge.store", Icon: Globe },
];

const stats = [
  { n: "12K+", l: "X Followers" },
  { n: "5K+", l: "Discord" },
  { n: "5", l: "Live Apps" },
  { n: "4+", l: "Years Shipping" },
];

const Index = () => {
  useReveal();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="film-grain" />
      <div className="aurora" />
      <CustomCursor />

      {/* NAV — full width */}
      <nav className="sticky top-0 z-40 border-b border-primary/15 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-8 py-3.5">
          <a href="#top" className="font-display text-xl tracking-[0.3em] gradient-text">AKSHAY.AI</a>
          <div className="hidden md:flex items-center gap-7 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-foreground/45">
            <a href="#work" className="hover:text-primary transition">Work</a>
            <a href="#stack" className="hover:text-primary transition">Stack</a>
            <a href="#experience" className="hover:text-primary transition">Experience</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--confirmed)/0.5)] bg-[hsl(var(--confirmed)/0.08)] px-3 py-1 text-[0.6rem] font-semibold uppercase tr[...]
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--confirmed))] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--confirmed))]" />
            </span>
            Open to Work
          </span>
        </div>
      </nav>

      <main id="top" className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-8">
        {/* HERO */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-16 sm:pt-24 pb-12">
          <div className="lg:col-span-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary animate-[fadeUp_0.6s_ease_both] flex items-center gap-2">
              <Sparkles className="h-3 w-3" />
              Prompt Engineer · AI Full-Stack · Content Builder
            </p>

            <h1 className="mt-6 font-display leading-[0.85] tracking-tight animate-[fadeUp_0.7s_0.1s_ease_both]">
              <span className="block text-[18vw] sm:text-[14vw] lg:text-[10.5rem] text-foreground">AKSHAY</span>
              <span className="block text-[10vw] sm:text-[7vw] lg:text-[5.5rem] tracking-[0.04em] gradient-text-tri">
                MUTHYALA.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-foreground/65 animate-[fadeUp_0.7s_0.2s_ease_both]">
              I design prompts and ship full-stack AI products. Cinematic AI videos with{" "}
              <span className="text-foreground">Sora, Google Veo & Flow</span>. Live web apps with{" "}
              <span className="text-foreground">Lovable, Cursor, React & Supabase</span>. Audiences grown to{" "}
              <span className="text-foreground">12K+ on X</span> and{" "}
              <span className="text-foreground">5K+ on Discord</span> — all organic, all measurable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 animate-[fadeUp_0.7s_0.3s_ease_both]">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover-lift"
                style={{ background: "var(--gradient-primary)", boxShadow: "0 10px 40px hsl(271 91% 50% / 0.4)" }}
              >
                View My Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:akshaymuthyala77@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/85 hover:border-pr[...]
              >
                <Mail className="h-4 w-4" />
                Hire Me
              </a>
            </div>
          </div>

          {/* Side card */}
          <aside className="lg:col-span-4 animate-[fadeUp_0.7s_0.35s_ease_both]">
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] to-secondary/[0.04] p-5 backdrop-blur">
              <div
                className="absolute -inset-px rounded-2xl opacity-30 blur-md -z-10"
                style={{ background: "var(--gradient-primary)" }}
              />
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-primary">// Now</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Available for <span className="text-foreground font-medium">remote AI / prompt-engineering roles</span> and freelance AI product builds.
              </p>
              <div className="mt-5 h-px bg-foreground/10" />
              <dl className="mt-4 space-y-3 text-xs">
                <div className="flex justify-between">
                  <dt className="font-mono uppercase tracking-wider text-foreground/40">Based</dt>
                  <dd className="text-foreground/80">Hyderabad · Remote</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-mono uppercase tracking-wider text-foreground/40">Role</dt>
                  <dd className="text-foreground/80">Prompt Engineer · AI Dev</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-mono uppercase tracking-wider text-foreground/40">Stack</dt>
                  <dd className="text-foreground/80">Lovable · Cursor · Supabase</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-mono uppercase tracking-wider text-foreground/40">Email</dt>
                  <dd className="text-foreground/80 truncate max-w-[160px]">akshaymuthyala77@gmail.com</dd>
                </div>
              </dl>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {stats.map((s) => (
                <div key={s.l} className="rounded-xl border border-foreground/10 bg-foreground/[0.02] px-3 py-3 text-center">
                  <div className="font-display text-2xl gradient-text">{s.n}</div>
                  <div className="mt-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-foreground/40">{s.l}</div>
                </div>
              ))}
            </div>
          </aside>
        </header>

        {/* MARQUEE */}
        <div className="reveal -mx-4 sm:-mx-8 border-y border-foreground/8 bg-foreground/[0.015] py-4 overflow-hidden">
          <div className="flex gap-10 whitespace-nowrap animate-[marquee_30s_linear_infinite] font-display text-2xl sm:text-3xl tracking-[0.2em] text-foreground/30">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-10 shrink-0">
                <span>PROMPT ENGINEERING</span><span className="text-primary">✦</span>
                <span>SORA AI</span><span className="text-primary">✦</span>
                <span>GOOGLE VEO</span><span className="text-primary">✦</span>
                <span>LOVABLE AI</span><span className="text-primary">✦</span>
                <span>CURSOR</span><span className="text-primary">✦</span>
                <span>REACT</span><span className="text-primary">✦</span>
                <span>SUPABASE</span><span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* WORK / PROJECTS */}
        <section id="work" className="reveal py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">// Selected Work</p>
              <h2 className="mt-2 font-display text-5xl sm:text-6xl tracking-[0.04em]">SHIPPED PROJECTS</h2>
            </div>
            <p className="max-w-sm text-sm text-foreground/50">
              Full-stack AI products built end-to-end — idea, prompts, code, deploy, growth.
            </p>
          </div>

          <div className="mt-10 grid gap-3">
            {projects.map((p, idx) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid grid-cols-12 items-center gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02] px-5 py-6 transition-all hover:border-primary/40 hover:[...]
              >
                <div className="col-span-1 font-mono text-xs text-foreground/30">{String(idx + 1).padStart(2, "0")}</div>
                <div className="col-span-12 sm:col-span-4">
                  <p className="font-display text-2xl tracking-wide text-foreground group-hover:gradient-text">{p.title}</p>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary/80">{p.tag}</p>
                </div>
                <div className="col-span-12 sm:col-span-5 text-sm leading-relaxed text-foreground/55">{p.desc}</div>
                <div className="col-span-12 sm:col-span-2 flex flex-wrap gap-1.5 sm:justify-end">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md border border-foreground/10 px-2 py-0.5 text-[0.62rem] text-foreground/55">
                      {s}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="absolute top-5 right-5 h-5 w-5 text-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="reveal py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">// Toolchain</p>
              <h2 className="mt-2 font-display text-5xl sm:text-6xl tracking-[0.04em]">THE STACK</h2>
            </div>
            <p className="max-w-sm text-sm text-foreground/50">
              Every tool here is one I use in production — taken straight from my resume, not aspirational.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
            {stack.map((group) => (
              <div key={group.group} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-primary/80">// {group.group}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-lg border border-primary/25 bg-primary/[0.06] px-3 py-1.5 text-xs text-foreground/85 transition hover:-translate-y-0.5 hover:border-primary hover:bg-prima[...]
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROOF */}
        <section className="reveal py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">// Social Proof</p>
              <h2 className="mt-2 font-display text-5xl sm:text-6xl tracking-[0.04em]">REAL RESULTS</h2>
            </div>
            <p className="max-w-sm text-sm text-foreground/50">
              Audiences, communities and content — built organically, refined by real engagement data.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {proofs.map((p) => (
              <div key={p.platform} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 transition hover:border-primary/30 hover:bg-primary/[0.04]">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary">{p.platform}</p>
                <p className="mt-2 font-display text-4xl tracking-wide gradient-text-tri">{p.metric}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/55">{p.sub}</p>
                <div className="mt-4 flex flex-col gap-1.5">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-2 text-xs text-foreground/80 hover:border-primary hov[...]
                    >
                      <span>{l.label}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-primary/70 transition group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="reveal py-20">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">// Work History</p>
              <h2 className="mt-2 font-display text-5xl sm:text-6xl tracking-[0.04em]">EXPERIENCE</h2>
            </div>
          </div>

          <ol className="mt-10 relative space-y-3">
            {experience.map((e) => (
              <li
                key={e.role}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 rounded-r-2xl border border-foreground/10 border-l-2 border-l-primary bg-foreground/[0.02] px-5 py-5 transition hover:bg-primary/[...]
              >
                <div className="md:col-span-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground/45">{e.date}</div>
                <div className="md:col-span-9">
                  <p className="font-display text-xl tracking-wide text-foreground">{e.role}</p>
                  <p className="mt-0.5 text-sm">
                    <span className="gradient-text font-medium">{e.co}</span>{" "}
                    <span className="text-foreground/40">· {e.meta}</span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-foreground/55">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CONTACT */}
        <section id="contact" className="reveal py-20">
          <div
            className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] to-secondary/[0.06] px-6 sm:px-12 py-16 text-center"
            style={{ boxShadow: "0 0 80px hsl(271 91% 45% / 0.25)" }}
          >
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[120%] rounded-full opacity-40 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse, hsl(271 91% 60% / 0.4), transparent 70%)" }}
            />
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-primary">// Let's Build</p>
            <h2 className="mt-3 font-display text-5xl sm:text-7xl tracking-[0.04em] gradient-text-tri">
              LET'S CREATE TOGETHER
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/60">
              Open to full-time remote roles in AI content, prompt engineering and full-stack — plus freelance AI product builds.
            </p>

            <a
              href="mailto:akshaymuthyala77@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-6 py-3.5 font-mono text-sm text-foreground hover:border-primary hover:bg-primar[...]
            >
              <Mail className="h-4 w-4 text-primary" />
              akshaymuthyala77@gmail.com
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.04] px-4 py-2 text-xs text-foreground/65 hover:border-primary/50 hover:text-p[...]
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 py-8 border-t border-foreground/8 font-mono text-[0.65rem] text-foreground/35">
          <span>© 2025 Akshay Muthyala · Hyderabad / Remote</span>
          <span>Built with AI · Powered by Lovable</span>
        </footer>
      </main>
    </div>
  );
};

export default Index;
