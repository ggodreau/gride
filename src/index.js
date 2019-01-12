import React from "react";
import ReactDOM from "react-dom";
import Season from "./season";

class App extends React.Component {
  render() {
    var lat = 0;
    var lon = 0;

    window.onload = function() {
      if (navigator.geolocation) {
        console.log("Geolocation is supported!");
      } else {
        console.log("Geolocation is not supported for this Browser/OS.");
      }
    };

    window.onmouseover = function() {
      var startPos = 0;
      var geoSuccess = function(position) {
        startPos = position;
        lon = startPos.coords.longitude;
        lat = startPos.coords.latitude;
        console.log(
          "lat is",
          startPos.coords.latitude,
          "long is",
          startPos.coords.longitude
        );
        console.log(navigator.geolocation);
        //document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        //document.getElementById('startLon').innerHTML = startPos.coords.longitude;
      };
      navigator.geolocation.getCurrentPosition(geoSuccess);
    };
    //the below data binding does not update the state
    return (
      <div>
        what the {lat}
        {lon} hell
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
