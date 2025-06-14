import { WordRotate } from "@/components/magicui/word-rotate";
import { HeroTitle } from "./HeroTitle";
import { HeroSubtitle } from "./HeroSubtitle";
import { HeroTechStack } from "./HeroTechStack";
import { HeroButtons } from "./HeroButtons";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      className="h-dvh flex flex-col items-center justify-center gap-5 md:gap-8 pt-16"
      id="hero"
    >
      <WordRotate
        className="gap-3 px-6 py-3 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/10 hover:border-white/20 hover:bg-white/10 opacity-70 hover:opacity-100"
        words={[
          "★ Passionate Frontend Developer",
          "⚡ Building Modern Web Interfaces",
          "🚀 React & Next.js Specialist",
          "✨ Crafting Digital Experiences",
        ]}
      />
      <HeroTitle />
      <HeroSubtitle />
      <HeroTechStack />
      <HeroButtons />

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("about");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex flex-col items-center uppercase font-mono my-5 animate-bounce cursor-pointer"
      >
        scroll
        <ArrowDown className="text-indigo-500" />
      </a>
    </section>
  );
};
