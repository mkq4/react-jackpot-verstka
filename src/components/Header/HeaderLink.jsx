/* eslint-disable react/prop-types */
import cl from './Header.module.css'

const HeaderLink = ({children}) => {
  return (
    <li><a href="#" className={cl.header__navLink} target='_blank'>{children}</a></li>
  )
}

export default HeaderLink