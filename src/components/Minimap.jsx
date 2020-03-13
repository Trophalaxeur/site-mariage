// Source : https://tomchentw.github.io/react-google-maps/async

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, withGoogleMap } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import _ from 'lodash';
import FaSpinner from 'react-icons/lib/fa/spinner';
import Config from '../config';


const AsyncGettingStartedExampleGoogleMap = _.flowRight(withScriptjs, withGoogleMap)(props => (
  <GoogleMap defaultZoom={props.defaultZoom} center={props.center}>
    {props.children}
  </GoogleMap>
));

class Minimap extends Component {
  constructor(props) {
    super(props);
    let defaultPosition = {
      lat: 43.6039827,
      lng: 1.4442174
    };
    const defaultZoom = props.zoom ? props.zoom : 15;

    if (props.children && props.children.length === undefined) {
      defaultPosition = {
        lat: props.children.props.lat,
        lng: props.children.props.lng
      };
    }

    if (props.children && props.children.length > 0 && props.children[0]) {
      defaultPosition = {
        lat: props.children[0].props.lat,
        lng: props.children[0].props.lng
      };
    }

    if (props.center) {
      defaultPosition = props.center;
    }

    this.state = {
      center: defaultPosition,
      defaultZoom
    };
  }

  render() {
    return (
      <AsyncGettingStartedExampleGoogleMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${Config.googleAPI}`}
        loadingElement={
          <div style={{ height: '100%' }}>
            <FaSpinner
              style={{
                display: 'block',
                width: '80px',
                height: '80px',
                margin: '150px auto',
                animation: 'fa-spin 2s infinite linear'
              }}
            />
          </div>
        }
        containerElement={<div style={{ height: this.props.height, width: this.props.width }} />}
        mapElement={<div style={{ height: '100%' }} />}
        center={this.state.center}
        defaultZoom={this.state.defaultZoom}
      >{this.props.children}</AsyncGettingStartedExampleGoogleMap>
    );
  }
}


Minimap.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  })
};

Minimap.defaultProps = {
  center: undefined,
  children: undefined,
  width: '100%',
  height: '100%',
  zoom: 15
};

export default Minimap;
