import cl from "./BigBangSection.module.css"
import GradientLine from '../../UI/GradientLine/GradientLine'
// eslint-disable-next-line react/prop-types
const BigBangText = ({text}) => {
  return (
    <div className={cl.bigBangText}>
        <GradientLine type={"big"}/>
        <p>{text}</p>
    </div>
  )
}

export default BigBangText