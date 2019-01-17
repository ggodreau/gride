import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{props.msg}</div>
    </div>
  );
};

// this defines the default props vals for the component
// ...must come AFTER the construction of the component
// also I put in an unused prop2 key for kicks lolol
Spinner.defaultProps = {
  msg: "choaded",
  prop2: "propval"
};

export default Spinner;
