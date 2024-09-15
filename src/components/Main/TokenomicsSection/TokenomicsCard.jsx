import cl from './TokenomicsSection.module.css'

// eslint-disable-next-line react/prop-types
const TokenomicsCard = ({title, imgPath, persent1, persent2, persent3, persent4}) => {
  return (
    <div className={cl.tokenomicsCard}>
        <img src={imgPath} alt="" />
        <div className={cl.tokenomicsCardText}>
            <h3>{title}</h3>
            <ul>
                <li>{persent1}% Liquidity</li>
                <li>{persent2}% Marketing</li>
                <li>{persent3}% Team</li>
                <li>{persent4}% Jackpot</li>
            </ul>
        </div>
    </div>
  )
}

export default TokenomicsCard