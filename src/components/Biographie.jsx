import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';

const Biographie = (props) => (
  <Section direction="row" align="center" appCentered justify="center" reverse={props.reverse} colorIndex={props.color} full="horizontal">
    {props.image && <Box margin="large" pad="large" basis="medium">
      <Image src={props.image} size="medium" />
    </Box>}
    <Box margin="large">
      {props.title && <Heading>{props.title}</Heading>}
      {
        props.children.length > 0 ? props.children : <Paragraph margin="none">
          {props.children}
        </Paragraph>
      }
    </Box>
  </Section>
);

Biographie.propTypes = {
  reverse: PropTypes.bool,
  color: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any
};

Biographie.defaultProps = {
  reverse: false,
  color: '',
  image: undefined,
  title: undefined,
  text: 'Text',
  children: undefined
};

export default Biographie;
