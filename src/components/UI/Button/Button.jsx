import cl from "./Button.module.css"
// eslint-disable-next-line react/prop-types
const Button = ({children}) => {
  return (
    <button className={cl.button}>
        {children}
    </button>
  )
}

export default Button