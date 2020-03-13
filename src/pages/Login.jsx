import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate, Interpolate, Trans } from 'react-i18next';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Bandeau from '../../public/bandeau.png';
import { auth } from '../api';

@translate(['view', 'nav'], { wait: true })
class Login extends Component {
  state = {};

  onFamilyCodeChange(event) {
    const codeFamille = event.target.value;
    this.setState({ codeFamille, error: undefined });
  }

  login(event) {
    const codeFamille = this.state.codeFamille.toLowerCase();
    auth.signInWithEmailAndPassword(`${codeFamille}@mariage-jean1-et-jean2a.fr`, codeFamille).catch((err) => {
      this.setState({ error: 'Code famille incorrect' });
    });
  }

  render() {
    const { t } = this.props;
    return (
      <Article alignContent="stretch">
        <Box align="center" full alignContent="stretch">
          <Image src={Bandeau} size="large" />
          <Form onSubmit={(event) => event.preventDefault()}>
            <Box align="center" margin="small">
              <Heading className="fontGreatVibes fontWineColor" align="center" margin="small" size="medium">
                {t('common:title.login')}
              </Heading>
            </Box>
            <Box align="center" margin="medium">
              <FormField label="Veuillez saisir votre code famille" error={this.state.error}>
                <TextInput id="login" onDOMChange={this.onFamilyCodeChange.bind(this)} />
              </FormField>
            </Box>
            <Box align="center" margin="medium">
              <Button primary fill type="submit" onClick={this.login.bind(this)}>
                <Box pad="small" align="center">Se connecter</Box>
              </Button>
            </Box>
          </Form>
        </Box>
      </Article>
    );
  }
}


Login.propTypes = {
  t: PropTypes.any
};

Login.defaultProps = {
  t: undefined
};


export default Login;
