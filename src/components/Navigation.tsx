import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  { id: "cover", label: "Cover" },
  { id: "definition", label: "What is it?" },
  { id: "how", label: "How it works" },
  { id: "types", label: "Types" },
  { id: "demo", label: "Live Demo" },
];

export function Navigation() {
  const [active, setActive] = useState("cover");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 },
    );
    slides.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const activeIndex = slides.findIndex((s) => s.id === active);
  const progress = ((activeIndex + 1) / slides.length) * 100;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-secondary/40">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Top brand */}
      <div className="fixed top-4 left-6 md:left-12 z-40 flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg glass flex items-center justify-center glow-border">
          <div className="h-2 w-2 rounded-full bg-neon animate-pulse-glow" />
        </div>
        <div className="hidden md:block">
          <div className="text-xs font-mono tracking-widest text-neon">KEYLOGGER.DETECT</div>
          <div className="text-[10px] text-muted-foreground">Hebron University · 2026</div>
        </div>
      </div>

      {/* Side dot navigation (desktop) */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(s.id)}
            className="group flex items-center gap-3"
            aria-label={s.label}
          >
            <span
              className={`text-xs font-mono transition-all ${
                active === s.id ? "text-neon opacity-100" : "opacity-0 group-hover:opacity-60"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all ${
                active === s.id
                  ? "h-3 w-3 bg-neon glow-border"
                  : "h-2 w-2 bg-muted-foreground/40 group-hover:bg-neon/60"
              }`}
            />
            <span className="font-mono text-[10px] text-muted-foreground w-4 text-right">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-50 lg:hidden glass rounded-lg p-3"
        aria-label="Menu"
      >
        <div className="space-y-1.5">
          <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </div>
      </button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl flex items-center justify-center"
        >
          <ul className="space-y-4 text-center">
            {slides.map((s, i) => (
              <li key={s.id}>
                <button
                  onClick={() => goTo(s.id)}
                  className={`text-2xl font-display font-semibold ${
                    active === s.id ? "text-neon" : "text-muted-foreground"
                  }`}
                >
                  <span className="font-mono text-sm mr-3 opacity-50">{String(i + 1).padStart(2, "0")}</span>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Bottom hint */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 text-[10px] font-mono tracking-widest text-muted-foreground hidden md:block">
        SCROLL · {String(activeIndex + 1).padStart(2, "0")} OF {String(slides.length).padStart(2, "0")}
      </div>
    </>
  );
}

export const slideList = slides;
