import Container from "../Container/Container";
import CardsSection from "./CardsSection/CardsSection";
import JackpotSection from "./JackpotSection/JackpotSection";
import cl from "./Main.module.css";

const Main = () => {
  return (
    <div className={cl.main}>
      <Container>
        <JackpotSection />
        <CardsSection />
      </Container>
    </div>
  );
};

export default Main;
