import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';

import Minimap from '../components/Minimap';
import MyMarker from '../components/MyMarker';
import MapDirection from '../components/MapDirection';
import Clock from '../components/Clock';

class Etape extends Component {
  constructor(props) {
    super(props);
    this.props.time && (this.state = {
      hours: parseInt(this.props.time.split(':')[0], 10),
      minutes: parseInt(this.props.time.split(':')[1], 10)
    });
  }

  render() {
    return (
      <Section direction="row" appCentered size={{ height: this.props.height }} colorIndex={this.props.color}>
        {this.props.time && <Box align="center" justify="center" margin={{ horizontal: 'medium' }}>
          <Clock colorIndex={this.props.color} hours={this.state.hours} minutes={this.state.minutes} />
          <Headline className="fontDigitalDismay" margin="medium">
            {this.props.time}
          </Headline>
        </Box>}
        <Box margin={{ horizontal: 'medium' }} justify="center">
          <Heading>{this.props.title}</Heading>
          <Box margin={{ vertical: 'small' }}>
            {this.props.children}
          </Box>

          {(this.props.position || this.props.direction) && <Box direction="row" align="center" flex>
            <Minimap height="100%" zoom={this.props.mapZoom} center={this.props.mapCenter}>
              {this.props.position && <MyMarker lat={this.props.position.lat} lng={this.props.position.lng} title={this.props.placeKey} />}
              {this.props.direction && <MapDirection from={this.props.direction.from} to={this.props.direction.to} />}
            </Minimap>
          </Box>}
        </Box>

        {(this.props.image) && <Box direction="row" align="start" flex="grow" margin={{ vertical: 'large' }}><Image src={this.props.image} fit="contain" /></Box>}
      </Section>
    );
  }
}

Etape.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.any,
  image: PropTypes.string,
  mapZoom: PropTypes.number,
  mapCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  direction: PropTypes.shape({
    from: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired,
    to: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired
  }),
  placeKey: PropTypes.string,
  color: PropTypes.string
};

Etape.defaultProps = {
  time: undefined,
  title: 'Title',
  height: 'xxlarge',
  children: undefined,
  image: undefined,
  position: undefined,
  mapZoom: 18,
  mapCenter: undefined,
  direction: undefined,
  placeKey: 'Place',
  color: ''
};

export default Etape;
