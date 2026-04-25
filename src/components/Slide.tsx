import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function Slide({ children, id, className = "" }: SlideProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full snap-start flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SlideNumber({ n, total }: { n: number; total: number }) {
  return (
    <div className="absolute top-8 right-8 md:top-12 md:right-16 font-mono text-xs tracking-widest text-muted-foreground">
      <span className="text-neon">{String(n).padStart(2, "0")}</span>
      <span className="mx-2 opacity-50">/</span>
      <span>{String(total).padStart(2, "0")}</span>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <div className="h-px w-10 bg-neon" />
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-neon">{children}</span>
    </div>
  );
}
