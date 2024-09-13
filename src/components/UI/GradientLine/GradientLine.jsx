import cl from "./GradientLine.module.css";
// eslint-disable-next-line react/prop-types
const GradientLine = ({type}) => {
  const className = cl[type]
  return (
    <span className={className}
    ></span>
  );
};

export default GradientLine;
