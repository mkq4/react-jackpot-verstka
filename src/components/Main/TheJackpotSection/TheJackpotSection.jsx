import cl from './TheJackpotSection.module.css'
import Container from '../../Container/Container'
import jackpot from '../../../assets/jackpot.png'
const TheJackpotSection = () => {
  return (
    <section className={cl.theJackpotSection}>
        <img style={{position: "absolute", display: "block", opacity: "0.5 "}} src="./src/assets/salut.png" alt="" />
        <Container>
            <div className={cl.theJackpotSectionInner}>
                <div className={cl.theJackpotSectionText}>
                    <h2><span>The</span> Jackpot</h2>
                    <div className={cl.theJackpotSectionTextInner}>
                    <p>
                        If for 10 minutes no buy of minimum approximately 0.1 BNB worth of $LAS occurs, 55.55% of the jackpot wallet gets cashed out. Both BNB in the contract and the LAS tokens that are still not converted into BNB are take into account for the cash-out.
                    </p>
                    <ul>
                        <li>90% of the cash out goes to the last buyer.</li>
                        <li>10% to boost the project through marketing or through buy backs.</li>
                    </ul>
                    </div>
                </div>
                <div className={cl.theJackpotSectionImage}>
                    <img src={jackpot} alt=""/>
                </div>
            </div>
            
        </Container>
    
    </section>
  )
}

export default TheJackpotSection