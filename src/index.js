import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Season from "./season";
import Spinner from "./spinner";

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

    window.onload = function() {
      if (navigator.geolocation) {
        console.log("Geolocation is supported!");
      } else {
        console.log("Geolocation is not supported for this Browser/OS.");
      }
    };
  }
  // good for one-shot data loading, don't use the constructor
  componentDidMount() {
    console.log("component mount!");
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
  }
  componentDidUpdate() {
    console.log("component updated!");
  }
  render() {
    console.log("props is like", this.props);
    //the below data binding does not update the state
    if (this.state.lat && this.state.lon && !this.state.err) {
      return <Season lat={this.state.lat} lon={this.state.lon} />;
    }
    if (!this.state.lat && !this.state.lon && this.state.err) {
      return <div>err is {this.state.err}</div>;
    }
    return <Spinner />;
  }
}

ReactDOM.render(<App myProp="propVal" />, document.querySelector("#root"));
