import Container from "../../Container/Container";
import Jackpot from "./Jackpot/Jackpot";
import cl from "./JackpotSection.module.css";
import TimerAndExchange from "./TimerAndExchange/TimerAndExchange";
const JackpotSection = () => {
  return (
    <section className={cl.JackpotSection}>
      <Container>
        <Jackpot />
        <TimerAndExchange />
      </Container>
    </section>
  );
};

export default JackpotSection;
