import React from "react";

const SecondaryButton = (props) => {
  console.log(props);
  return (
    <div className="sec-btn-container flex-1 ">
      <input
        className="btn btn-secondary "
        type="button"
        value={props.title}
      ></input>
    </div>
  );
};

export default SecondaryButton;
