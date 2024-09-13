import Container from "../../Container/Container"
import cl from "./BigBangSection.module.css"
import BigBangText from "./BigBangText"
import astronaut from '../../../assets/astronaut.png'
const BigBangSection = () => {
  return (
    <section className={cl.bigBangSection}>
        <Container>
            <div className={cl.bigBangSectionInner}>
                <h2><span>The</span> Big Bang</h2>
                <div className={cl.bigBangSectionContent}>
                    <div style={{display: "flex", flexDirection: "column", gap: "40px"}}>
                        <BigBangText text={'A jackpot needs to have a limit, as an unlimited growth would cause it to mathematically never be won. We will fix this problem by setting the hard-cap for the jackpot at 50.000 USD.'}/>
                        <BigBangText text={'If the jackpot is not won by anyone, at the amount of 50.000 USD, a forced cash-out takes place. This cash-out buys back half of the jackpot in one single transaction which we call The Big Bang.'}/>
                        <BigBangText text={'The anticipation towards The Big Bang can lead to even greater FOMO, as the token price will increase strongly after The Big Bang took place. At the same time, with great transactional volume,'}/>
                    </div>
                    <img style={{marginTop: "-100px"}} src={astronaut} alt=""/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default BigBangSection