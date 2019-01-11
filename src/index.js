import React from 'react';
import ReactDOM from 'react-dom';
import Season from './season';

const App = () => {
  // check for Geolocation support
  var lon = 0;
  var lat = 0;

  window.onload = function() {
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
    }
    else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
  };
  
  window.onmouseover = function() {
    var startPos = 0;
    var geoSuccess = function(position) {
      startPos = position;
      lon = startPos.coords.longitude;
      lat = startPos.coords.latitude;
      console.log("lat is", startPos.coords.latitude, "long is", startPos.coords.longitude);
      console.log(navigator.geolocation);
      //document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      //document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };

  window.onmousedown = function(event) {
    console.log('in the aapp');
    lon = 'XXX';
    lat = 'YYY';
  }

  return (
    <div>
      yolo
      <Season />
      { lon }{ lat }
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
