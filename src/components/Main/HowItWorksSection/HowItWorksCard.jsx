import cl from './HowItWorksSection.module.css'

// eslint-disable-next-line react/prop-types
const HowItWorksCard = ({img, text}) => {
  return (
    <div className={cl.howItWorksCard}>
        <img src={img} alt="" />
        <p>{text}</p>
    </div>
  )
}

export default HowItWorksCard