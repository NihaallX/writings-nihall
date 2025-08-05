import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full max-w-2xl mx-auto mt-20 mb-16 flex flex-col items-center gap-6">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-rose-100/80 to-indigo-100/80 flex items-center justify-center shadow-lg">
        {/* Replace with your portrait image */}
        <Image src="/portrait-placeholder.png" alt="Portrait" width={128} height={128} className="object-cover w-full h-full" />
      </div>
      <div className="text-center">
        <h2 className="font-serif text-2xl mb-2 text-foreground/90">About Me</h2>
        <p className="text-lg text-foreground/80 max-w-md mx-auto mb-2">
          I’m a creative writer who believes in the quiet magic of words. My stories drift between reality and reverie, always searching for the softest light.
        </p>
        <blockquote className="italic text-foreground/60 border-l-4 border-rose-200 pl-4 mt-4">
          “The world is made of stories, not atoms.”
        </blockquote>
      </div>
    </section>
  );
}
