import { BoxReveal } from "@/components/magicui/box-reveal";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Button } from "@/components/ui/button";
import { ChevronsDown, Contact } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="h-dvh flex flex-col items-center justify-center gap-4 snap-start">
      <WordRotate
        className="gap-3 px-6 py-3 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/10 hover:border-white/20 hover:bg-white/10 "
        words={[
          "★ Passionate Frontend Developer",
          "⚡ Building Modern Web Interfaces",
          "🚀 React & Next.js Specialist",
          "✨ Crafting Digital Experiences",
        ]}
      />
      <BoxReveal boxColor={"#4f46e5"} duration={0.8}>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-200 my-2 text-center">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text">
            Abanoub
          </span>
        </h1>
      </BoxReveal>
      <BoxReveal boxColor={"#4f46e5"} duration={1}>
        <div className="py-2 max-w-2xl text-center text-lg md:text-xl text-gray-300 leading-relaxed">
          Passionate about creating seamless user interfaces that not only look
          beautiful but also deliver exceptional performance and user
          satisfaction.
        </div>
      </BoxReveal>
      <BoxReveal boxColor={"#4f46e5"} duration={1.2}>
        <div className="flex gap-4 p-3">
          <Button size={"lg"} className="flex hover:gap-5 duration-500">
            Contact me <Contact />
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="flex hover:gap-5 duration-500"
          >
            View my work <ChevronsDown />
          </Button>
        </div>
      </BoxReveal>
    </section>
  );
};
