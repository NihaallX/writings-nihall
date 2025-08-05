
export default function ContactSection() {
  return (
    <section className="w-full max-w-2xl mx-auto mb-20 flex flex-col items-start gap-8 px-2">
      <h2 className="font-serif text-2xl mb-2 text-foreground/90">Contact</h2>
      <div className="flex gap-6 mb-4">
        <a href="https://instagram.com/" className="text-2xl text-foreground/70 hover:text-pink-400 transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/" className="text-2xl text-foreground/70 hover:text-indigo-400 transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://github.com/" className="text-2xl text-foreground/70 hover:text-emerald-400 transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <div className="relative group">
          <a href="mailto:nihalpardeshi12344@gmail.com" className="text-2xl text-foreground/70 hover:text-rose-400 transition-colors" aria-label="Email"><FaEnvelope /></a>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-background text-foreground text-xs opacity-0 group-hover:opacity-100 pointer-events-none border border-foreground/10 shadow transition-opacity whitespace-nowrap">nihalpardeshi12344@gmail.com</span>
        </div>
      </div>
      <form className="w-full max-w-md bg-background/80 rounded-lg shadow p-6 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="rounded px-4 py-2 bg-background border border-foreground/10 focus:border-indigo-300 outline-none" disabled />
        <input type="email" placeholder="Your Email" className="rounded px-4 py-2 bg-background border border-foreground/10 focus:border-indigo-300 outline-none" disabled />
        <textarea placeholder="Your Message" className="rounded px-4 py-2 bg-background border border-foreground/10 focus:border-indigo-300 outline-none" rows={4} disabled />
        <button type="submit" className="rounded bg-indigo-300 text-white py-2 font-semibold cursor-not-allowed opacity-60" disabled>Send (Coming Soon)</button>
      </form>
    </section>
  );
}
import { FaTwitter, FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
