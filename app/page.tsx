import HeroSection from "@/components/sectionComponents/HeroComponent";
import FeaturesSection from "@/components/sectionComponents/FeaturesComponent";
import SectionCComponent from "@/components/sectionComponents/SectionCComponent";
import SectionH from "@/components/sectionComponents/SectionH";
import cards from "@/constants/cardData";

const Page = () => {
  return (
    <div className="">
      <HeroSection />
      <FeaturesSection cards={cards}/>
      <SectionCComponent />
      <SectionH cards={cards}/>  
    </div>
  );
};

export default Page;
