import { BoxReveal } from "@/components/magicui/box-reveal";

export const HeroTitle = () => (
  <BoxReveal boxColor={"#4f46e5"} duration={0.5}>
    <h1 className="text-4xl md:text-7xl font-semibold text-gray-200 text-center NSWFont">
      Hi, I'm{" "}
      <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-indigo-600 text-transparent bg-clip-text">
        Abanoub
      </span>
    </h1>
  </BoxReveal>
);
