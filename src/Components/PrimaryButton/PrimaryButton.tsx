import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/Buttons.css";

// interface Props {
//   buttonText: string;
// }
const PrimaryButton = ({ buttonText }) => {
  return <Link to="/landing"><div className="primary button">{buttonText}</div></Link>;
};
const SecondaryButton = ({ buttonText }) => {
  return <div className="secondary button">{buttonText}</div>;
};

export { SecondaryButton };
export default PrimaryButton;
