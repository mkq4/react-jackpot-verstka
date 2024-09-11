import Jackpot from "./Jackpot/Jackpot";
import cl from "./JackpotSection.module.css";
import TimerAndExchange from "./TimerAndExchange/TimerAndExchange";

const JackpotSection = () => {
  return (
    <section className={cl.JackpotSection}>
      <Jackpot />
      <TimerAndExchange />
    </section>
  );
};

export default JackpotSection;
