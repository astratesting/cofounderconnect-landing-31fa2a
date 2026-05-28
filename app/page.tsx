const features = [
  {
    icon: "⚡",
    title: "Real-Time Matching",
    description:
      "CoFounderConnect scans founder intent, skill gaps, industry focus, and build velocity, then sends instant matches when a strong partner appears.",
  },
  {
    icon: "🔗",
    title: "Live URL Verification",
    description:
      "Validate founder profiles with live domain, LinkedIn, and GitHub checks so every introduction starts with stronger trust signals.",
  },
  {
    icon: "🛡️",
    title: "Secure Pitch Deck Sharing",
    description:
      "Share decks with controlled access, founder-only viewing, and annotation tools built for fast diligence without messy email threads.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Profile",
    description:
      "Tell CoFounderConnect what you are building, what you need, how you work, and which proof links verify your founder identity.",
  },
  {
    number: "02",
    title: "Get Matched",
    description:
      "Receive real-time matches with technical, commercial, and availability fit scores before you spend hours on discovery calls.",
  },
  {
    number: "03",
    title: "Start Building",
    description:
      "Open a secure collaboration room, review pitch materials, annotate assumptions, and decide whether to build together.",
  },
];

const stats = [
  ["500+", "Founders on Waitlist"],
  ["92%", "Match Satisfaction"],
  ["3x", "Faster Than Networking"],
];

function WaitlistForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`mx-auto flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/8 p-2 shadow-glow backdrop-blur md:flex-row ${compact ? "md:max-w-2xl" : ""}`}>
      <label htmlFor={compact ? "final-email" : "hero-email"} className="sr-only">
        Email address
      </label>
      <input
        id={compact ? "final-email" : "hero-email"}
        type="email"
        required
        placeholder="founder@startup.com"
        className="min-h-14 flex-1 rounded-xl border border-white/10 bg-slate-950/70 px-5 text-base text-white outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-950"
      />
      <button className="min-h-14 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 px-7 font-extrabold text-slate-950 transition hover:scale-[1.02] hover:shadow-teal" type="submit">
        Join the Waitlist
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="noise min-h-screen overflow-hidden bg-midnight text-white">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="fixed left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/25 blur-[120px]" />
      <div className="fixed bottom-0 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-[110px]" />

      <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="group flex items-center gap-3 font-extrabold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-teal-400 text-slate-950 shadow-glow">CC</span>
            <span className="text-lg">CoFounderConnect</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold text-slate-300 md:flex">
            <a className="transition hover:text-sky-300" href="#features">Features</a>
            <a className="transition hover:text-sky-300" href="#how-it-works">How It Works</a>
            <a className="rounded-full border border-sky-400/40 px-4 py-2 text-sky-200 transition hover:border-teal-300 hover:text-teal-200" href="#waitlist">Join Waitlist</a>
          </div>
        </div>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.08fr_.92fr] md:px-8 md:py-28">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-100">
            <span className="h-2 w-2 rounded-full bg-teal-300 shadow-teal" />
            Built for solo founders ready to find their opposite half
          </div>
          <h1 className="font-display text-6xl font-bold leading-[0.9] tracking-tight text-white md:text-8xl">
            Stop Networking.
            <span className="block bg-gradient-to-r from-sky-300 via-white to-teal-200 bg-clip-text text-transparent">Start Building.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-2xl font-extrabold text-sky-100 md:text-3xl">
            Real-Time Co-Founder Matching That Works.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            CoFounderConnect matches technical founders, non-technical founders, career switchers, serial entrepreneurs, and student builders by verified traction, complementary skills, and startup urgency.
          </p>
          <div className="mt-9">
            <WaitlistForm />
            <p className="mt-3 text-sm text-slate-400">Private beta invites roll out by founder fit, not follower count.</p>
          </div>
        </div>

        <div className="reveal relative min-h-[520px]" style={{ animationDelay: "120ms" }}>
          <div className="absolute left-4 top-4 h-72 w-72 rounded-[3rem] bg-sky-500/20 blur-3xl" />
          <div className="card-border absolute right-0 top-8 w-[86%] rounded-[2rem] bg-slate-950/80 p-5 shadow-glow backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-teal-200">Match found</p>
                <h3 className="mt-1 text-xl font-extrabold">AI infra founder + GTM operator</h3>
              </div>
              <span className="rounded-full bg-teal-400/15 px-3 py-1 text-sm font-extrabold text-teal-200">94% fit</span>
            </div>
            <div className="mt-5 grid gap-3">
              {[
                "GitHub verified: production LLM tooling",
                "LinkedIn verified: 2 B2B SaaS exits",
                "Deck shared: annotated go-to-market risks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-400/20 text-sky-200">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card-border absolute bottom-10 left-0 w-[72%] rounded-[2rem] bg-slate-900/90 p-5 shadow-teal backdrop-blur animate-float">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-200">Live room</p>
            <h3 className="mt-2 text-2xl font-extrabold">Pitch deck discussion</h3>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-white/[0.06] p-4">
                <p className="text-sm text-slate-300">“Can we test acquisition through founder-led demos before paid?”</p>
              </div>
              <div className="h-2 origin-left rounded-full bg-gradient-to-r from-sky-400 to-teal-300 animate-pulseLine" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-teal-200">Why founders switch</p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl">Less coffee chat. More conviction.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="card-border reveal rounded-[2rem] bg-white/[0.055] p-7 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.08]" style={{ animationDelay: `${index * 110}ms` }}>
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-3xl shadow-glow">{feature.icon}</div>
              <h3 className="text-2xl font-extrabold">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-6 shadow-glow md:p-10">
          <div className="grid gap-8 md:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-sky-200">How it works</p>
              <h2 className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl">Three steps from solo to co-founder ready.</h2>
            </div>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 md:grid-cols-[90px_1fr]">
                  <span className="font-display text-5xl font-bold text-sky-300">{step.number}</span>
                  <div>
                    <h3 className="text-2xl font-extrabold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/15 to-teal-400/10 p-8 text-center">
              <div className="font-display text-6xl font-bold text-white">{value}</div>
              <p className="mt-2 font-bold text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-6xl px-5 py-24 text-center md:px-8">
        <div className="card-border rounded-[3rem] bg-slate-950/75 px-6 py-14 shadow-teal backdrop-blur md:px-12 md:py-20">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-teal-200">Private beta</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-bold leading-tight md:text-7xl">Find founder-market-partner fit before your next pivot.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join CoFounderConnect to meet verified builders with matching ambition, complementary skills, and startup-ready momentum.
          </p>
          <div className="mt-9">
            <WaitlistForm compact />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400 md:px-8">
        <p>© 2026 CoFounderConnect. Real-time co-founder matching for serious builders.</p>
      </footer>
    </main>
  );
}
