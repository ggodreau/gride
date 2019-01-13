import React from "react";

const seasonConfig = {
  summer: {
    text: "it's hot af",
    iconName: "fire"
  },
  winter: {
    text: "it's cold af",
    iconName: "snowflake"
  }
};

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
        <h1>
          {seasonConfig[getSeason(this.props.lat)].text}
          <i
            className={`${
              seasonConfig[getSeason(this.props.lat)].iconName
            } icon`}
          />
        </h1>
      </div>
    );
  }
}

export default Season;
