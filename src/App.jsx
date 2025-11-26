/*  FULL App.jsx  */
/*  (Fits your entire corporate technical website)
------------------------------------------------ */

import {
  ShieldCheck,
  Cpu,
  Network,
  Lock,
  FileText,
  PhoneCall,
  ArrowRight,
  Server,
  AlertTriangle,
  CloudLightning,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "technology", label: "Technology" },
  { id: "products", label: "Products" },
  { id: "architecture", label: "Architecture" },
  { id: "compliance", label: "Compliance" },
  { id: "pilot", label: "Pilot Program" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <main className="pt-20">
        <Hero />
        <QuickStats />
        <Technology />
        <Products />
        <Architecture />
        <Compliance />
        <Pilot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand.blue to-brand.neon flex items-center justify-center shadow-soft">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-sm">Swarm Shield Tech</div>
            <div className="text-[11px] text-slate-400">AI Security Infrastructure</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-xs">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-slate-300 hover:text-brand.neon">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:flex items-center bg-brand.blue hover:bg-brand.neon px-3 py-1.5 rounded-xl text-xs text-white font-medium">
          Book a Call <ArrowRight className="h-3 w-3 ml-1" />
        </a>
      </div>
    </header>
  );
}

/* ========== HERO ========== */
function Hero() {
  return (
    <section id="home" className="relative border-b border-slate-800 pb-20 pt-24">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        <div>
          <p className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 mb-3">
            <CloudLightning className="h-3 w-3" /> Multi-Agent AI Security
          </p>

          <h1 className="text-4xl font-semibold mb-4 leading-tight">
            AI-powered <span className="text-brand.neon">swarm security</span> for real-world environments.
          </h1>

          <p className="text-slate-300 text-sm mb-6 max-w-lg">
            Swarm Shield Tech unifies sensors, agents, and human operators into a single, coordinated system for threat detection and response.
          </p>

          <div className="flex gap-3">
            <a href="#pilot" className="bg-brand.blue hover:bg-brand.neon px-4 py-2 rounded-xl text-xs shadow-soft">
              Explore Pilot Program
            </a>
            <a href="#technology" className="px-4 py-2 rounded-xl border border-slate-700 hover:border-brand.neon hover:text-brand.neon text-xs">
              View Architecture
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-soft">
          <HeroSwarmStatus />
        </div>

      </div>
    </section>
  );
}

function HeroSwarmStatus() {
  return (
    <div>
      <div className="text-xs text-slate-400 mb-3">Swarm Operational Status</div>

      <div className="grid grid-cols-2 gap-3">
        <StatusCard icon={Cpu} title="ThreatDetector" desc="Realtime anomaly scan" />
        <StatusCard icon={Network} title="A2A Swarm" desc="Inter-agent mesh" />
        <StatusCard icon={Server} title="Orchestrator" desc="Playbook engine" />
        <StatusCard icon={AlertTriangle} title="Alert Matrix" desc="Event triage" />
      </div>

      <p className="text-[11px] text-slate-500 mt-3">
        Powered by Google Cloud · Supabase · Cloudflare Edge
      </p>
    </div>
  );
}

function StatusCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 flex gap-3">
      <div className="h-8 w-8 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
        <Icon className="h-4 w-4 text-brand.neon" />
      </div>
      <div>
        <div className="font-semibold text-xs">{title}</div>
        <div className="text-[11px] text-slate-400">{desc}</div>
      </div>
    </div>
  );
}

/* --- QUICK STATS --- */
function QuickStats() {
  const stats = [
    ["Cloud Stack", "GCP · Supabase · Cloudflare"],
    ["Security Model", "Zero-trust, RBAC"],
    ["Observability", "Swarm-level telemetry"],
    ["Deployments", "Pilot → District-scale"],
  ];

  return (
    <section className="border-b border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-4">

        {stats.map(([title, desc]) => (
          <div key={title} className="rounded-2xl border border-slate-800 p-4 bg-slate-900/60">
            <div className="text-xs text-slate-200 font-semibold mb-1">{title}</div>
            <div className="text-[11px] text-slate-400">{desc}</div>
          </div>
        ))}

      </div>
    </section>
  );
}

/* ---------------- TECHNOLOGY ---------------- */
function Technology() {
  const items = [
    ["Multi-Agent AI Engine", "Agents exchange context to reduce false negatives."],
    ["Swarm Mesh", "Agents communicate through a secure event bus."],
    ["Zero-Trust", "RBAC + device-scoped identity control."],
    ["Explainable AI", "Outputs include rationale and risk scoring."],
  ];

  return (
    <Section id="technology" title="AI-driven detection, orchestrated response.">
      <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300 mb-8">
        <p>
          Swarm Shield Tech turns distributed devices, sensors, and logs into a coordinated AI swarm.
        </p>
        <p>
          ThreatDetector, ResponseOrchestrator, and A2A Swarm work together to reason across the environment.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 text-[11px] md:text-xs">
        {items.map(([title, desc]) => (
          <Card key={title} title={title} desc={desc} />
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PRODUCTS ---------------- */
function Products() {
  const products = [
    ["ThreatDetector", "Detection Engine", "Multimodal anomaly detection across cameras, logs, and events."],
    ["ResponseOrchestrator", "Response Engine", "AI-generated playbooks and escalation flows."],
    ["A2A Swarm", "Agent Mesh", "Distributed agents reasoning together."],
    ["Swarm Dashboard", "Operations", "Realtime event stream + audit logs."],
  ];

  return (
    <Section id="products" title="A unified suite for AI-assisted security operations.">
      <div className="grid md:grid-cols-2 gap-4">
        {products.map(([name, tag, desc]) => (
          <div key={name} className="rounded-2xl border border-slate-800 p-4 bg-slate-900/70">
            <div className="font-semibold text-xs text-slate-200">{name}</div>
            <div className="text-[10px] text-brand.neon uppercase tracking-wider mb-2">{tag}</div>
            <p className="text-slate-400 text-xs">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- ARCHITECTURE ---------------- */
function Architecture() {
  const columns = [
    ["Sensor Layer", "Cameras, logs, and access systems feed structured signals."],
    ["Swarm Intelligence", "Agents analyze, correlate, and raise multi-signal alerts."],
    ["Response Layer", "Humans stay in control with guided playbooks."],
  ];

  return (
    <Section id="architecture" title="Cloud-native, edge-secured, policy aligned.">
      <div className="grid md:grid-cols-3 gap-4">
        {columns.map(([title, desc]) => (
          <Card key={title} title={title} desc={desc} />
        ))}
      </div>
    </Section>
  );
}

/* ---------------- COMPLIANCE ---------------- */
function Compliance() {
  const items = [
    ["Infrastructure", "Google Cloud, Supabase, Cloudflare security."],
    ["Data Protection", "Encryption in transit and at rest."],
    ["Audit Logging", "Every action recorded for compliance reviews."],
    ["Deployment Options", "Pilot → district → multi-tenant expansion."],
  ];

  return (
    <Section id="compliance" title="Audit-friendly and ready for district review.">
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(([title, desc]) => (
          <Card key={title} title={title} desc={desc} />
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PILOT ---------------- */
function Pilot() {
  return (
    <Section id="pilot" title="Launch a real-world pilot in 30–90 days.">
      <div className="grid md:grid-cols-2 gap-4 text-xs">

        <PilotCard
          title="30-Day Foundation Pilot"
          price="$5,000"
          bullets={[
            "Initial integration",
            "Baseline anomaly detection",
            "Weekly review sessions",
          ]}
        />

        <PilotCard
          title="90-Day Operational Pilot"
          price="$25,000+"
          bullets={[
            "Multi-site rollout",
            "Playbook design",
            "After-action report",
          ]}
        />

      </div>
    </Section>
  );
}

function PilotCard({ title, bullets, price }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <h3 className="text-xs font-semibold mb-2 text-slate-200">{title}</h3>
      <ul className="text-slate-400 text-[11px] space-y-1 mb-3">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
      <div className="text-brand.neon font-semibold">{price}</div>
    </div>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <Section id="contact" title="Request a technical briefing or pilot packet.">
      <div className="grid md:grid-cols-2 gap-8 text-xs">

        <form
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field label="Name">
            <input placeholder="Your name" />
          </Field>
          <Field label="Organization">
            <input placeholder="District, school, agency" />
          </Field>
          <Field label="Email">
            <input type="email" placeholder="you@example.org" />
          </Field>
          <Field label="Message">
            <textarea className="min-h-[80px]" placeholder="What would you like to discuss?" />
          </Field>

          <button className="bg-brand.blue hover:bg-brand.neon px-4 py-2 rounded-xl text-white text-xs">
            Submit Request
          </button>
        </form>

        <div className="text-slate-400 text-[11px] leading-relaxed">
          <p>
            For districts and agencies evaluating Swarm Shield Tech, we offer:
          </p>
          <ul className="mt-2 space-y-1">
            <li>• Architecture overview</li>
            <li>• Pilot scoping & deployment requirements</li>
            <li>• Compliance packet & policy mapping</li>
          </ul>
        </div>

      </div>
    </Section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-slate-800 py-6 text-[11px] text-slate-500">
      <div className="max-w-6xl mx-auto px-4 flex justify-between">

        <div className="flex items-center gap-1">
          <ShieldCheck className="h-3 w-3" />
          © {new Date().getFullYear()} Swarm Shield Tech LLC.
        </div>

        <div className="flex gap-3">
          <a href="https://swarmshieldtech.com" className="hover:text-brand.neon">
            Corporate
          </a>
          <a href="https://swarmshieldhq.cloud" className="hover:text-brand.neon">
            Admin
          </a>
          <a href="https://swarmsentinel.cloud" className="hover:text-brand.neon">
            Sentinel
          </a>
        </div>

      </div>
    </footer>
  );
}

/* ---------------- UTILITY COMPONENTS ---------------- */
function Section({ id, title, children }) {
  return (
    <section id={id} className="border-b border-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <div className="font-semibold text-slate-200 text-xs mb-1">{title}</div>
      <div className="text-[11px] text-slate-400">{desc}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-1 text-[11px] text-slate-300">
      <span>{label}</span>
      {React.cloneElement(children, {
        className:
          "field-input " + (children.props.className || ""),
      })}
    </label>
  );
}
