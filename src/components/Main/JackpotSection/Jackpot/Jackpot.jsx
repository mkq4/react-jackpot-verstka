import cl from "./Jackpot.module.css"

const Jackpot = () => {
  return (
    <div className={cl.jackpot}>
        <h1>Live Jackpot</h1>
        <div className={cl.jackpot__sharp}>
            <img src="./public/images/sharp.png" alt=""/>
            <p className={cl.jackpot__win}>$45,000</p>
        </div>
        <p className={cl.jackpot__text}>
        Contract | 0xeba5ef26c655E25fcbA6778b1D7
        </p>
    </div>
  )
}

export default Jackpot