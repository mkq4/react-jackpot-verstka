import HeaderNav from "./HeaderNav"
import cl from "./Header.module.css"
import Container from "../Container/Container"
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen])

  return (
    <header className={cl.header}>
      <Container>
        <div className={cl.header__inner}>
          <div className={cl.header__logo}>JACKPOT SYSTEM</div>
          <div className={cl.header__navWrapper}>
            <HeaderNav isMenuOpen={isMenuOpen} />
            <div
              className={`${cl.header__burger} ${isMenuOpen ? cl.active : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;