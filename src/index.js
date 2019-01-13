import React from "react";
import ReactDOM from "react-dom";
//import Season from "./season";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      acc: null
    };
    console.log("constructed AF");

    navigator.geolocation.getCurrentPosition(Position => {
      console.log("Position obj is", Position);
      console.log("lat is", Position.coords.latitude);
      this.setState({
        lat: Position.coords.latitude,
        lon: Position.coords.longitude,
        acc: Position.coords.accuracy
      });
    });

    window.onload = function() {
      if (navigator.geolocation) {
        console.log("Geolocation is supported!");
      } else {
        console.log("Geolocation is not supported for this Browser/OS.");
      }
    };
  }
  componentDidMount() {
    console.log("component mount!");
  }
  render() {
    console.log("props is like", this.props);
    //the below data binding does not update the state
    return (
      <div>
        lat is {this.state.lat} lon is {this.state.lon} acc is {this.state.acc}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
