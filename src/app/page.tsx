import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import StoryShowcase, { Story } from "../components/StoryShowcase";
import AboutMe from "../components/AboutMe";
import ThemeToggle from "../components/ThemeToggle";
import SecretWriterMode from "../components/SecretWriterMode";
import AnimatedIntro from "../components/AnimatedIntro";
import "../styles/cozy-header.css";

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
    <>
      <SecretWriterMode />
      <ThemeToggle />
      <header className="w-full flex justify-center items-center py-8 border-b border-foreground/10 bg-background/80 sticky top-0 z-40">
        <h1 className="cozy-header text-4xl md:text-5xl tracking-tight text-foreground drop-shadow-sm">Seigfried</h1>
      </header>
      <main className="flex flex-col items-center justify-center min-h-[70vh] bg-background text-foreground px-4">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <StoryShowcase stories={stories} />
        </div>
        <div className="w-full max-w-4xl mt-16">
          <AboutMe />
        </div>
      </main>
      <footer className="w-full py-6 flex justify-center items-center border-t border-foreground/10 bg-background/80 text-foreground/60 text-sm mt-12">
        &copy; {new Date().getFullYear()} Seigfried. Crafted with cozy code.
      </footer>
    </>
  );
}
