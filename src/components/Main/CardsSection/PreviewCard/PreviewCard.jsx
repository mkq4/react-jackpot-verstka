/* eslint-disable react/prop-types */
import cl from "../CardsSection.module.css"

const PreviewCard = ({title, img, ltContent, lbContent, rtContent, rbContent}) => {
  return (
    <div className={cl.previewCard}>
        <h3>{title}</h3>
        <div className={cl.cardBody}>
            <img src={img} alt="" style={{width: "50px", height: "50px"}}/>
            <div className={cl.cardBodyContent}>
                <div className={cl.cardBodyContentBlock1}><span>{ltContent}</span><span>{lbContent}</span></div>
                <span></span>
                <div className={cl.cardBodyContentBlock2}><span>{rtContent}</span><span>{rbContent}</span></div>
            </div>
        </div>
    </div>
  )
}

export default PreviewCard