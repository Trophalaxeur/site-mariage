import React from 'react';
import PropTypes from 'prop-types';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Page from '../components/Page';
import MartresTolosane from '../../public/martres_tolosane.jpg';
import Capitole from '../../public/capitole.jpg';

const InformationsPratique = (props) => {
  const navigateTo = (path) => {
    props.history.push(path);
  };
  return (
    <Page parentProps={props}>
      <Tiles fill flush={false} flex="grow">
        <Tile onClick={() => navigateTo('/informationspratique/capitole')}>
          <Card thumbnail={Capitole} label="Toulouse" heading="Autour du Capitole" description={<Paragraph>Ici vous trouverez quelques bonnes adresses autour du Capitole pour vous restaurer, dormir ou tout simplement pour vous garer le jour J.</Paragraph>} colorIndex="neutral-2-a" />
        </Tile>
        <Tile onClick={() => navigateTo('/informationspratique/moulin')}>
          <Card thumbnail={MartresTolosane} label="Scomata-Advcrsis" heading="Poenis ad Nimiam" description={<Paragraph>Sed totam y enim, nam progredientibus, capiat vel erosem justo nam vel suggessit ab visccra mi Aptent. </Paragraph>} colorIndex="neutral-2-a" />
        </Tile>
      </Tiles>
    </Page>
  );
};

InformationsPratique.propTypes = {
  history: PropTypes.any
};

InformationsPratique.defaultProps = {
  history: undefined
};

export default InformationsPratique;
