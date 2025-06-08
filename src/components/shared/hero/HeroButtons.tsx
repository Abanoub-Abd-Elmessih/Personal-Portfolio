import { BoxReveal } from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import { ChevronsDown, Contact } from "lucide-react";

export const HeroButtons = () => (
  <BoxReveal boxColor={"#4f46e5"} duration={0.9}>
    <div className="flex gap-4">
      <Button size={"lg"} className="group" asChild>
        <a href="#contact">
          Contact me <Contact className="group-hover:ml-3 duration-500" />
        </a>
      </Button>
      <Button variant={"outline"} size={"lg"} className="group" asChild>
        <a href="#projects">
          View my work
          <ChevronsDown className="group-hover:ml-3 duration-500" />
        </a>
      </Button>
    </div>
  </BoxReveal>
);
