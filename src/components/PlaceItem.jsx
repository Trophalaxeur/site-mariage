import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'grommet/components/ListItem';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';


const PlaceItem = (props) => (
  <ListItem direction="column" align="start">
    <Heading tag="h6" strong>{props.place.name}</Heading>
    {props.place.site && <Anchor href={props.place.site.adress} target="_blank">{props.place.site.name || props.place.site.adress}</Anchor>}
    <Paragraph>
      {props.place.description && <span>{props.place.description}<br /><br /></span>}
      {props.place.adress}<br />
      <span>GPS : {props.place.lat}, {props.place.lng}</span>
    </Paragraph>
  </ListItem>
);

PlaceItem.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    site: PropTypes.shape({ name: PropTypes.string, adress: PropTypes.string.isRequired }),
    adress: PropTypes.string.isRequired,
    description: PropTypes.string,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired
};

// PlaceItem.defaultProps = {
//   site: undefined,
//   description: undefined
// };

export default PlaceItem;
