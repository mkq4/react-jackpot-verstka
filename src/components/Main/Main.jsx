
import BigBangSection from "./BigBangSection/BigBangSection";
import CardsSection from "./CardsSection/CardsSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import JackpotSection from "./JackpotSection/JackpotSection";
import cl from "./Main.module.css";

const Main = () => {
  return (
    <div className={cl.main}>

        <JackpotSection />
        <CardsSection />
        <HowItWorksSection />
        <BigBangSection />
    </div>
  );
};

export default Main;
