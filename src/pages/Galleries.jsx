import React from 'react';
import PropTypes from 'prop-types';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Page from '../components/Page';
import Gallery from '../components/Gallery';
import SeanceEngagement from '../../public/galleries/engagement/12.jpg';

const Galleries = (props) => {
  const navigateTo = (path) => {
    props.history.push(path);
  };

  return (
    <Page parentProps={props}>
      {!props.match.params.name && <Tiles fill flush={false} flex="grow">
        <Tile onClick={() => navigateTo('/galleries/engagement')}>
          <Card thumbnail={SeanceEngagement} label="Moenia sed Apponemus" headingStrong={false} heading="Séance engagement" description={<Paragraph>Quas cognominum usus quos narratus raptor abominationem praetensionem, atque itaque poloni partem te 68 nisi eos Victum, natus opressionem, eius ac lorem arduas d&apos;aversionem sed ut aemulam eos Axioma mus Congressu.</Paragraph>} colorIndex="neutral-2-a" />
        </Tile>
      </Tiles>}
      {props.match.params.name && <Gallery name={props.match.params.name} />}
    </Page>
  );
};

Galleries.propTypes = {
  history: PropTypes.any,
  match: PropTypes.any
};

Galleries.defaultProps = {
  history: undefined,
  match: undefined
};

export default Galleries;
