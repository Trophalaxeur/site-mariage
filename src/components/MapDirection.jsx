/* global google */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DirectionsRenderer } from 'react-google-maps';
import _ from 'lodash';

class MapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: undefined
    };
  }

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.props.from,
      destination: this.props.to,
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render() {
    // return (<Marker position={{ lat: 43.6039827, lng: 1.4442174 }} key="le capitole" title="MarkerTitle" />);
    return (<DirectionsRenderer directions={this.state.directions} />);
  }
}

MapDirection.propTypes = {
  from: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  to: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired
};

MapDirection.defaultProps = {
  onSelect: _.noop,
  onUnselect: _.noop,
  isSelected: false,
  color: undefined,
  title: 'Titre',
  children: undefined
};


export default MapDirection;
