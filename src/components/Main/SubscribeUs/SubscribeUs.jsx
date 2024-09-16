import { useState } from "react";
import Container from "../../Container/Container";
import Button from "../../UI/Button/Button";
import cl from "./SubscribeUs.module.css";
import medal from '../../../assets/medal.png';
import bg from '../../../assets/subBgc.png';

const SubscribeUs = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Логика подписки
    console.log(`Subscribed with: ${email}`);
  };

  return (
    <section className={cl.subscribeUs}>
      <Container>
        <div className={cl.subscribeUsInner}>
          <img src={medal} alt="Medal icon" className={cl.medalIcon} />
          <div className={cl.subscribeUsContent}>
            <h2>Subscribe to Us</h2>
            <p>Get exclusive benefits and win amazing rewards!</p>
            <div className={cl.subscribeUsInputAndButton}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                value={email}
                className={cl.subscribeUsInput}
                aria-label="Email address"
              />
              <Button onClick={handleSubscribe}>Subscribe</Button>
            </div>
          </div>
          <img className={cl.subscribeUsImage} src={bg} alt="Background" />
        </div>
      </Container>
    </section>
  );
};

export default SubscribeUs;
