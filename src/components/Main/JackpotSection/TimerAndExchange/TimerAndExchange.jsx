import Timer from "./Timer";
import cl from "./TimerAndExchange.module.css";

const TimerAndExchange = () => {
  return (
    <section className={cl.timerAndExchange}>
      <Timer />
    </section>
  );
};

export default TimerAndExchange;
