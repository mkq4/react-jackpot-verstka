import Container from "../Container/Container";
import JackpotSection from "./JackpotSection/JackpotSection";
import cl from "./Main.module.css";

const Main = () => {
  return (
    <div className={cl.main}>
      <Container>
        <JackpotSection />
      </Container>
    </div>
  );
};

export default Main;
