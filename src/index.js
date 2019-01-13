import React from "react";
import ReactDOM from "react-dom";
//import Season from "./season";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null,
      acc: null,
      err: null
    };
    console.log("constructed AF");

    navigator.geolocation.getCurrentPosition(
      Position => {
        console.log("Position obj is", Position);
        console.log("lat is", Position.coords.latitude);
        this.setState({
          lat: Position.coords.latitude,
          lon: Position.coords.longitude,
          acc: Position.coords.accuracy
        });
      },
      err => {
        this.setState({
          err: err.message
        });
      }
    );

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
    if (this.state.lat && this.state.lon && !this.state.err) {
      return (
        <div>
          lat is {this.state.lat}
          <br />
          lon is {this.state.lon}
        </div>
      );
    }
    if (!this.state.lat && !this.state.lon && this.state.err) {
      return <div>err is {this.state.err}</div>;
    }
    return <div>loadeng...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
