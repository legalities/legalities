import React from "react";
import "./../../styles/Buttons.css";

interface Props {
  buttonText: string;
}
const PrimaryButton = ({ buttonText }) => {
  return <div className="primary button">{buttonText}</div>;
};
const SecondaryButton = ({ buttonText }) => {
  return <div className="secondary button">{buttonText}</div>;
};

export { SecondaryButton };
export default PrimaryButton;
