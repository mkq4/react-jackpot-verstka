import { useState, useEffect } from "react";
import Button from '../../../../components/UI/Button/Button';
import bnb from '../../../../assets/bnb.svg'

import cl from './TimerAndExchange.module.css';

const Timer = () => {
  const initialMinutes = 20;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
      } else if (seconds === 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(59);
      } else {
        setSeconds((prev) => prev - 1);
      }

      const totalTime = initialMinutes * 60;
      const timeLeft = minutes * 60 + seconds;
      setProgress(((totalTime - timeLeft) / totalTime) * 100);
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds, initialMinutes]);

  return (
    <div className={cl.timer}>
      <h2>Earn Big Today!</h2>
      <div className={cl.timer__line}>
        <div className={cl.timer__minutes}>{minutes.toString().padStart(2, "0")}</div>
        <span>:</span>
        <div className={cl.timer__seconds}>{seconds.toString().padStart(2, "0")}</div>
        <p className={cl.timer__left}>Left Only</p>
      </div>

      <div className={cl.loadingBar}>
        <div className={cl.loadingBarTop}>
          <h3>Big Bang Loading</h3>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className={cl.progressBar}>
          <div
            className={cl.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button>BUY NOW <img src={bnb} alt="Telegram" style={{ width: '28px', height: '28px', marginLeft: '14px' }} /></Button>
    </div>
  );
}

export default Timer;
