import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import portrait from "../../imports/Gemini_Generated_Image_czzinxczzinxczzi.png";

const roles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Generative AI Developer",
  "RAG Systems Engineer",
  "Cyber Security Enthusiast",
  "Startup Founder",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) setTimeout(() => setDeleting(true), 1400);
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((i + 1) % roles.length);
          }
        }
      },
      deleting ? 35 : 65
    );
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] bg-clip-text text-transparent">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-[#38BDF8] ml-1 align-middle animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[0.72rem] tracking-widest text-white/70">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-white tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.6rem)", fontWeight: 700 }}
          >
            NIRANSHU
            <br />
            <span className="bg-gradient-to-br from-white via-[#A5B4C3] to-[#38BDF8] bg-clip-text text-transparent">
              MITTAL
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 h-8"
            style={{ fontSize: "1.35rem" }}
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 max-w-xl text-[#A5B4C3] leading-relaxed"
          >
            Building intelligent AI systems that solve real-world industrial,
            cybersecurity and educational challenges through Machine Learning,
            Retrieval-Augmented Generation, Cloud Technologies and Modern
            Software Engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-white bg-gradient-to-r from-[#38BDF8] to-[#3B82F6] hover:shadow-[0_0_40px_rgba(56,189,248,0.55)] transition-all"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white/90 border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="https://github.com/Niranshu-Mittal"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 grid place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-[#38BDF8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/niranshu-mittal/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 grid place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-[#38BDF8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="#contact"
              aria-label="Contact"
              className="w-11 h-11 grid place-items-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-[#38BDF8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all"
            >
              <Mail size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 grid grid-cols-3 max-w-md gap-6"
          >
            {[
              ["8.66", "CGPA"],
              ["₹1.3L+", "SSIP Grant"],
              ["10+", "Projects"],
            ].map(([v, l]) => (
              <div key={l}>
                <div
                  className="bg-gradient-to-r from-white to-[#38BDF8] bg-clip-text text-transparent"
                  style={{ fontSize: "1.75rem", fontWeight: 700 }}
                >
                  {v}
                </div>
                <div className="text-[0.72rem] tracking-widest text-white/50 mt-1">
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
            <motion.div
              className="absolute inset-[-30px] rounded-full border border-[#38BDF8]/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: "dashed" }}
            />
            <motion.div
              className="absolute inset-[-60px] rounded-full border border-[#3B82F6]/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[-90px] rounded-full border border-white/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[-30px] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8]" />
            </motion.div>
            <motion.div
              className="absolute inset-[-60px] rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#8B5CF6] shadow-[0_0_20px_#8B5CF6]" />
            </motion.div>

            <div
              className="absolute inset-0 rounded-full p-[3px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #38BDF8, #3B82F6, #8B5CF6, #38BDF8)",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0B1F3A] relative">
                <ImageWithFallback
                  src={portrait}
                  alt="Niranshu Mittal"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(7,26,46,0.55) 100%)",
                  }}
                />
              </div>
            </div>

            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow:
                  "0 0 80px 10px rgba(56,189,248,0.25), inset 0 0 60px rgba(59,130,246,0.15)",
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[0.65rem] tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#38BDF8] to-transparent"
        />
      </div>
    </section>
  );
}
