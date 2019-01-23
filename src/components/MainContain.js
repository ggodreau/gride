import React from "react";

class MainContain extends React.Component {
  constructor() {
    super();
    this.state = {
      divStyle: { padding: "20px 20px 0px 20px" }
    };
  }

  render() {
    return (
      <div style={this.state.divStyle}>
        <div className="jumbotron">
          <h1 className="display-3">Find Your Vehicle</h1>
          <p className="lead">
            This is a simple app for locating a vehicle from an API.
          </p>
        </div>
      </div>
    );
  }
}

export default MainContain;
