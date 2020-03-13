import React from 'react';
import PropTypes from 'prop-types';

import Article from 'grommet/components/Article';
import Image from 'grommet/components/Image';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Nav from './Nav';
import Bandeau from '../../public/bandeau.png';
import Logo from '../../public/alliances.png';


const Page = (props) => (
  <Article colorIndex="neutral-3-a" full className={props.className}>
    <Box colorIndex="neutral-1-a">
      <Box align="center" margin="small">
        <Image src={Bandeau} fit="cover" size="large" />
      </Box>
      <Nav currentPath={props.parentProps.location.pathname} />
    </Box>
    {props.children}
    <Footer justify="between" size="small" colorIndex="neutral-1-a">

      <Title><Image src={Logo} size="thumb" />Mariage Jean1 &amp; Jean2</Title>
      <Box direction="row" align="center" pad={{ between: 'medium' }}>
        <Paragraph margin="none">&copy; 2017 Jean1&amp;Jean2&apos;s company</Paragraph>
      </Box>
    </Footer>
  </Article>
);

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  parentProps: PropTypes.shape({
    location: PropTypes.shape({ pathname: PropTypes.string })
  })
};

Page.defaultProps = {
  className: undefined,
  parentProps: '/'
};

export default Page;
