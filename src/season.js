import React from "react";

let getSeason = function(lat) {
  let month = new Date().getMonth();
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

class Season extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructed season comp");
  }
  render() {
    return (
      <div>
        foo lat is {this.props.lat} lon is {this.props.lon}
        month is {getSeason(this.props.lat)}
      </div>
    );
  }
}

export default Season;
