import HeaderLink from "./HeaderLink"
import cl from "./Header.module.css"
import Button from "../UI/Button/Button"


const HeaderNav = () => {
  return (
    <nav className={cl.header__nav}>
          <ul className={cl.header__navList}>
            <HeaderLink>Home</HeaderLink>
            <HeaderLink>About</HeaderLink>
            <HeaderLink>Tournaments</HeaderLink>
            <HeaderLink>Contact us</HeaderLink>
            <HeaderLink>Telegram</HeaderLink>
          </ul>
          <Button>connect wallet</Button>
    </nav>
  )
}

export default HeaderNav