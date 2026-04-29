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
import teamAhmad from "@/assets/team-ahmad.png";
import teamIbraheem from "@/assets/team-ibraheem.png";
import teamSupervisor from "@/assets/team-supervisor.png";

export const Route = createFileRoute("/")({
  component: Presentation,
});

const TOTAL = slideList.length;

function Presentation() {
  return (
    <main id="slides-container" className="snap-y snap-mandatory h-screen overflow-hidden scrollbar-hide" tabIndex={0}>
      <Navigation />

      {/* 1. TEAM (opening) */}
      <Slide id="team">
        <SlideNumber n={1} total={TOTAL} />
        <div>
          <SectionLabel>00 · Team</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Our <span className="gradient-text">team</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Hebron University · Faculty of IT · 2026
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { name: "Ahmad Jum'a", role: "Developer", img: teamAhmad },
              { name: "Ibraheem Jawabreh", role: "Developer", img: teamIbraheem },
            ].map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                {/* animated background blobs */}
                <motion.div
                  aria-hidden
                  className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
                  animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  aria-hidden
                  className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
                  animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="relative mb-5">
                  {/* rotating neon ring */}
                  <motion.div
                    aria-hidden
                    className="absolute -inset-5 rounded-full border border-neon/30"
                    style={{ borderStyle: "dashed" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    aria-hidden
                    className="absolute -inset-9 rounded-full border border-accent/20"
                    style={{ borderStyle: "dotted" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  />
                  {/* glow */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl rounded-full animate-pulse-glow" />
                  <div className="relative h-40 w-40 rounded-full overflow-hidden glow-border ring-2 ring-neon/40">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1 relative">{m.name}</h3>
                <div className="text-[10px] font-mono tracking-[0.3em] text-neon relative">{m.role}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 flex items-center gap-6 relative overflow-hidden"
          >
            <motion.div
              aria-hidden
              className="absolute inset-y-0 -left-20 w-60 bg-accent/15 blur-3xl"
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative shrink-0">
              <motion.div
                aria-hidden
                className="absolute -inset-4 rounded-full border border-accent/40"
                style={{ borderStyle: "dashed" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -inset-2 bg-accent/30 blur-xl rounded-full animate-pulse-glow" />
              <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-accent/50">
                <img src={teamSupervisor} alt="Dr. Ayat Al-Najjar" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="h-4 w-4 text-neon" />
                <span className="text-[10px] font-mono tracking-[0.3em] text-neon">SUPERVISOR</span>
              </div>
              <h3 className="text-xl font-bold">Dr. Ayat Al-Najjar</h3>
              <p className="text-sm text-muted-foreground">Hebron University · Faculty of IT</p>
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* 2. COVER */}
      <Slide id="cover">
        <SlideNumber n={2} total={TOTAL} />
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

      {/* 2. WHAT IS A KEYLOGGER */}
      <Slide id="definition">
        <SlideNumber n={2} total={TOTAL} />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>01 · Definition</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              What is a <br />
              <span className="gradient-text">Keylogger?</span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              A <span className="text-neon font-semibold">Keylogger</span> is a small program
              (or a small device) that <span className="text-foreground font-semibold">records every key</span> you
              press on the keyboard.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
              It works in <span className="text-foreground font-semibold">silent mode</span> — you don't see it.
              It can save your <span className="text-neon">passwords</span>, messages, emails, and bank
              numbers, then send them to an attacker.
            </p>

            <div className="glass rounded-xl p-5 border-l-4 border-destructive flex gap-4 items-start">
              <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Simple idea</div>
                <div className="text-sm text-muted-foreground">
                  You type → the keylogger listens → the attacker reads everything.
                </div>
              </div>
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
              <img src={diagramImg} alt="What is a keylogger" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* 3. HOW IT WORKS */}
      <Slide id="how">
        <SlideNumber n={3} total={TOTAL} />
        <div>
          <SectionLabel>02 · How it works</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How does a <span className="gradient-text">keylogger</span> work?
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12 text-lg">
            It follows 4 easy steps to steal your information.
          </p>

          <div className="grid md:grid-cols-4 gap-5 mb-10">
            {[
              { icon: Bug, step: "01", title: "Enters the computer", text: "Through a bad link, a free game, or an email file." },
              { icon: Eye, step: "02", title: "Hides itself", text: "Runs in the background. The user can't see it working." },
              { icon: KeyRound, step: "03", title: "Records keys", text: "Saves every key you press: letters, numbers, passwords." },
              { icon: Network, step: "04", title: "Sends to attacker", text: "Sends the saved file over the internet to the hacker." },
            ].map((m, i) => (
              <motion.div
                key={m.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-neon/50 transition-all"
              >
                <div className="absolute top-0 right-0 text-7xl font-bold font-display text-neon/5 group-hover:text-neon/10 transition-colors">
                  {m.step}
                </div>
                <m.icon className="h-10 w-10 text-neon mb-4 relative" />
                <h3 className="text-lg font-bold mb-2 relative">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative">{m.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {[
                { icon: HardDrive, label: "You type" },
                { icon: Search, label: "Keylogger sees" },
                { icon: Activity, label: "Saves keys" },
                { icon: Network, label: "Sends data" },
                { icon: AlertTriangle, label: "Attacker gets it" },
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

      {/* 4. TYPES */}
      <Slide id="types">
        <SlideNumber n={4} total={TOTAL} />
        <div>
          <SectionLabel>03 · Types</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Types of <span className="gradient-text">Keyloggers</span>.
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-12 text-lg">
            There are 3 main types. Each one steals keys in a different way.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                badge: "Most common",
                title: "Software",
                text: "A program that comes from the internet — from a bad file, a game, or an email.",
                bullets: ["Comes from internet", "Hides as a normal app", "Easy to spread", "Sends data online"],
                accent: "from-primary/30 to-primary/0",
              },
              {
                icon: HardDrive,
                badge: "Hard to detect",
                title: "Hardware",
                text: "A small device put between the keyboard and the computer. It saves keys inside it.",
                bullets: ["Real small device", "Plugged in by hand", "Anti-virus can't see it", "Found by checking ports"],
                accent: "from-accent/30 to-accent/0",
              },
              {
                icon: Wifi,
                badge: "Works from far",
                title: "Wireless",
                text: "Listens to wireless keyboards from far away and reads the signals in the air.",
                bullets: ["No need to touch PC", "Catches radio signals", "Works from a distance", "Targets weak keyboards"],
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

      {/* 5. TEAM */}
      <Slide id="team">
        <SlideNumber n={5} total={TOTAL} />
        <div>
          <SectionLabel>04 · Team</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Our <span className="gradient-text">team</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Hebron University · Faculty of IT · 2026
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { name: "Ahmad Jum'a", role: "Developer", img: teamAhmad },
              { name: "Ibraheem Jawabreh", role: "Developer", img: teamIbraheem },
            ].map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative mb-5">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl rounded-full" />
                  <div className="relative h-40 w-40 rounded-full overflow-hidden glow-border ring-2 ring-neon/40">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{m.name}</h3>
                <div className="text-[10px] font-mono tracking-[0.3em] text-neon">{m.role}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 flex items-center gap-6"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-2 bg-accent/30 blur-xl rounded-full" />
              <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-accent/50">
                <img src={teamSupervisor} alt="Dr. Ayat Al-Najjar" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="h-4 w-4 text-neon" />
                <span className="text-[10px] font-mono tracking-[0.3em] text-neon">SUPERVISOR</span>
              </div>
              <h3 className="text-xl font-bold">Dr. Ayat Al-Najjar</h3>
              <p className="text-sm text-muted-foreground">Hebron University · Faculty of IT</p>
            </div>
          </motion.div>
        </div>
      </Slide>

      {/* 6. PRACTICAL TRANSITION */}
      <Slide id="demo">
        <SlideNumber n={6} total={TOTAL} />
        <div className="text-center max-w-4xl mx-auto">
          <SectionLabel>04 · Next step</SectionLabel>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-flex mb-10"
          >
            <div className="absolute -inset-10 bg-primary/40 blur-3xl rounded-full animate-pulse-glow" />
            <div className="relative h-32 w-32 rounded-3xl glass glow-border flex items-center justify-center animate-float">
              <Cpu className="h-16 w-16 text-neon" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Now let's go to <br />
            the <span className="gradient-text">practical part</span>.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We will show you a real keylogger working live, and how we can detect it
            on a real computer.
          </p>

          <div className="flex items-center justify-center gap-3 text-neon font-mono text-sm tracking-widest">
            <div className="h-px w-10 bg-neon" />
            <span>LIVE DEMO</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* keep imports alive */}
          <img src={shieldImg} alt="" className="hidden" />
          <img src={attackerImg} alt="" className="hidden" />
          <img src={architectureImg} alt="" className="hidden" />
        </div>
      </Slide>
    </main>
  );
}
