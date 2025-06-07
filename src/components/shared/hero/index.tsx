import { BoxReveal } from "@/components/magicui/box-reveal";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="h-dvh flex flex-col items-center justify-center gap-2">
      <WordRotate
        className="gap-3 px-6 py-3 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/10 hover:border-white/20 hover:bg-white/10"
        words={[
          "★ Passionate Frontend Developer",
          "🗲 Building Modern Web Interfaces",
          "🗲 React & Next.js Specialist",
          "★ Crafting Digital Experiences",
        ]}
      />
      <BoxReveal boxColor={"#4f46e5"} duration={0.8}>
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-300 my-2">
          Hi, I'm{" "}
          <span className="bg-gradient-to-t from-cyan-600 via-indigo-500 to-indigo-400 text-transparent bg-clip-text">
            Abanoub
          </span>
        </h1>
      </BoxReveal>
      <BoxReveal boxColor={"#4f46e5"} duration={1}>
        <div className="py-2 max-w-xl text-center text-lg text-gray-400">
          Passionate about creating seamless user interfaces that not only look
          beautiful but also deliver exceptional performance and user
          satisfaction.
        </div>
      </BoxReveal>
      <BoxReveal boxColor={"#4f46e5"} duration={1.2}>
        <div className="flex gap-3">
          <Button size={"lg"}>Contact me</Button>
          <Button variant={"outline"} size={"lg"}>
            View my work
          </Button>
        </div>
      </BoxReveal>
    </section>
  );
};
