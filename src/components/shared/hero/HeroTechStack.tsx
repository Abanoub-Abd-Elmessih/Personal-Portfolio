import { BoxReveal } from "@/components/magicui/box-reveal";
import { Code, Rocket, Sparkles } from "lucide-react";

const tech = [
  {
    icon: <Code className="w-5 h-5 text-blue-400" />,
    label: "React",
    hover: "hover:border-cyan-600/80",
  },
  {
    icon: <Rocket className="w-5 h-5 text-green-400" />,
    label: "Next.js",
    hover: "hover:border-emerald-400/50",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    label: "TypeScript",
    hover: "hover:border-blue-600/80",
  },
];

export const HeroTechStack = () => (
  <BoxReveal boxColor={"#6366f1"} duration={0.9}>
    <div className="flex flex-wrap justify-center gap-5 md:gap-8 opacity-70 hover:opacity-100 transition-opacity duration-500">
      {tech.map((item, idx) => (
        <div
          key={idx}
          className={`group flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border-2 border-white/10 ${item.hover} hover:bg-white/10 transition-all duration-300`}
        >
          {item.icon}
          <span className="text-gray-300 font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  </BoxReveal>
);
