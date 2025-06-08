import { BoxReveal } from "@/components/magicui/box-reveal";

export const HeroSubtitle = () => (
  <BoxReveal boxColor={"#6366f1"} duration={0.7}>
    <div className="max-w-3xl text-center italic">
      <p className="text-xl md:text-2xl text-gray-300 tracking-wide font-light">
        Transforming ideas into{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-indigo-600 font-medium">
          stunning digital experiences
        </span>{" "}
        through cutting-edge frontend technologies and user-centered design
        principles.
      </p>
    </div>
  </BoxReveal>
);
