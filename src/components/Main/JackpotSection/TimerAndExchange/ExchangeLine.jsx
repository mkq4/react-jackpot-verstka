import cl from "./Exchange.module.css";


// eslint-disable-next-line react/prop-types
const ExchangeLine = ({ logoSrc, token, coursePerCoin, inputValue, onInputChange }) => {
  return (
    <div className={cl.exchangeLine}>
      <div className={cl.exchangeLineTop}>
        <img src={logoSrc} alt="logo" style={{width: "33px", height:"33px"}}/>
        <span>{token}</span>
      </div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        className={cl.exchangeLineInput}
      />
      <div className={cl.exchangeLineBottom}>
        <p>≈ ${Math.floor(coursePerCoin * Number(inputValue))}</p>
        <p>Balance: 0.00</p>
      </div>
    </div>
  );
};

export default ExchangeLine;
