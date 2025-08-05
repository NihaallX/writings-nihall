import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Story } from "../components/StoryShowcase";

/**
 * Loads all stories from the /stories directory.
 * @returns Promise<Story[]>
 */
export async function loadStories(): Promise<Story[]> {
  const storiesDir = path.join(process.cwd(), "stories");
  const files = fs.readdirSync(storiesDir);
  return Promise.all(
    files.map(async (file) => {
      const filePath = path.join(storiesDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return {
        title: data.title,
        preview: data.preview,
        content: await marked(content),
      };
    })
  );
}
