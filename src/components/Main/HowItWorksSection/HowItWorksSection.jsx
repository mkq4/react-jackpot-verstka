import cl from './HowItWorksSection.module.css'
import Container from "../../Container/Container";
import HowItWorksCard from './HowItWorksCard';
import buy from '../../../assets/buy.png'
import anniversary from '../../../assets/anniversary.png'
import investor from '../../../assets/investor.png'
import bank from '../../../assets/bank.png'
import wallet from '../../../assets/wallet.png'
const HowItWorksSection = () => {
  return (
    <section className={cl.howItWorksSection}>
        <Container>
            <div className={cl.howItWorksSectionInner}>
                <h2><span>How</span> It Works!</h2>
                <div className={cl.howItWorksCards}>
                    <HowItWorksCard img={buy} text={'2% of every buy and 5% of every sell is converted into BNB and sent to the Jackpot.'}/>
                    <HowItWorksCard img={anniversary} text={'If there are no buys worth at least 0.1 BNB for 10 whole minutes, the last buyer gets 50% of the Jackpot transferred directly to his personal wallet.'}/>
                    <HowItWorksCard img={investor} text={'This will create a constant buy pressure, as multiple investors will try to win the Jackpot.'}/>
                    <HowItWorksCard img={bank} text={"At the same time, if you bought in and didn't win, you can watch your investment steadily rise as more buys come to increase the Dollar worth of your investment."}/>
                    <HowItWorksCard img={wallet} text={"A custom Telegram bot will announce constantly when the 10 minute timer will expire and show the last buyer's wallet."}/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HowItWorksSection