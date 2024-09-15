import Container from "../../Container/Container";
import TokenomicsCard from "./TokenomicsCard";
import cl from "./TokenomicsSection.module.css";
import illustration1 from "../../../assets/illustration1.png";
import illustration from "../../../assets/illustration.png";

const TokenomicsSection = () => {
  return (
    <section className={cl.tokenomicsSection}>
      <Container>
        <div className={cl.tokenomicsSectionInner}>
          <h2>
            <span>Token</span>omics
          </h2>
          <div className={cl.tokenomics2Cards}>

          <TokenomicsCard
            title={"For Buying"}
            imgPath={illustration1}
            persent1={2}
            persent2={2}
            persent3={2}
            persent4={2}
          />
          <TokenomicsCard
            title={"For Selling"}
            imgPath={illustration}
            persent1={2}
            persent2={3}
            persent3={2}
            persent4={5}
          />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TokenomicsSection;
