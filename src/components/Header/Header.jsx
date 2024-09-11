import HeaderNav from "./HeaderNav"
import cl from "./Header.module.css"
import Container from "../Container/Container"

const Header = () => {
  return (
    <header className={cl.header}>
        <Container>
          <div className={cl.header__inner}>
            <div className={cl.header__logo}>JACKPOT SYSTEM</div>
            <HeaderNav/>
          </div>
        </Container>
    </header>
  )
}

export default Header