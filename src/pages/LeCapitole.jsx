import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import List from 'grommet/components/List';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import CheckBox from 'grommet/components/CheckBox';
import _ from 'lodash';

import Minimap from '../components/Minimap';
import MyMarker from '../components/MyMarker';
import PlaceItem from '../components/PlaceItem';
import Page from '../components/Page';

class LeCapitole extends Component {
  constructor() {
    super();
    this.state = {
      selectedItem: undefined,
      status: {
        parking: true,
        hotels: true,
        restaurants: true
      },
      capitole: {
        name: 'Mairie de Toulouse',
        adress: '1 place du capitole, 31100, Toulouse',
        description: 'Le capitole',
        lat: 43.6042805,
        lng: 1.4442054
      },
      places:
      [{
        key: 'parking',
        label: 'Parking',
        color: 'green',
        title: 'Où se garer ?',
        items: [{
          name: 'Parking capitole',
          adress: '11 place du capitole, 31100, Toulouse',
          description: 'Parking le plus proche, sous la place du capitole, mais toujours en bordel',
          lat: 43.6040203,
          lng: 1.4416358
        }, {
          name: 'Parking Jean Jaurès',
          adress: '27 Allée Jean Jaurès',
          description: 'Parking un peu plus loin mais plus facile d\'accès',
          lat: 43.6060574,
          lng: 1.4473114
        }, {
          name: 'Parking Jeanne d\'Arc',
          adress: '8 Place Jeanne d\'Arc',
          description: 'Parking encore plus loin mais envisageable si les deux premiers sont complets',
          lat: 43.6096502,
          lng: 1.4445262
        }]
      }, {
        key: 'hotels',
        label: 'Hôtels',
        color: 'purple',
        title: 'Où loger ?',
        items: [{
          name: 'Hôtel Ours Blanc',
          site: { adress: 'http://victor-hugo.hotel-oursblanc.com/' },
          adress: '25 Place Victor Hugo',
          description: 'Hôtel basique aux chambres épurées, suite avec toit-terrasse et espace de réception.',
          stars: 2,
          lat: 43.6070317,
          lng: 1.4440239
        }, {
          name: 'Hôtel Le Capitole',
          site: { adress: 'http://www.hotel-capitole.com/' },
          adress: '10 Rue Rivals',
          description: 'Hôtel traditionnel, chambres conviviales avec télévision à écran plat, espace repas, service de chambre.',
          stars: 2,
          lat: 43.6059728,
          lng: 1.4429182
        }, {
          name: 'Hôtel Wilson Square',
          site: { adress: 'http://www.hotelwilsonsquare.fr/' },
          adress: '12 Rue d\'Austerlitz',
          description: 'Cet hébergement chaleureux au décor discret propose des chambres fonctionnelles avec SDB et wifi gratuit.',
          stars: 2,
          lat: 43.606117,
          lng: 1.4453065
        }]
      }, {
        key: 'restaurants',
        label: 'Restaurants',
        color: 'orange',
        title: 'Où grailler ?',
        items: [{
          name: 'Le Flower\'s Café',
          site: { adress: 'http://www.theflowerscafe.com' },
          adress: '6 Place Roger Salengro',
          description: 'Salon de thé cosy, belles salades, tartes salées et pâtisseries maison, dans une ambiance épicerie',
          lat: 43.6028984,
          lng: 1.4429325
        }, {
          name: 'La Villa tropézienne',
          site: { adress: 'http://www.villatropezienne.fr' },
          adress: '8-10 Place Victor Hugo',
          description: 'Restaurant méridional au cadre design, spécialités de poisson et risotto.',
          lat: 43.6061265,
          lng: 1.4449277
        }, {
          name: 'Le May',
          site: { adress: 'http://lemay-toulouse.fr' },
          adress: '4 Rue du May',
          description: 'Dans une salle aux briques apparentes, ce restaurant très sympa et détendu sert une cuisine traditionnelle du Sud-Ouest.',
          lat: 43.602012,
          lng: 1.4405793
        }, {
          name: 'Le Louchebem',
          site: {
            name: 'Page TripAdvisor',
            adress: 'https://www.tripadvisor.fr/Restaurant_Review-g187175-d1016698-Reviews-Le_Louchebem-Toulouse_Haute_Garonne_Occitanie.html'
          },
          adress: '3 Place Victor Hugo',
          description: 'Ce restaurant typique et familial privilégie la viande et les produits du marché Victor Hugo, juste en dessous. (Excellente saucisse de Toulouse servie avec une purée maison).',
          lat: 43.6077544,
          lng: 1.4451734
        }]
      }]
    };
  }

  getSelectedItemIndexInCategory() {
    return [_.findIndex(this.state.places, (place) => place.items.indexOf(this.state.selectedItem) > -1)];
  }

  toggleStatus(key) {
    this.setState({ status: { ...this.state.status, [key]: !this.state.status[key] } });
  }

  selectItem(item) {
    this.setState({ selectedItem: item });
  }


  selectFromCategory(categoryKey, index) {
    const category = this.state.places.find((place) => place.key === categoryKey);
    if (category && category.items[index]) {
      this.setState({ selectedItem: category.items[index] });
    }
  }

  render() {
    return (
      <Page parentProps={this.props}>
        <Box flex="grow">
          <Split separator={false} flex="right" fixed={false}>
            <Box align="stretch" pad="small" size="medium">
              <Accordion active={this.getSelectedItemIndexInCategory()}>
                {
                  this.state.places.map((category, index) => (<AccordionPanel heading={category.title} key={_.random(50000)} className={`placeCategory${category.color}`}>
                    <List selected={category.items.indexOf(this.state.selectedItem)} onSelect={this.selectFromCategory.bind(this, category.key)} selectable>
                      {category.items.map((item) => (<PlaceItem place={item} key={_.random(50000)} />))}
                    </List>
                  </AccordionPanel>))
                }
              </Accordion>
            </Box>
            <Box justify="start" align="center" pad="small" alignContent="start">
              <Box direction="row" flex={false}>
                {
                  this.state.places.map((category) => (
                    <CheckBox label={category.label} className={`placeCategory${category.color}`} key={category.key} checked={this.state.status[category.key]} onChange={() => this.toggleStatus(category.key)} toggle />
                  ))
                }
              </Box>
              <Box margin={{ vertical: 'small' }} size="large">
                <Minimap height="500px" zoom={15}>
                  <MyMarker lat={this.state.capitole.lat} lng={this.state.capitole.lng} title={this.state.capitole.name} isSelected={this.state.selectedItem === this.state.capitole} onSelect={this.selectItem.bind(this, this.state.capitole)} onUnselect={this.selectItem.bind(this, undefined)} />
                  {
                    _.flatten(this.state.places.map((category) => (
                      this.state.status[category.key] && category.items.map((item) => (
                        <MyMarker lat={item.lat} lng={item.lng} title={item.name} color={category.color} key={item.name} isSelected={this.state.selectedItem === item} onSelect={this.selectItem.bind(this, item)} onUnselect={this.selectItem.bind(this, undefined)} />
                      ))
                    )))
                  }
                </Minimap>
              </Box>
            </Box>
          </Split>
        </Box>
      </Page>
    );
  }
}

export default LeCapitole;
