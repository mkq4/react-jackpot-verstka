import Container from '../Container/Container'
import cl from './Footer.module.css'
import FooterBlock from './FooterBlock'
import FooterSocials from './FooterSocials';

const Footer = () => {
    const linksBlock1 = ["Home", "About us", "Tournaments", "Games", "Contact us"];
    const linksBlock2 = ["Security", "Faq", "Privacy policy", "Term of Service", "Complaints Policy"];
    const linksBlock3 = ["Login", "Register", "Account Verification", "Safety & Security"];
    
    return (
      <footer className={cl.footer}>
        <Container>
          <div className={cl.footerInner}>
            <h2>JACKPOT SYSTEM</h2>
            <div className={cl.footerContent}>
              <FooterBlock title={"Company"} links={linksBlock1} />
              <FooterBlock title={"Legal Info"} links={linksBlock2} />
              <FooterBlock title={"My Account"} links={linksBlock3} />
              <FooterSocials/>
            </div>

          </div>
        </Container>
      </footer>
    );
  };
  
export default Footer;