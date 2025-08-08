"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SecretWriterMode() {
  const [activated, setActivated] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setTyped((prev) => (prev + e.key).slice(-9));
      if (typed.toLowerCase() === "seigfried") {
        setActivated(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [typed]);

  if (!activated) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-paper-texture bg-cover bg-center backdrop-blur-lg flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center text-white max-h-[80vh] w-full max-w-2xl overflow-y-auto p-6 rounded-xl bg-black/70 shadow-2xl">
        <h1 className="text-4xl font-serif mb-4">Welcome to Secret Writer Mode</h1>
        <p className="text-lg mb-6">Here are your locked stories and past drafts.</p>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>
            <span className="font-semibold text-lg block mb-2">The Story of Her</span>
            <div className="prose prose-invert text-white/90 max-w-none">
              It all started with a <strong>bike ride.</strong> A moment that felt simple but held weight in ways I didn’t even realize at the time. She struggled to get on, purse in one hand, balance all over the place, so I took it from her, placed it on my tank, and stretched out my left hand to help her up. And in that second, when she grabbed my hand to push herself onto the seat, <strong>it just felt right.</strong> Then she locked her legs around my waist, and I swear to God, <strong>time slowed down.</strong>
              <br /><br />
              It was nothing—just a normal sitting position—but it was everything. A <strong>test of boundaries.</strong> I rested my elbow on her knee, thigh, whatever. Just enough. <strong>Just to see.</strong> And she didn’t move away.
              <br /><br />
              Then the <strong>hair conversation</strong> happened. I noticed it looked different, mentioned it, and she hit me with that exaggerated shock, eyes wide open, like, <em>&ldquo;Achha nahi lagra tha kya?????&rdquo;</em> And damn, that moment was hilarious. But also, it was <strong>something.</strong> Like she cared what I thought? Maybe. Maybe not. Either way, <strong>it stayed with me.</strong>
              <br /><br />
              But the thing is… this wasn’t just about moments. It was about the <strong>tension.</strong> The way she sat next to me at lunch, the way we both felt it but never said it. The way she leaned in when we talked, how she’d share little secrets about people around us, like we had our own <strong>inside world.</strong> It was <strong>effortless.</strong> It was <strong>easy.</strong> And I could tell she knew it too.
              <br /><br />
              Then there was <strong>Ben.</strong> Always lurking, always inserting himself, the guy who went from saying she <strong>didn’t</strong> have a boyfriend to suddenly acting like he knew everything. First, he told me she was <em>single,</em> swore by it. Then, out of nowhere, it was, <em>&quot;She probably has one, bro. She’s keeping it lowkey.&quot;</em> He even had the audacity to say he saw her with some guy. And the way he said it? Like he wanted to <strong>shatter</strong> something inside me. I hated it. It didn’t make sense.
              <br /><br />
              Because bro, I <strong>know what I felt.</strong> And I know what I saw in her eyes.
              <br /><br />
              Still, doubt crept in. I handled it well—I think. I didn’t flood her DMs, didn’t try too hard. We talked in real life, and I knew that was the way to go. But then my results came, and I posted a selfie. She replied: <em>&quot;OMG congrats!&quot;</em> But I told her no, no congrats, it was bad. And she just reacted with a laughing emoji. <strong>Dry. Plain.</strong> Then I asked about Ramadan, pretending I didn’t know how to phrase it, and she replied with a <strong>red heart.</strong> And bro, I lost my mind over that. I overthought every pixel of that damn red heart.
              <br /><br />
              But then, I did something <strong>dumb.</strong> Out of desperation, I texted her, <em>&ldquo;Send me the pics of the biryani you showed me.&rdquo;</em> And she <strong>left me on sent.</strong>
              <br /><br />
              And that? <strong>That had never happened before.</strong>
              <br /><br />
              I sat there, staring at my phone, watching her <strong>stay active.</strong> Snapping people. Keeping streaks. Just… not replying to me.
              <br /><br />
              And that’s when the thoughts hit me hard. <em>What if I was just delulu this whole time?</em> What if I played it all out in my head, connected dots that never existed?
              <br /><br />
              But then, just as fast, another thought hit me—<strong>what if I wasn’t wrong?</strong>
              <br /><br />
              Because I remember the <strong>chocolate strawberries.</strong> The way she saw me have them, the way I wanted to ask for the video but got too shy, so I sent Ivy instead. And she <strong>never sent it.</strong> But the moment? The moment still existed.
              <br /><br />
              I remember the way I <strong>let her win</strong> at the PS3 game just to see her get hyped. The way she sat next to me at lunch, and I could just <strong>feel it.</strong> The <strong>side hug</strong> that lingered.
              <br /><br />
              So now, I don’t know. I’m stuck between trying to <strong>move on</strong> and hoping for more. Between wanting to believe in all those moments and being afraid they meant nothing.
              <br /><br />
              But one thing’s for sure—I’ll never forget <strong>how it felt when she grabbed my hand and pulled herself onto my bike.</strong>
              <br /><br />
              And I don’t think I ever want to.
              <br /><br />
              Either way, this is the story. My story. And I’ll come back to it someday—older, wiser, maybe even with closure. Or maybe, just maybe, with a different ending.
            </div>
          </li>
        </ul>
        <button
          className="mt-6 px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200"
          onClick={() => setActivated(false)}
        >
          Close
        </button>
      </div>
      <audio autoPlay>
        <source src="/typewriter-sound.mp3" type="audio/mpeg" />
      </audio>
    </motion.div>
  );
}
