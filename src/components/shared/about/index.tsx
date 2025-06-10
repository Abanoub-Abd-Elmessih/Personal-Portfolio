import { Heading } from "../heading";
import { AboutCard } from "./AboutCard";

export const AboutMe = () => {
  return (
    <section className="h-dvh scroll-mt-24 max-w-5xl mx-auto" id="about">
      <Heading title="About me" />
      <div className="grid grid-cols-2 gap-5">
        <AboutCard
          title="🏫 Education"
          items={[
            "<strong>B.A. in Sociology</strong> – Faculty of Arts, Alexandria University (2020–2024)",
            "<strong>Relevant Coursework:</strong> Social Research Methods, Statistics, Human Behavior, Cultural Studies",
          ]}
        />
      </div>
    </section>
  );
};
