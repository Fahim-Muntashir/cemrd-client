import About from "@/components/Interface/HomePage/About/About";
import Counts from "@/components/Interface/HomePage/Count/Count";
import HeroSection from "@/components/Interface/HomePage/HeroSection/HeroSection";
import Publications from "@/components/Interface/HomePage/Publications/Publications";


export default function HomePage() {
  return (
    <main >
      <HeroSection></HeroSection>
      <About></About>
      <Counts></Counts>
      <Publications></Publications>
    </main >
  );
}
