import React from "react";

const PrimaryButton = (props) => {
  console.log(props);

  const handleCLick = () => {
    window.open(props.resumeUrl, "_blank");
  };

  const resumeButton = () => {
    return (
      <input
        className="btn btn-primary"
        type="submit"
        value={props.title}
        onClick={handleCLick}
        download="Resume.pdf"
      ></input>
    );
  };

  
  const normalButton = () => {
    return (
      <input
        className="btn btn-primary"
        type="submit"
        value={props.title}
      ></input>
    );
  };

  return <div>{props.resumeUrl ? resumeButton() : normalButton()}</div>;
};

export default PrimaryButton;
