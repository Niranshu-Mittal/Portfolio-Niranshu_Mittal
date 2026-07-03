import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const links = [
  ["Home", "hero"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Featured", "featured"],
  ["Startups", "startups"],
  ["Projects", "projects"],
  ["Security", "security"],
  ["Skills", "skills"],
  ["Awards", "awards"],
  ["Contact", "contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: "linear-gradient(90deg,#38BDF8,#3B82F6,#8B5CF6)",
        }}
      />
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all ${
          scrolled ? "w-[min(96%,980px)]" : "w-[min(96%,1100px)]"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_40px_-12px_rgba(56,189,248,0.25)]">
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#3B82F6] grid place-items-center text-[#071A2E] font-bold">
              N
            </span>
            <span className="hidden sm:block text-white/90 tracking-widest text-[0.72rem]">
              NIRANSHU
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-1">
            {links.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="px-3 py-1.5 rounded-full text-[0.78rem] text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="shrink-0 px-4 py-1.5 rounded-full text-[0.78rem] text-white bg-gradient-to-r from-[#38BDF8] to-[#3B82F6] hover:shadow-[0_0_24px_rgba(56,189,248,0.6)] transition-shadow"
          >
            Let's Talk
          </a>
        </div>
      </motion.nav>
    </>
  );
}
