import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';
import _ from 'lodash';

class MyMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { lat: props.lat, lng: props.lng },
      // showInfo: false,
      title: props.title,
      description: props.children ? props.children : undefined
    };
  }

  onClick() {
    // this.setState({
    //   showInfo: true
    // });
    this.props.onSelect();
  }

  onCloseClick() {
    // this.setState({
    //   showInfo: false
    // });
    this.props.onUnselect();
  }

  getMarkerIcon() {
    if (!this.props.color) {
      return undefined;
    }
    // console.log('TYPE', this.props.type);
    // if (this.props.type === 1) {
    //   console.log('TYPE 1');
    //   const pinColor = 'FE7569';
    //   return new google.maps.MarkerImage(
    //     `http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${pinColor}`,
    //     new google.maps.Size(21, 34),
    //     new google.maps.Point(0, 0),
    //     new google.maps.Point(10, 34));
    // }
    // if (this.props.type === 2) {
    //   return new google.maps.MarkerImage(
    //     `http://maps.google.com/mapfiles/ms/icons/${color[this.props.type]}-dot.png`,
    //     new google.maps.Size(41, 50),
    //     new google.maps.Point(0, 0),
    //     new google.maps.Point(20, 50));
    // }

    return `http://maps.google.com/mapfiles/ms/icons/${this.props.color}-dot.png`;
  }

  render() {
    // return (<Marker position={{ lat: 43.6039827, lng: 1.4442174 }} key="le capitole" title="MarkerTitle" />);
    return (<Marker position={this.state.position} key={_.random(510000)} title={this.state.title} icon={this.getMarkerIcon()} onClick={() => { this.onClick(); }}>
      {
        this.props.isSelected && (<InfoWindow onCloseClick={() => { this.onCloseClick(); }}>
          <div style={{ color: 'initial' }}>
            <strong>{this.state.title}</strong>
            <br />
            {this.props.children}
          </div>
        </InfoWindow>)
      }
    </Marker >);
  }
}

MyMarker.propTypes = {
  onSelect: PropTypes.func,
  onUnselect: PropTypes.func,
  isSelected: PropTypes.bool,
  color: PropTypes.string,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  title: PropTypes.string,
  children: PropTypes.any
};

MyMarker.defaultProps = {
  onSelect: _.noop,
  onUnselect: _.noop,
  isSelected: false,
  color: undefined,
  title: 'Titre',
  children: undefined
};


export default MyMarker;
