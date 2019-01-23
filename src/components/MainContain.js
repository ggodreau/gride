import React from "react";

class MainContain extends React.Component {
  constructor() {
    super();
    this.state = {
      divStyle: { padding: "20px 20px 0px 20px" }
    };
  }

  render() {
    console.log(this.state.divStyle);
    return (
      <div style={this.state.divStyle}>
        <div class="jumbotron">
          <h1 class="display-3">Find Your Vehicle</h1>
          <p class="lead">
            This is a simple app for locating a vehicle from an API.
          </p>
        </div>
      </div>
    );
  }
}

export default MainContain;
