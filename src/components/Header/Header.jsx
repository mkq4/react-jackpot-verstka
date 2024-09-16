import HeaderNav from "./HeaderNav"
import cl from "./Header.module.css"
import Container from "../Container/Container"
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cl.header}>
      <Container>
        <div className={cl.header__inner}>
          <div className={cl.header__logo}>JACKPOT SYSTEM</div>
          <div className={cl.header__nav}>
            <HeaderNav />
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

export default Header