import React from "react";

const PrimaryButton = (props) => {
  console.log(props);
  return (
    <div>
      <input
        className="btn btn-primary"
        type="button"
        value={props.title}
      ></input>
    </div>
  );
};

export default PrimaryButton;
