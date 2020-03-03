import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { googleMapsKey } from "../keys";

const mapStyles = {
  width: "300px",
  height: "300px"
};

class GoogleMap extends Component {
  render() {
    return (
      <Map
        zoom={14}
        style={mapStyles}
        google={this.props.google}
        intialCenter={{
          lat: 40.7831,
          long: 73.9712
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsKey
})(GoogleMap);
