import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkmark from 'grommet/components/icons/base/Checkmark';
import Close from 'grommet/components/icons/base/Close';
import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import Box from 'grommet/components/Box';
import _ from 'lodash';

import Homme from '../../public/homme.png';
import Femme from '../../public/femme.png';
import Garcon from '../../public/garcon.png';
import Fille from '../../public/fille.png';
import Bebe from '../../public/bebe.png';


class Personne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      willCome: props.willCome,
      age: props.age || ''
    };
  }

  icons = {
    homme: Homme,
    femme: Femme,
    garcon: Garcon,
    fille: Fille,
    bebe: Bebe
  }

  changeWillComeStatus(willCome) {
    this.setState({ willCome });
    this.props.onChange(willCome, undefined);
  }

  onChangeAge(event) {
    const newAge = event.target.value;
    if (newAge >= 0 && newAge <= 99) {
      this.setState({ age: event.target.value });
      this.props.onChange(undefined, event.target.value);
    }
  }

  render() {
    return (
      <Box direction="row" pad="small" justify="start" full="horizontal">
        <Box direction="row" margin={{ horizontal: 'large' }} responsive={false}>
          <Image src={this.icons[this.props.type]} size="thumb" fit="contain" />
          <TextInput value={this.props.nom} disabled />
        </Box>
        <Box direction="row" margin={{ horizontal: 'large' }} align="center" responsive={false}>
          <Box>
            <Button icon={<Checkmark />} label="Oui" onClick={this.changeWillComeStatus.bind(this, true)} secondary={_.isUndefined(this.state.willCome) || !this.state.willCome} primary={this.state.willCome} />
          </Box>
          <Box>
            <Button className="buttonNotComing" icon={<Close />} label="Non" onClick={this.changeWillComeStatus.bind(this, false)} secondary={_.isUndefined(this.state.willCome) || this.state.willCome} primary={!_.isUndefined(this.state.willCome) && !this.state.willCome} />
          </Box>
        </Box>
        {
          ['garcon', 'fille', 'bebe'].includes(this.props.type) && <Box direction="row" margin={{ horizontal: 'medium' }} align="center">
            <Box flex="grow" margin={{ horizontal: 'medium' }}>&Acirc;ge ?</Box>
            <NumberInput value={this.state.age} onChange={this.onChangeAge.bind(this)} min={0} max={12} />
          </Box>
        }
      </Box>);
  }
}

Personne.propTypes = {
  willCome: PropTypes.bool,
  onChange: PropTypes.func,
  age: PropTypes.number,
  type: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired
};

Personne.defaultProps = {
  willCome: undefined,
  age: undefined,
  onChange: _.noop
};

export default Personne;

