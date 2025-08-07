import NavBar from "../components/NavBar";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import StoryShowcase, { Story } from "../components/StoryShowcase";
import AboutMe from "../components/AboutMe";
import ThemeToggle from "../components/ThemeToggle";
import SecretWriterMode from "../components/SecretWriterMode";

export default async function Home() {
  // Load all markdown files from /stories at build/runtime
  const storiesDir = path.join(process.cwd(), "stories");
  const files = await fs.readdir(storiesDir);
  const stories: Story[] = await Promise.all(
    files.filter(f => f.endsWith(".md")).map(async (file) => {
      const filePath = path.join(storiesDir, file);
      const raw = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(raw);
      return {
        title: data.title,
        preview: data.preview,
        content: await marked(content),
      };
    })
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#18181a] via-[#232323] to-[#101012] overflow-x-hidden">
      {/* Blond Album Cover Floating Top Left */}
      <div className="fixed top-28 left-8 z-40" style={{ pointerEvents: 'none' }}>
        <img
          src="/blond-cover.jpg"
          alt="Blond album cover by Frank Ocean"
          className="w-16 h-16 md:w-24 md:h-24 rounded-2xl shadow-2xl object-cover border-4 border-white/20 bg-white/80"
          style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.22)' }}
        />
      </div>
      {/* Vignette/Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%), url(/grain.png) repeat', opacity: 0.45}} />
      <NavBar />
      {/* Move ThemeToggle below nav bar */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <SecretWriterMode />
      {/* ...Spotify embed removed as requested... */}
      {/* Blond Album Cover in About Me */}
      <main className="flex flex-col items-center justify-center min-h-[70vh] text-white px-4">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <StoryShowcase stories={stories} />
        </div>
        <div className="w-full max-w-4xl mt-16">
          <AboutMe />
        </div>
      </main>
      {/* ...Floating timeline removed as requested... */}
      <footer className="w-full py-6 flex justify-center items-center border-t border-white/10 bg-black/80 backdrop-blur-sm text-white/60 text-sm mt-12">
        &copy; {new Date().getFullYear()} Seigfried. Crafted with cozy code.
      </footer>
    </div>
  );
}
