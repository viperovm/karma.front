import React, {useEffect} from 'react';
import MainLayout from "../../layouts/MainLayout";
import TitleSection from "../../components/home/TitleSection";
import AdvantagesSection from "../../components/home/AdvantagesSection";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import FeaturesSection from "../../components/home/FeaturesSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <MainLayout>
      <main>
       <TitleSection/>
        <AdvantagesSection/>
        <HowItWorksSection/>
        <FeaturesSection/>
      </main>
    </MainLayout>
  );
};

export default Home;