import { motion } from "motion/react";
import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mb-14 max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#38BDF8]" />
        <span className="text-[0.7rem] tracking-[0.35em] text-[#38BDF8]">
          {eyebrow}
        </span>
      </div>
      <h2
        className="text-white tracking-tight leading-tight"
        style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 700 }}
      >
        {title}
      </h2>
      {desc && (
        <p className="text-[#A5B4C3] mt-4 max-w-2xl leading-relaxed">{desc}</p>
      )}
    </motion.div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#38BDF8]/30 hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.35)] transition-all duration-500 group overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.10), transparent 40%)",
        }}
      />
      {children}
    </div>
  );
}
