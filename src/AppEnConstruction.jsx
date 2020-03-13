import React from 'react';
import Image from 'grommet/components/Image';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import EnConstruction from '../public/page-en-construction.png';


const AppEnConstruction = (props) => (
  <Article>
    <Box align="center" alignContent="stretch" appCentered>
      <Image src={EnConstruction} size="large" />
      <Headline>Ouverture prévue le 20 Mai.</Headline>
    </Box>
  </Article>
);

export default AppEnConstruction;
