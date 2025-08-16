export function calculateReadingTime(content: string): number {
  // Remove HTML tags and markdown syntax for accurate word count
  const plainText = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[#*_`~\[\]]/g, '') // Remove markdown syntax
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  const words = plainText.split(' ').filter(word => word.length > 0);
  const wordsPerMinute = 200; // Average reading speed
  
  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}