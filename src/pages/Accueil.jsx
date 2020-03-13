import React from 'react';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Page from '../components/Page';

const Accueil = (props) => (
  <Page parentProps={props}>
    <Box flex="grow">
      <Headline className="fontGreatVibes fontWineColor" align="center" margin="large" size="medium">
        Mariage de Jean1 et Jean2
      </Headline>
      <Headline className="fontGreatVibes" align="center" margin="small" size="medium">
        Cuvée d’exception
      </Headline>
      <Headline className="fontCrimsonText fontBottleColor" align="center" margin="small" size="small">
        Mise en bouteille le 1 janvier 2999
      </Headline>
      <Headline className="fontEBGaramond fontWineColor" align="center" margin="small" size="small">
        Ville
      </Headline>
    </Box>
  </Page>
);

export default Accueil;
