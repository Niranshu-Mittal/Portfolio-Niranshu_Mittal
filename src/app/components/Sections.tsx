import { motion } from "motion/react";
import {
  Brain,
  Rocket,
  Shield,
  Code2,
  Award,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Cpu,
  Database,
  FileText,
  Search,
  Sparkles,
  Zap,
  Lock,
  Eye,
  Binary,
  Bitcoin,
  Bug,
  FileSearch,
} from "lucide-react";
import { SectionHeader, GlassCard } from "./Section";

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="01 — WHO I AM" title="Engineering intelligence into products." />
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-[#A5B4C3] leading-relaxed"
          >
            <p>
              I am an <span className="text-white">Artificial Intelligence &amp; Machine Learning Engineer</span>{" "}
              passionate about building scalable AI systems, enterprise software and innovative startups.
            </p>
            <p>
              My journey spans government cyber investigations, enterprise AI deployments, Retrieval-Augmented
              Generation systems, industrial automation and startup innovation.
            </p>
            <p>
              I enjoy transforming complex problems into practical software solutions using AI, cloud technologies and
              modern software engineering.
            </p>
            <p className="text-white/90">
              Instead of simply writing code, I focus on building products that create measurable impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Brain, label: "AI / ML", value: "Production RAG" },
              { icon: Rocket, label: "Founder", value: "3 Ventures" },
              { icon: Shield, label: "Cyber", value: "Gov Investigations" },
              { icon: Code2, label: "Full-Stack", value: "Flutter · React" },
            ].map(({ icon: Icon, label, value }) => (
              <GlassCard key={label} className="p-5">
                <Icon className="text-[#38BDF8]" size={22} />
                <div className="mt-4 text-[0.7rem] tracking-widest text-white/50">{label}</div>
                <div className="text-white mt-1">{value}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    role: "AI Engineer Intern",
    org: "Vishakha Group",
    tags: ["Enterprise Automation", "Gate Entry Automation", "Yard Management", "Production RAG"],
    body: "Built a production-ready RAG SOP Retrieval System using Mistral LLM, LangChain, FAISS, FastAPI and a vector database — delivering enterprise-grade AI for industrial workflows.",
  },
  {
    role: "Cyber Investigations Consultant",
    org: "State Cyber Crime Cell, Gujarat",
    tags: ["Digital Forensics", "Dark Web Intel", "Cryptocurrency", "Threat Intelligence"],
    body: "Contributed to high-sensitivity investigations spanning digital forensics, dark web intelligence, drug and arms trafficking probes, cryptocurrency analysis and Telegram intelligence.",
  },
  {
    role: "Cyber Security Intern",
    org: "Coincent",
    tags: ["Cyber Security", "Ethical Hacking"],
    body: "Hands-on offensive and defensive security training — reconnaissance, exploitation, hardening.",
  },
  {
    role: "AI Intern",
    org: "Acmegrade",
    tags: ["Machine Learning", "Deep Learning", "Computer Vision"],
    body: "Applied ML, DL and CV techniques across guided real-world case studies.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="02 — EXPERIENCE" title="A timeline of impact." />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#38BDF8]/30 to-transparent" />
          <div className="space-y-10">
            {experiences.map((e, i) => (
              <motion.div
                key={e.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex md:grid md:grid-cols-2 gap-6 items-start ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-[#38BDF8] shadow-[0_0_20px_#38BDF8] z-10" />
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:[direction:ltr]"}`}>
                  <GlassCard className="p-6">
                    <div className="text-[0.7rem] tracking-widest text-[#38BDF8]">{e.org}</div>
                    <div className="text-white mt-1" style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                      {e.role}
                    </div>
                    <p className="text-[#A5B4C3] mt-3 leading-relaxed">{e.body}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-[0.7rem] text-white/70 border border-white/10 bg-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const flow = [
  { icon: FileText, label: "PDF" },
  { icon: Binary, label: "Chunking" },
  { icon: Sparkles, label: "Embeddings" },
  { icon: Database, label: "Vector DB" },
  { icon: Search, label: "Retriever" },
  { icon: Brain, label: "Mistral LLM" },
  { icon: Zap, label: "Response" },
];

export function Featured() {
  return (
    <section id="featured" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="03 — FEATURED PROJECT"
          title="RAG SOP Retrieval System"
          desc="A production-grade Retrieval-Augmented Generation pipeline built for enterprise SOP intelligence — local LLMs, vector search, prompt engineering and API-first architecture."
        />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
          <GlassCard className="p-8 lg:p-10">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Enterprise AI", "FastAPI", "LangChain", "FAISS", "Vector Search", "Prompt Engineering", "Local LLM"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-[0.72rem] text-white/80 border border-[#38BDF8]/30 bg-[#38BDF8]/5"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
            <div className="space-y-3">
              {flow.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-[#38BDF8]/20 to-[#3B82F6]/10 border border-[#38BDF8]/20">
                    <Icon size={16} className="text-[#38BDF8]" />
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <span className="text-white/90">{label}</span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[#38BDF8]/40 to-transparent" />
                  </div>
                  {i < flow.length - 1 && (
                    <span className="text-[#38BDF8]/40 text-xs -ml-14">↓</span>
                  )}
                </motion.div>
              ))}
            </div>
          </GlassCard>

          <div className="space-y-4">
            {[
              ["Local Inference", "Mistral runs privately for compliance-safe deployments."],
              ["Semantic Retrieval", "FAISS + high-quality embeddings for accurate SOP lookup."],
              ["API-First", "FastAPI service layer — production-ready and scalable."],
              ["Enterprise Ready", "Integrates with existing enterprise document workflows."],
            ].map(([t, d]) => (
              <GlassCard key={t} className="p-6">
                <div className="flex items-start gap-3">
                  <Cpu className="text-[#38BDF8] shrink-0 mt-1" size={18} />
                  <div>
                    <div className="text-white" style={{ fontWeight: 600 }}>
                      {t}
                    </div>
                    <div className="text-[#A5B4C3] mt-1 text-sm leading-relaxed">{d}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const startups = [
  {
    name: "Agulous",
    status: "Ongoing · Founder",
    featured: true,
    desc: "A cloud-native digital education platform designed to replace traditional notebooks through AI-powered digital writing, cloud synchronization, real-time classroom collaboration and smart examination workflows.",
    tech: ["Flutter", "Azure", "Firebase", "Cloud"],
    wins: ["₹133,600 SSIP Grant", "Microsoft Founders Hub", "Azure Credits"],
  },
  {
    name: "GaragePilot",
    status: "Ongoing",
    desc: "On-demand roadside mechanic assistance platform connecting drivers with nearby mechanics while also offering home vehicle servicing and maintenance.",
    tech: ["Flutter", "NodeJS", "MongoDB", "Firebase", "Google Maps"],
  },
  {
    name: "GoWith",
    status: "Early Venture",
    desc: "Community ride-sharing platform enabling intercity drivers to share empty seats with passengers — an early entrepreneurial venture that shaped my product intuition.",
    tech: ["Community", "Ride-Sharing", "Product Thinking"],
  },
];

export function Startups() {
  return (
    <section id="startups" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="04 — VENTURES" title="Startups I've built." />
        <div className="grid lg:grid-cols-2 gap-6">
          {startups.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={s.featured ? "lg:col-span-2" : ""}
            >
              <GlassCard className="p-7 lg:p-9 h-full">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div>
                    <div className="text-[0.7rem] tracking-widest text-[#38BDF8]">{s.status}</div>
                    <div
                      className="text-white mt-2 bg-gradient-to-r from-white to-[#A5B4C3] bg-clip-text text-transparent"
                      style={{ fontSize: s.featured ? "2.4rem" : "1.7rem", fontWeight: 700 }}
                    >
                      {s.name}
                    </div>
                  </div>
                  <Rocket className="text-[#38BDF8]" size={22} />
                </div>
                <p className="mt-4 text-[#A5B4C3] leading-relaxed max-w-3xl">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-[0.7rem] text-white/70 border border-white/10 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {s.wins && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.wins.map((w) => (
                      <span
                        key={w}
                        className="px-3 py-1.5 rounded-full text-[0.72rem] text-[#38BDF8] border border-[#38BDF8]/30 bg-[#38BDF8]/5"
                      >
                        ✦ {w}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "RAG SOP Retrieval",
    problem: "Enterprise SOPs are locked in unsearchable PDFs.",
    solution: "Production RAG with local Mistral, FAISS, FastAPI.",
    tech: ["Python", "LangChain", "FAISS", "Mistral", "FastAPI"],
  },
  {
    name: "Agulous",
    problem: "Traditional classrooms lack digital continuity.",
    solution: "Cloud-native platform replacing notebooks with AI writing.",
    tech: ["Flutter", "Azure", "Firebase"],
  },
  {
    name: "GaragePilot",
    problem: "Roadside breakdowns are stressful and unpredictable.",
    solution: "On-demand mechanic discovery with home service.",
    tech: ["Flutter", "NodeJS", "MongoDB"],
  },
  {
    name: "PDFCleanr",
    problem: "Scanned documents suffer noise and artifacts.",
    solution: "AI document restoration using U-Net CNN + OpenCV.",
    tech: ["PyTorch", "U-Net", "OpenCV"],
  },
  {
    name: "PhishingShield",
    problem: "Phishing URLs bypass traditional filters.",
    solution: "ML classifier detecting phishing sites in real time.",
    tech: ["Python", "scikit-learn", "ML"],
  },
  {
    name: "Speech Sentiment",
    problem: "Voice tone carries sentiment beyond text.",
    solution: "Speech recognition + NLP sentiment analysis pipeline.",
    tech: ["NLP", "ASR", "Python"],
  },
  {
    name: "SweetShop",
    problem: "Small retailers lack simple inventory tools.",
    solution: "Flask-based inventory management system.",
    tech: ["Flask", "Python", "SQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="05 — PROJECTS" title="Selected work." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                (e.currentTarget as HTMLElement).style.setProperty("--x", `${e.clientX - r.left}px`);
                (e.currentTarget as HTMLElement).style.setProperty("--y", `${e.clientY - r.top}px`);
              }}
            >
              <GlassCard className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-[#38BDF8]/20 to-[#3B82F6]/10 border border-[#38BDF8]/20">
                    <Code2 className="text-[#38BDF8]" size={18} />
                  </div>
                  <a
                    href="https://github.com/Niranshu-Mittal"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-white/50 hover:text-[#38BDF8] transition-colors"
                  >
                    <Github size={17} />
                  </a>
                </div>
                <div className="mt-5 text-white" style={{ fontSize: "1.15rem", fontWeight: 600 }}>
                  {p.name}
                </div>
                <div className="mt-4 space-y-3 text-sm flex-1">
                  <div>
                    <div className="text-[0.65rem] tracking-widest text-white/40">PROBLEM</div>
                    <div className="text-[#A5B4C3] mt-1">{p.problem}</div>
                  </div>
                  <div>
                    <div className="text-[0.65rem] tracking-widest text-white/40">SOLUTION</div>
                    <div className="text-[#A5B4C3] mt-1">{p.solution}</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[0.68rem] text-white/70 border border-white/10 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cyber = [
  { icon: FileSearch, label: "Digital Forensics" },
  { icon: Eye, label: "Threat Intelligence" },
  { icon: Lock, label: "Dark Web Research" },
  { icon: Bitcoin, label: "Cryptocurrency Analysis" },
  { icon: Bug, label: "Malware Investigation" },
  { icon: Shield, label: "Cyber Investigation" },
  { icon: FileText, label: "Evidence Collection" },
];

export function CyberSecurity() {
  return (
    <section id="security" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="06 — CYBER SECURITY"
          title="Investigations at the edge of the internet."
          desc="Contributions to sensitive digital investigations — presented at a professional, high-level abstraction."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cyber.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <GlassCard className="p-6 h-full">
                <Icon className="text-[#38BDF8]" size={22} />
                <div className="mt-4 text-white">{label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skills = [
  "Python", "Flutter", "React", "FastAPI", "Azure", "Firebase", "MongoDB",
  "LangChain", "FAISS", "Mistral", "PyTorch", "TensorFlow", "OpenCV",
  "NodeJS", "JavaScript", "TypeScript", "Docker", "Git", "Linux",
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="07 — SKILLS" title="Tools of the trade." />
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur text-white/85 hover:border-[#38BDF8]/50 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all cursor-default"
            >
              {s}
            </motion.span>
          ))}
        </div>
        <div className="mt-10 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap text-white/[0.06]"
            style={{ fontSize: "4rem", fontWeight: 700 }}
          >
            {[...skills, ...skills].map((s, i) => (
              <span key={i}>{s} ✦</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const awards = [
  "SSIP Startup Grant",
  "Microsoft Founders Hub",
  "R&R Award",
  "President — The Cyber Force Club",
  "AI For India Certificate",
  "Microsoft Azure AI Fundamentals",
  "Cyber Security Training",
  "Python Certification",
];

export function Achievements() {
  return (
    <section id="awards" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="08 — ACHIEVEMENTS" title="Recognized work." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {awards.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <GlassCard className="p-6 h-full">
                <Award className="text-[#38BDF8]" size={20} />
                <div className="text-white mt-4 leading-snug">{a}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="09 — EDUCATION" title="Academic foundation." />
        <GlassCard className="p-8 lg:p-12">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-[#38BDF8]" size={24} />
                <span className="text-[0.72rem] tracking-widest text-[#38BDF8]">
                  L.D. COLLEGE OF ENGINEERING
                </span>
              </div>
              <div
                className="text-white mt-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700 }}
              >
                Bachelor of Engineering
              </div>
              <div className="text-[#A5B4C3] mt-1">
                Artificial Intelligence &amp; Machine Learning
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                <div className="text-[0.7rem] tracking-widest text-white/50">CGPA</div>
                <div
                  className="mt-1 bg-gradient-to-r from-white to-[#38BDF8] bg-clip-text text-transparent"
                  style={{ fontSize: "2.2rem", fontWeight: 700 }}
                >
                  8.66
                </div>
              </div>
              <div>
                <div className="text-[0.7rem] tracking-widest text-white/50">GRADUATED</div>
                <div
                  className="mt-1 bg-gradient-to-r from-white to-[#38BDF8] bg-clip-text text-transparent"
                  style={{ fontSize: "2.2rem", fontWeight: 700 }}
                >
                  2026
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

const repos = [
  { name: "rag-sop-retrieval", desc: "Production RAG for enterprise SOPs.", lang: "Python" },
  { name: "pdfcleanr", desc: "U-Net document restoration.", lang: "PyTorch" },
  { name: "phishingshield", desc: "ML phishing URL detection.", lang: "Python" },
  { name: "speech-sentiment", desc: "ASR + NLP sentiment pipeline.", lang: "Python" },
  { name: "sweetshop", desc: "Flask inventory system.", lang: "Flask" },
  { name: "agulous", desc: "Cloud-native education platform.", lang: "Flutter" },
];

export function GitHubSection() {
  return (
    <section id="github" className="relative px-6 md:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="10 — GITHUB"
          title="Open source & pinned repositories."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((r, i) => (
            <motion.a
              key={r.name}
              href="https://github.com/Niranshu-Mittal"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/90">
                    <Github size={16} /> {r.name}
                  </div>
                  <ExternalLink size={14} className="text-white/40" />
                </div>
                <p className="text-[#A5B4C3] mt-3 text-sm">{r.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-[0.72rem]">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  <span className="text-white/60">{r.lang}</span>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://github.com/Niranshu-Mittal"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur transition-colors"
          >
            <Github size={16} /> View full GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="11 — CONTACT"
          title="Let's build something intelligent."
          desc="Open to AI Engineering roles, research collaborations, and founder conversations."
        />
        <GlassCard className="p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <a
                href="mailto:niranshumittal2004@gmail.com"
                className="flex items-center gap-3 text-white/90 hover:text-[#38BDF8] transition-colors"
              >
                <Mail size={18} /> niranshumittal2004@gmail.com
              </a>
              <a
                href="tel:+919913625550"
                className="flex items-center gap-3 text-white/90 hover:text-[#38BDF8] transition-colors"
              >
                <Phone size={18} /> +91 99136 25550
              </a>
              <a
                href="https://www.linkedin.com/in/niranshu-mittal/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-[#38BDF8] transition-colors"
              >
                <Linkedin size={18} /> linkedin.com/in/niranshu-mittal
              </a>
              <a
                href="https://github.com/Niranshu-Mittal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/90 hover:text-[#38BDF8] transition-colors"
              >
                <Github size={18} /> github.com/Niranshu-Mittal
              </a>
              <div className="flex items-center gap-3 text-[#A5B4C3]">
                <MapPin size={18} /> Gujarat, India
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-3"
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#38BDF8]/60 focus:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#38BDF8]/60 focus:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all"
              />
              <textarea
                placeholder="Tell me about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#38BDF8]/60 focus:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full px-5 py-3 rounded-lg text-white bg-gradient-to-r from-[#38BDF8] to-[#3B82F6] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-shadow"
              >
                Send message
              </button>
            </form>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-white/60 text-sm">
        <div>
          Designed &amp; developed by <span className="text-white">Niranshu Mittal</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-[#38BDF8]" /> Powered by AI
        </div>
      </div>
    </footer>
  );
}
