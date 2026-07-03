import { Background } from "./components/Background";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Loader } from "./components/Loader";
import {
  About,
  Experience,
  Featured,
  Startups,
  Projects,
  CyberSecurity,
  Skills,
  Achievements,
  Education,
  GitHubSection,
  Contact,
  Footer,
} from "./components/Sections";

export default function App() {
  return (
    <div
      className="min-h-screen w-full text-white relative overflow-x-hidden"
      style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
    >
      <Loader />
      <Background />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Featured />
        <Startups />
        <Projects />
        <CyberSecurity />
        <Skills />
        <Achievements />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
