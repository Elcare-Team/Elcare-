import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "../styles/GoogleMap.css";

// 725 x 450

const position = {
  lat: 40.7831,
  long: 73.9712
};

class GoogleMap extends Component {
  render() {
    return (
      <Map
        className="map"
        zoom={this.props.zoom}
        google={this.props.google}
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
  apiKey: process.env.GOOGLE_MAPS_KEY
})(GoogleMap);
