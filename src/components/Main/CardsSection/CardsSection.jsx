import cl from './CardsSection.module.css'
import PreviewCard from './PreviewCard/PreviewCard'
import chest from '../../../assets/chest.png'; // правильный импорт
import bnb from '../../../assets/bnb.svg'; // правильный импорт
import gmz from '../../../assets/gmz.png'; // правильный импорт

const CardsSection = () => {
  return (
    <section className={cl.cardsSection}>
      <div className={cl.peviewCrads}>
        <PreviewCard img={chest} title={'Winner’s Share'} ltContent={'1F1tAaz5x1HUX'} lbContent={'$3,000.00'} rtContent={<img src={bnb}/>}/>
        <PreviewCard img={chest} title={'Winner’s Share'} ltContent={'1F1tAaz5x1HUX'} lbContent={'$5999.00'}/>
      </div>
    </section>
  );
};

export default CardsSection;
