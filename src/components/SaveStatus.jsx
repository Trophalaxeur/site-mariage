import React, { Component } from 'react';
import Spinning from 'grommet/components/icons/Spinning';
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark';
import Box from 'grommet/components/Box';
import _ from 'lodash';

class SaveStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: this.saving.bind(this),
      saved: this.throttledSaved.bind(this),
      isSaving: false,
      isSaved: false
    };
  }

  throttledSaved = _.debounce(() => {
    this.setState({ isSaving: false, isSaved: true });
  }, 1000, { trailing: true });

  saving() {
    this.throttledSaved.cancel();
    this.setState({ isSaving: true, isSaved: false });
  }

  render() {
    return (<Box margin={{ horizontal: 'medium' }}>
      {this.state.isSaving && <Spinning />}
      {this.state.isSaved && <CheckmarkIcon colorIndex="brand" />}
    </Box>);
  }
}

export default SaveStatus;
