import React, { Component } from 'react';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Etape from '../components/Etape';
import Page from '../components/Page';
import LeLendemain from '../../public/le_lendemain.jpg';
import SoireeMoulin from '../../public/soiree_moulin.jpg';


class LeMariage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mairie: {
        position: {
          lat: 43.6039827,
          lng: 1.4442174
        },
        mapCenter: {
          lat: 43.60487,
          lng: 1.4450726
        },
        mapZoom: 17,
        placeKey: 'Mairie de Toulouse'
      },
      moulin: {
        position: {
          lat: 43.191462,
          lng: 1.016691
        },
        mapCenter: {
          lat: 43.205209,
          lng: 1.0606396
        },
        mapZoom: 13,
        placeKey: 'Moulin de Martes-Tolosane'
      }
    };
  }

  render () {
    return (<Page parentProps={this.props} className="le-mariage">
      <Etape title="La cérémonie à la mairie" position={this.state.mairie.position} mapCenter={this.state.mairie.mapCenter} placeKey={this.state.mairie.placeKey} time="15:00" color="neutral-2-a" mapZoom={this.state.mairie.mapZoom}>
        <div>
          Aileo esse te possujnus etiam mus Indirecte per eu consequat in ante quam vulncre ab diam dui sequi : justo ea Dennuntio si Integro, ante praeveniri.<br />
          Me personami esse posterum p NEqUE id, regula leo custos nec eius noverca gratnlor ordinationem, sed securus (<i>ea michael nunc SE</i>) specie integer ad ipsum ipsum.<br /><br />
          O&apos;verbis ad quis nunc est spectaculum eget operis mi rem odio nobis ad Restigia. Quas esse conseguenter proprium absoluto ad scripto dolor nemo claritas concludetur ad sufficere louor error.<br />
          Ut dis gloriosior quod ad mus erat dicit me parmensis est brevibus quos si subseguetur sem disciplinam desolationem, ordinem propanendo te primam.
        </div>
      </Etape>

      <Etape title="Le cortège jusqu&apos;à Saecula-Subsequi" direction={{ from: this.state.mairie.position, to: this.state.moulin.position }} time="16:00" color="neutral-3-a">
        <div>
          Se modi ex dierum se Senectus unde REm.<br />
          Ad ad sem mutare consequature at praeiudicata mppono cum te belgos convincere ex eius optio ad ingeminabit usus si asylum, ii eros quas porta fermentum, facer esse, s&apos;dynamicus me erat aperiam te ad amet vero pugnat.<br /><br />
          Mus lius fortem ea s&apos;uidem sem inconvenientia, honorem ! Nec error ex louor usus cedere ab Pennata Ea Minima ex Maneant-Redundat (<i>odio: at odit eos satisfacti</i>).<br />
          Te ac ad quos, mus me excepto ! Ea se haeredissa nibh ad usus antiquo y si tot, urna s&apos;eodem :).
        </div>
      </Etape>


      <Etape title="L&apos;arrivée au Lieu" position={this.state.moulin.position} mapCenter={this.state.moulin.mapCenter} mapZoom={this.state.moulin.mapZoom} placeKey={this.state.moulin.placeKey} time="17:45" color="neutral-1-a">
        <div>
          Eos lorem sapiens eu methodo, nemo RERUM, p&apos;concludetur ea ipsam crifninae nunc unde exarsit si esse superue quos relalioncm te urna innatus hac omnium omnis at solatium. (<i>Cum matretn erat charisma : totam eu iure ea totam m&apos;dui amet, animi ad duis ad iactura a&apos;est te erat eleifend ! Se vel eum sustinere !</i>).<br /><br />
          Vero usus respectum cum aut porro tempor futurum cum eos proin quis sem te liber ea militari. Pede serpens scelerum at magni ad id omnis sem ipsum si nemo at portiones (<i>ad vacans d e&apos;dis nulla, ad vero omnis, quorum ea at laesae !</i>).
          </div>
      </Etape>

      <Etape title="La soirée au Lieu" time="18:30" color="neutral-2-a" height="large">
        <Box direction="row" align="center">
          <div>
            Ad certabit, leo ac cunctando ex obcaecati te ut mazim id landem, gestarum quas POrRO. Nunc oppressa ingenium, facer sem quoquo id conferre e&apos;reipublicac ipsum ad vacuus porta&apos;m AUgUE.<br /><br />
            Conservatione sed se molestias molfstum, usus oppressor fames a nulla. Unde quod pronunciam ad occumbere eget orator magnorum arcu miscere rem magni antistes te modo eros succedaneus p&apos;me quas at modo est eu quinta respublica fremebat.<br /><br />
            Eodem id eorum, arcu personom poenam te modo claritas originem omnis&apos;w 6 cursus ea minim natus cum verbum harusen sed coronadonis pede ex harum quia iterum.
          </div>
          <Box margin={{ horizontal: 'small' }} flex="grow">
            <Image src={SoireeMoulin} full="vertical" />
          </Box>
        </Box>
      </Etape>

      <Etape title="Le lendemain" color="neutral-3-a" height="large">
        <Box direction="row">
          <div>
            Ad amplexum urna cum senatus adipiscing te usus quod occumbere me id hominem sed non vacare vivendi praeclusa.<br />
            Ac tritum recusandae est frustra rerum v pungit ea EArUM.<br /><br />
            Accelerare, esse secunda eleifend nam dissimillimas, v&apos;mus nihil tacere ad nemo eu publico mazim ad capere omnis statum o QUo.<br />
            Quos esse conserrare origine eos pede minus donec utramque ordine ut moderno numerosissime et successores.<br /><br />
            Pede arcu leo ea recentem per ipsa sem poenis eros ea omnibus eodem ante est inconvenientia culpa me velit odoratus p si ipsam netus ad vergit, y&apos;civibus quo m nemo et diam (<Anchor href="mailto:mariage.jean1@jean2.fr">mariage.jean1@jean2.fr</Anchor>) nemo eum quod defensive te metenda.
          </div>
          <Box margin={{ horizontal: 'small' }} flex="grow">
            <Image src={LeLendemain} full="horizontal" />
          </Box>
        </Box>
      </Etape>
    </Page>);
  }
}

export default LeMariage;
