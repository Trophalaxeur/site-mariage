import React from 'react';
import PropTypes from 'prop-types';

import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';


const Contribution = (props) => {
  const label = `Avec ${props.montant}€ et +`;
  return (
    <Tile>
      <Box margin="large">
        <Card thumbnail={<Box margin={{ horizontal: 'small', vertical: 'small' }}><Image src={props.thumbnail} size="medium" /></Box>} label={label} heading={props.heading} description={props.description} colorIndex={props.colorIndex} size="medium" />
      </Box>
    </Tile>
  );
};

Contribution.propTypes = {
  colorIndex: PropTypes.string,
  montant: PropTypes.number,
  heading: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string
};

Contribution.defaultProps = {
  colorIndex: '',
  montant: 1000,
  heading: undefined,
  thumbnail: undefined,
  description: undefined
};

export default Contribution;
