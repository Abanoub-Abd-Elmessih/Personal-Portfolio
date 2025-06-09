import { AboutMe } from "./components/shared/about";
import { HeroSection } from "./components/shared/hero";
import { Navbar } from "./components/shared/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
    </>
  );
}
