import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { googleMapsKey } from "../keys";
// 725 x 450

const position = {
  lat: 40.7831,
  long: 73.9712
};

class GoogleMap extends Component {
  render() {
    return (
      <Map
        zoom={this.props.zoom}
        style={{ width: this.props.width, height: this.props.height }}
        google={this.props.google}
        center={position}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
      >
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsKey
})(GoogleMap);
