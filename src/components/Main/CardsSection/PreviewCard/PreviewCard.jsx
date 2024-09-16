/* eslint-disable react/prop-types */
import GradientLine from "../../../UI/GradientLine/GradientLine";
import cl from "../CardsSection.module.css";

const PreviewCard = ({
  title,
  img,
  ltContent,
  lbContent,
  rtContent,
  rbContent,
  rbContentAmount,
  rtContentAmount,
}) => {
  return (
    <div className={cl.previewCard}>
      <h3>{title}</h3>
      <div className={cl.cardBody}>
        <img
        className={cl.cardImage}
          src={img}
          alt=""
        />
        <div className={cl.cardBodyContent}>
          <div className={cl.cardBodyContentBlock1}>
            <span>{ltContent}</span>
            <span>
              <span>{lbContent}</span>
            </span>
          </div>
          <GradientLine type={'small'}/>
          <div className={cl.cardBodyContentBlock2}>
            <span>
              {rtContent} {rtContentAmount}
            </span>
            <span>
              {rbContent}
              {rbContentAmount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
