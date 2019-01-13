import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive loader" />
    </div>
  );
};

export default Spinner;
