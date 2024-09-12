import Timer from "./Timer";
import Exchange from "./Exchange";
import cl from "./TimerAndExchange.module.css";

const TimerAndExchange = () => {
  return (
    <section className={cl.timerAndExchange}>
      <Timer />
      <Exchange/>
    </section>
  );
};

export default TimerAndExchange;
