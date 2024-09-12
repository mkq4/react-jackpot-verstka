import cl from "./Exchange.module.css"
import ExchangeLine from "./ExchangeLine"
import bnb from '../../../../assets/bnb.svg'
import gmz from '../../../../assets/GMZ.png'
import arrows from '../../../../assets/arrows.svg'
import { useState } from 'react';
import Button from "../../../UI/Button/Button"

const Exchange = () => {

  const [bnbValue, setBnbValue] = useState('');
  const [gmzValue, setGmzValue] = useState('');

  const handleBnbChange = (value) => {
    setBnbValue(value);
    setGmzValue((value * 544 / 31.5).toFixed(2));
  };

  const handleGmzChange = (value) => {
    setGmzValue(value);
    setBnbValue((value * 31.5 / 544).toFixed(2));
  };

  return (
    <div className={cl.exchange}>
      <h3>Buy Now</h3>
      <ExchangeLine
        logoSrc={bnb}
        token="BNB"
        coursePerCoin={544}
        inputValue={bnbValue}
        onInputChange={handleBnbChange}
      />
      <img src={arrows} style={{width: "22px", height: "25px", margin: "20px 0px"}}/>
      <ExchangeLine
        logoSrc={gmz}
        token="GMZ"
        coursePerCoin={31.5}
        inputValue={gmzValue}
        onInputChange={handleGmzChange}
      />
      <Button>buy coins now</Button>
      <p>charts <span>|</span> Buy Crypto</p>
    </div>
  );
};

export default Exchange;
