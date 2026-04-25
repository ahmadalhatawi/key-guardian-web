import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield,
  Bug,
  Cpu,
  Network,
  Eye,
  Fingerprint,
  KeyRound,
  Wifi,
  HardDrive,
  Code2,
  AlertTriangle,
  CheckCircle2,
  Search,
  Lock,
  Activity,
  Database,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { Slide, SlideNumber, SectionLabel } from "@/components/Slide";
import { Navigation, slideList } from "@/components/Navigation";

import coverImg from "@/assets/cover-tech.png";
import diagramImg from "@/assets/keylogger-diagram.png";
import shieldImg from "@/assets/security-shield.png";
import attackerImg from "@/assets/attacker-flow.png";
import architectureImg from "@/assets/keylogger-architecture.png";

export const Route = createFileRoute("/")({
  component: Presentation,
});

const TOTAL = slideList.length;

function Presentation() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
      <Navigation />

      {/* 1. COVER */}
      <Slide id="cover">
        <SlideNumber n={1} total={TOTAL} />
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <SectionLabel>Cybersecurity Research · 2026</SectionLabel>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]"
            >
              Keylogger
              <br />
              <span className="gradient-text">Detection</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-light">
                in Computer Systems
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="glass rounded-xl px-5 py-4">
                <div className="text-[10px] font-mono tracking-widest text-neon mb-1">PREPARED BY</div>
                <div className="text-sm font-semibold">Ahmad Jum'a</div>
                <div className="text-sm font-semibold">Ibraheem Jawabreh</div>
              </div>
              <div className="glass rounded-xl px-5 py-4">
                <div className="text-[10px] font-mono tracking-widest text-neon mb-1">SUPERVISOR</div>
                <div className="text-sm font-semibold">Dr. Ayat Al-Najjar</div>
                <div className="text-xs text-muted-foreground">Faculty of IT</div>
              </div>
              <div className="glass rounded-xl px-5 py-4 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-neon" />
                <div>
                  <div className="text-sm font-semibold">Hebron University</div>
                  <div className="text-xs text-muted-foreground">Hebron, Palestine</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden glass glow-border animate-float">
              <img src={coverImg} alt="Cybersecurity workflow" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* 2. ABSTRACT */}
      <Slide id="abstract">
        <SlideNumber n={2} total={TOTAL} />
        <div className="max-w-5xl">
          <SectionLabel>01 · Abstract</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            Stealing keystrokes <br />
            in <span className="gradient-text">silent mode</span>.
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-10 max-w-4xl">
            Modern life is governed by passwords. As protection grows, so do techniques for
            stealing it. Keyloggers — unprivileged programs running in user-space — silently
            record keystrokes and exfiltrate data, often <span className="text-foreground font-semibold">undetected by traditional anti-virus tools</span>.
            We propose a <span className="text-neon font-semibold">memory-analysis-based detection method</span> that identifies
            both classic and advanced keyloggers without requiring special OS permissions.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Keylogger", "Memory Forensics", "Network Monitoring", "Malware Detection", "Behavior-Based", "Data Exfiltration"].map((k, i) => (
              <motion.span
                key={k}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-full px-4 py-2 text-xs font-mono tracking-wide border border-neon/30 hover:border-neon transition-colors"
              >
                #{k.toLowerCase().replace(/[\s-]/g, "_")}
              </motion.span>
            ))}
          </div>
        </div>
      </Slide>

      {/* 3. INTRODUCTION */}
      <Slide id="introduction">
        <SlideNumber n={3} total={TOTAL} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>02 · Introduction</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Understanding <br />
              the <span className="gradient-text">threat</span>.
            </h2>

            <div className="space-y-5">
              {[
                {
                  icon: Bug,
                  title: "What is malware?",
                  text: "Any code added, modified, or deleted from a software system to intentionally cause harm or destabilize its function.",
                },
                {
                  icon: KeyRound,
                  title: "What is a keylogger?",
                  text: "Malware that tracks the user's typed keystrokes on the keyboard — recording passwords, IDs, and document content.",
                },
                {
                  icon: AlertTriangle,
                  title: "Why is it dangerous?",
                  text: "Runs in stealth mode, often invisible to anti-malware. The user has no real way to detect its presence on the device.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="glass rounded-xl p-5 flex gap-4 hover:border-neon/50 transition-all"
                >
                  <div className="shrink-0 h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-destructive/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden glass">
              <img src={diagramImg} alt="How keyloggers steal data" className="w-full h-auto" />
            </div>
            <div className="mt-4 text-center text-xs font-mono text-muted-foreground tracking-wider">
              FIG.01 · KEYSTROKE INTERCEPTION FLOW
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* 4. METHODOLOGY */}
      <Slide id="methodology">
        <SlideNumber n={4} total={TOTAL} />
        <div>
          <SectionLabel>03 · Methodology</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hybrid <span className="gradient-text">detection</span> approach.
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            Combining memory forensics with network monitoring to catch both stealthy and
            known keyloggers — at the system level and across the wire.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Cpu,
                step: "01",
                title: "Memory Forensics",
                text: "Analyze RAM, active processes, and loaded modules to expose API hooking and kernel-level monitoring invisible to standard tools.",
              },
              {
                icon: Network,
                step: "02",
                title: "Network Monitoring",
                text: "Inspect outgoing traffic for unusual patterns — encrypted bursts to unknown destinations indicate remote exfiltration.",
              },
              {
                icon: Fingerprint,
                step: "03",
                title: "Signature + Behavior",
                text: "Match known patterns AND flag abnormal activity, enabling detection of both classic and zero-day keyloggers.",
              },
            ].map((m, i) => (
              <motion.div
                key={m.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-neon/50 transition-all"
              >
                <div className="absolute top-0 right-0 text-7xl font-bold font-display text-neon/5 group-hover:text-neon/10 transition-colors">
                  {m.step}
                </div>
                <m.icon className="h-10 w-10 text-neon mb-4" />
                <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Flow diagram */}
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {[
                { icon: HardDrive, label: "RAM Capture" },
                { icon: Search, label: "Process Scan" },
                { icon: Activity, label: "Traffic Analysis" },
                { icon: Eye, label: "Behavior Match" },
                { icon: Shield, label: "Detection" },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-4 flex-1 min-w-fit">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-neon/40 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-neon" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-neon/50 hidden md:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* 5. TYPES */}
      <Slide id="types">
        <SlideNumber n={5} total={TOTAL} />
        <div>
          <SectionLabel>04 · Types of Keyloggers</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Three <span className="gradient-text">attack vectors</span>.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                badge: "Most common",
                title: "Software",
                text: "Programs installed silently via malicious downloads, email attachments, or infected websites. Use API hooking, kernel drivers, or form grabbing.",
                bullets: ["API hooking", "Kernel drivers", "Form grabbing", "Remote upload"],
                accent: "from-primary/30 to-primary/0",
              },
              {
                icon: HardDrive,
                badge: "Hard to detect",
                title: "Hardware",
                text: "Physical devices placed between keyboard and PC, or embedded inside. Capture at the hardware level — invisible to anti-malware software.",
                bullets: ["Physical access", "Tiny memory chips", "No OS footprint", "Manual retrieval"],
                accent: "from-accent/30 to-accent/0",
              },
              {
                icon: Wifi,
                badge: "Remote capable",
                title: "Wireless",
                text: "Intercept signals between wireless keyboards and the host system, exploiting weak protocol encryption to capture keystrokes from a distance.",
                bullets: ["RF interception", "Protocol exploits", "No physical access", "Remote sniffing"],
                accent: "from-destructive/30 to-destructive/0",
              },
            ].map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${t.accent} blur-3xl`} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-14 w-14 rounded-xl glass border-neon/40 flex items-center justify-center">
                      <t.icon className="h-7 w-7 text-neon" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-neon glass rounded-full px-2 py-1">
                      {t.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.text}</p>
                  <ul className="space-y-2">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs font-mono">
                        <span className="h-1 w-1 rounded-full bg-neon" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Slide>

      {/* 6. RESULTS */}
      <Slide id="results">
        <SlideNumber n={6} total={TOTAL} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>05 · Results</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Findings & <span className="gradient-text">efficacy</span>.
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: "98%", label: "Software keyloggers detected" },
                { value: "100%", label: "API-hook detection" },
                { value: "2", label: "OS tested (Linux + Win)" },
                { value: "0", label: "Special permissions needed" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5"
                >
                  <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <ul className="space-y-3">
              {[
                "Hybrid signature + behavior analysis caught both known and stealthy keyloggers",
                "Network monitoring flagged encrypted exfiltration to unknown destinations",
                "Hardware keyloggers confirmed harder to detect — require physical inspection",
                "Wireless protocol vulnerabilities identified as critical capture vector",
              ].map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-neon shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{r}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-destructive/30 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden glass">
              <img src={attackerImg} alt="Attacker credential flow" className="w-full h-auto" />
            </div>
            <div className="mt-4 text-center text-xs font-mono text-muted-foreground tracking-wider">
              FIG.02 · CREDENTIAL EXFILTRATION CHAIN
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* 7. CONCLUSION */}
      <Slide id="conclusion">
        <SlideNumber n={7} total={TOTAL} />
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <SectionLabel>06 · Conclusion</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Detection is <br />
              <span className="gradient-text">non-negotiable</span>.
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              By integrating memory forensics with network monitoring, we built a robust
              framework capable of detecting sophisticated keyloggers across software,
              hardware, and wireless implementations — without elevated permissions and
              accessible to regular users.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Lock, label: "Privacy" },
                { icon: Database, label: "Integrity" },
                { icon: Shield, label: "Trust" },
              ].map((p) => (
                <div key={p.label} className="glass rounded-xl p-4 text-center hover:border-neon/50 transition-colors">
                  <p.icon className="h-7 w-7 text-neon mx-auto mb-2" />
                  <div className="text-sm font-semibold">{p.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute -inset-10 bg-primary/30 blur-3xl rounded-full animate-pulse-glow" />
            <div className="relative rounded-2xl overflow-hidden glass animate-float">
              <img src={shieldImg} alt="Cyber shield protection" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* 8. REFERENCES */}
      <Slide id="references">
        <SlideNumber n={8} total={TOTAL} />
        <div>
          <SectionLabel>07 · References</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Further <span className="gradient-text">reading</span>.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                num: "01",
                title: "Advanced Keylogger for Ethical Hacking",
                author: "Sarita Yadav et al.",
                source: "ResearchGate",
              },
              {
                num: "02",
                title: "Keylogger Detection using Memory Forensic and Network Monitoring",
                author: "Mohiuddin Shoikot et al.",
                source: "ResearchGate",
              },
              {
                num: "03",
                title: "Memory Forensic Analysis Techniques",
                author: "Shoikot et al. · Companion paper",
                source: "ResearchGate",
              },
              {
                num: "04",
                title: "Analysis of Keyloggers in Cybersecurity",
                author: "Academic Repository",
                source: "Cloudfront Library",
              },
            ].map((r, i) => (
              <motion.div
                key={r.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 flex gap-4 hover:border-neon/50 transition-all"
              >
                <div className="font-mono text-2xl text-neon font-bold">{r.num}</div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 leading-snug">{r.title}</h3>
                  <p className="text-xs text-muted-foreground">{r.author}</p>
                  <p className="text-[10px] font-mono text-neon/70 mt-1 tracking-wider uppercase">{r.source}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono tracking-widest text-neon mb-2">END OF PRESENTATION</div>
              <div className="text-sm text-muted-foreground">
                Ahmad Jum'a · Ibraheem Jawabreh · Hebron University · 2026
              </div>
            </div>
            <button
              onClick={() => document.getElementById("cover")?.scrollIntoView({ behavior: "smooth" })}
              className="glass rounded-full px-6 py-3 text-sm font-semibold hover:border-neon transition-all hover:glow-border flex items-center gap-2"
            >
              <span>Back to start</span>
              <ArrowRight className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </div>

          {/* hidden but used to keep import alive for future use */}
          <img src={architectureImg} alt="" className="hidden" />
        </div>
      </Slide>
    </main>
  );
}
