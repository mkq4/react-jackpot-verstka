import cl from "./CardsSection.module.css";
import PreviewCard from "./PreviewCard/PreviewCard";
import chest from "../../../assets/chest.png";
import safe from "../../../assets/safe.png";
import bnb from "../../../assets/bnb.svg";
import gmz from "../../../assets/gmz.png";
import Container from "../../Container/Container";

const CardsSection = () => {
  return (
    <section className={cl.cardsSection}>
      <Container>
        <div className={cl.peviewCards}>
          <PreviewCard
            img={chest}
            title={"Winner’s Share"}
            ltContent={"1F1tAaz5x1HUX"}
            lbContent={"$3,000.00"}
            rtContent={<img src={bnb} style={{width: "30px"}}/>}
            rtContentAmount={4.21}
            rbContent={<img src={gmz} style={{width: "30px"}}/>}
            rbContentAmount={341.423}
          />
          <PreviewCard
            img={safe}
            title={"Buyback's Share"}
            ltContent={"CNLbtMn4xq"}
            lbContent={"$5999.00"}
            rtContent={<img src={bnb} style={{width: "30px"}}/>}
            rtContentAmount={44.21}
            rbContent={<img src={gmz} style={{width: "30px"}}/>}
            rbContentAmount={1341.423}
          />
        </div>
      </Container>
    </section>
  );
};

export default CardsSection;
