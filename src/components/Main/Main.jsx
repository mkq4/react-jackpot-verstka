
import BigBangSection from "./BigBangSection/BigBangSection";
import CardsSection from "./CardsSection/CardsSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import JackpotSection from "./JackpotSection/JackpotSection";
import cl from "./Main.module.css";
import SubscribeUs from "./SubscribeUs/SubscribeUs";
import TheJackpotSection from "./TheJackpotSection/TheJackpotSection";
import TokenomicsSection from "./TokenomicsSection/TokenomicsSection";

const Main = () => {
  return (
    <div className={cl.main}>

        <JackpotSection />
        <CardsSection />
        <HowItWorksSection />
        <BigBangSection />
        <TokenomicsSection />
        <TheJackpotSection />
        <SubscribeUs />
    </div>
  );
};

export default Main;
