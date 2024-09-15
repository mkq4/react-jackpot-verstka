import cl from './Footer.module.css'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import g from '../../assets/g.svg'
const FooterSocials = () => {
  return (
    <div className={cl.footerSocials}>
        <h3>Our Social Media</h3>
        <div>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={instagram} alt="" /></a>
            <a href="#"><img src={g} alt="" /></a>
        </div>
    </div>
  )
}

export default FooterSocials