import cl from './Header.module.css';
import Button from '../UI/Button/Button';
// eslint-disable-next-line react/prop-types
const HeaderNav = ({ isMenuOpen }) => {
  return (
    <nav className={`${cl.header__nav} ${isMenuOpen ? cl.active : ''}`}>
      <ul className={cl.header__navList}>
        <li><a href="#home" className={cl.header__navLink}>Home</a></li>
        <li><a href="#about" className={cl.header__navLink}>About</a></li>
        <li><a href="#services" className={cl.header__navLink}>Services</a></li>
        <li><a href="#contact" className={cl.header__navLink}>Contact</a></li>
      </ul>
      <Button>connect wallet</Button>
    </nav>
  );
};

export default HeaderNav;

