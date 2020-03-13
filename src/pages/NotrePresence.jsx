import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import TextInput from 'grommet/components/TextInput';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import RadioButton from 'grommet/components/RadioButton';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Form from 'grommet/components/Form';
import Quote from 'grommet/components/Quote';
import FormField from 'grommet/components/FormField';
import _ from 'lodash';
import Page from '../components/Page';
import Personne from '../components/Personne';
import SaveStatus from '../components/SaveStatus';
import { db } from '../api';


const validateEmail = (email) => {
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

class NotrePresence extends Component {

  state = {
    members: [],
    babysitter: true,
    sundayLunch: false,
    allergies: '',
    mailAdress: '',
    hasAllergie: false
  };

  componentDidMount() {
    if (this.context.uid) {
      const familyRef = db.ref(`/family/${this.context.uid}`);
      familyRef.once('value').then((snapshot) => {
        const newState = {
          hasAllergie: !!snapshot.val().hasAllergies,
          babysitter: !!snapshot.val().babysitter,
          sundayLunch: !!snapshot.val().sundayLunch,
          members: snapshot.val().members
        };
        if (!_.isUndefined(snapshot.val().allergies)) {
          newState.allergies = snapshot.val().allergies;
        }
        if (!_.isUndefined(snapshot.val().mailAdress)) {
          newState.mailAdress = snapshot.val().mailAdress;
        }
        this.setState(newState);
      });
    }
  }

  debounceOnMailAdressChange = _.debounce((mailAdress) => {
    if (mailAdress && !validateEmail(mailAdress)) {
      this.setState({ mailError: 'Adresse incorrect' });
    } else {
      const familyRef = db.ref(`/family/${this.context.uid}`);
      familyRef.update({ mailAdress }).then(() => {
        this.setState({ mailError: undefined });
        this.NewsletterStatus.state.saved();
      });
    }
  }, 1200);

  onMailAdressChange(event) {
    this.NewsletterStatus.state.saving();
    this.setState({ mailAdress: event.target.value });
    this.debounceOnMailAdressChange(event.target.value);
  }

  changeMemberStatus(person, willCome, age) {
    this.NotrePresenceStatus.state.saving();
    const index = this.state.members.findIndex((familyMember) => familyMember.name === person.name);
    const familyRef = db.ref(`/family/${this.context.uid}/members/${index}`);
    if (!_.isUndefined(willCome)) {
      familyRef.update({ willCome }).then(() => {
        this.NotrePresenceStatus.state.saved();
      });
    }
    if (!_.isUndefined(age)) {
      familyRef.update({ age }).then(() => {
        this.NotrePresenceStatus.state.saved();
      });
    }
  }

  toogleAllergie(value) {
    this.MoreInformationStatus.state.saving();
    this.setState({ hasAllergie: value });
    const familyRef = db.ref(`/family/${this.context.uid}`);
    familyRef.update({ hasAllergies: value }).then(() => {
      this.MoreInformationStatus.state.saved();
    });
  }

  toogleSundayLunch(value) {
    this.NotrePresenceStatus.state.saving();
    this.setState({ sundayLunch: value });
    const familyRef = db.ref(`/family/${this.context.uid}`);
    familyRef.update({ sundayLunch: value }).then(() => {
      this.NotrePresenceStatus.state.saved();
    });
  }

  toogleBabysitter(value) {
    this.MoreInformationStatus.state.saving();
    this.setState({ babysitter: value });
    const familyRef = db.ref(`/family/${this.context.uid}`);
    familyRef.update({ babysitter: value }).then(() => {
      this.MoreInformationStatus.state.saved();
    });
  }

  debounceAllergies = _.debounce((event) => {
    const familyRef = db.ref(`/family/${this.context.uid}`);
    familyRef.update({ allergies: this.state.allergies }).then(() => {
      this.MoreInformationStatus.state.saved();
    });
  }, 800);

  updateAllergies(event) {
    this.MoreInformationStatus.state.saving();
    this.setState({ allergies: event.target.value });
    this.debounceAllergies();
  }

  render() {
    return (
      <Page parentProps={this.props}>

        <Form plain pad="medium">
          <Box full="horizontal">
            <Box margin="none" direction="row" align="center">
              <Heading tag="h2" margin="medium">Tenez-vous au jus <Label size="small">(de raisin !)</Label></Heading>
              <SaveStatus ref={(NewsletterStatus) => { this.NewsletterStatus = NewsletterStatus; }} />
            </Box>
            <Box direction="row" align="center" justify="between">
              Renseignez votre adresse mail pour connaître les dernières évolutions du site et avoir des informations relatives au D-Day :
            </Box>
            <Box margin="medium">
              <FormField error={this.state.mailError}>
                <TextInput value={this.state.mailAdress} onDOMChange={this.onMailAdressChange.bind(this)} placeHolder="Saississez votre adresse mail" />
              </FormField>
            </Box>
            <Box margin="none" direction="row" align="center">
              <Heading tag="h2" margin="medium">Confirmez-nous votre présence</Heading>
              <SaveStatus ref={(NotrePresenceStatus) => { this.NotrePresenceStatus = NotrePresenceStatus; }} />
            </Box>
            {this.state.members.map(person => (
              <Personne type={person.gender} willCome={person.willCome} nom={person.name} age={person.age} onChange={this.changeMemberStatus.bind(this, person)} key={person.name} />
            )
            )}
            <Box margin={{ vertical: 'medium' }}>
              <span>
                Il manque un membre de votre famille ? Vous pouvez nous contacter directement à l&apos;adresse <Anchor href="mailto:mariage.jean1@jean2.fr">mariage.jean1@jean2.fr</Anchor>.
              </span>
            </Box>

            <Quote size="full">
              <Box full="horizontal" direction="row">
                <span>Un brunch campagnard est prévu le dimanche midi, serez-vous des nôtres ?</span>
                <Box direction="row" align="center" margin={{ horizontal: 'medium' }} responsive={false}>
                  <RadioButton
                    id="choice3-yes"
                    name="choice3-yes"
                    label="Oui"
                    checked={this.state.sundayLunch}
                    onChange={() => {
                      this.toogleSundayLunch(true);
                    }}
                  />
                  <RadioButton
                    id="choice3-no"
                    name="choice3-no"
                    label="Non"
                    checked={!this.state.sundayLunch}
                    onChange={() => {
                      this.toogleSundayLunch(false);
                    }}
                  />
                </Box>
              </Box>
            </Quote>
          </Box>

          <Box margin="none" direction="row" align="center">
            <Heading tag="h2" margin="medium">Informez-nous complémentairement</Heading>
            <SaveStatus ref={(MoreInformationStatus) => { this.MoreInformationStatus = MoreInformationStatus; }} />
          </Box>

          <Box full="horizontal" direction="row">
            <Paragraph>Avez-vous des allergies à signaler ?</Paragraph>
            <Box direction="row" align="center" margin={{ horizontal: 'medium' }} responsive={false}>
              <RadioButton
                id="choice1-1"
                name="choice1-1"
                label="Non"
                checked={!this.state.hasAllergie}
                onChange={() => {
                  this.toogleAllergie(false);
                }}
              />
              <RadioButton
                id="choice1-2"
                name="choice1-2"
                label="Oui"
                checked={this.state.hasAllergie}
                onChange={() => {
                  this.toogleAllergie(true);
                }}
              />
            </Box>
            <Box flex="grow" justify="center">
              <TextInput placeHolder="Saisir ici vos allergies" disabled={!this.state.hasAllergie} onDOMChange={this.updateAllergies.bind(this)} value={this.state.allergies} />
            </Box>
          </Box>

          <Box full="horizontal" direction="row">
            <span>Une babysitter est prévue, souhaitez-vous qu&apos;elle prenne en charge vos bambins ?</span>
            <Box direction="row" align="center" margin={{ horizontal: 'medium' }} responsive={false}>
              <RadioButton
                id="choice2-1"
                name="choice2-1"
                label="Non"
                checked={!this.state.babysitter}
                onChange={() => {
                  this.toogleBabysitter(false);
                }}
              />
              <RadioButton
                id="choice2-2"
                name="choice2-2"
                label="Oui"
                checked={this.state.babysitter}
                onChange={() => {
                  this.toogleBabysitter(true);
                }}
              />
            </Box>
          </Box>
          <Heading tag="h2" margin="medium">Contactez-nous</Heading>
          <Box full="horizontal" direction="row">
            <span>Que ce soit pour attirer notre attention sur des points particuliers, nous faire des retours sur ce site du feu de dieu ou nous dire que vous nous aimez parce qu&apos;on est trop beaux ! Dites-le nous à <Anchor href="mailto:mariage.jean1@jean2.fr">mariage.jean1@jean2.fr</Anchor></span>
          </Box>
        </Form>
      </Page>
    );
  }
}

NotrePresence.contextTypes = {
  uid: React.PropTypes.string
};

export default NotrePresence;
