import { useState } from "react";
import Container from "../../Container/Container";
import Button from "../../UI/Button/Button";
import cl from "./SubscribeUs.module.css";
import medal from '../../../assets/medal.png'
import bg from '../../../assets/subBgc.png'

const SubscribeUs = () => {
  const [email, setEmail] = useState("");
  return (
    <section className={cl.subscribeUs}>
      <Container>
        <div className={cl.subscribeUsInner}>
          <img src={medal} alt="" />
          <div className={cl.subscribeUsContent}>
            <h2>Subscribe Us</h2>
            <p>To Get Exclusive Benefits And Win Rewards</p>
            <div className={cl.subscribeUsInputAndButton}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="text"
                value={email}
                className={cl.subscribeUsInput}
              />
              <Button>subscribe</Button>
            </div>
          </div>
          <img className={cl.subscribeUsImage} src={bg} alt="" /> 
        </div>
      </Container>
    </section>
  );
};

export default SubscribeUs;
