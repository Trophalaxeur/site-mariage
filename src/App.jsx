import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GrommetApp from 'grommet/components/App';

import NotrePresence from './pages/NotrePresence';
import Galleries from './pages/Galleries';
import InformationsPratique from './pages/InformationsPratique';
import Login from './pages/Login';
import Accueil from './pages/Accueil';
import LesMaries from './pages/LesMaries';
import LeMariage from './pages/LeMariage';
import LeCapitole from './pages/LeCapitole';
import LeMoulin from './pages/LeMoulin';
import ListeMariage from './pages/ListeMariage';
import FAQ from './pages/FAQ';

import './App.scss';
import { auth, storageKey } from './api';

class App extends Component {
  static childContextTypes = {
    uid: React.PropTypes.string
  }

  state = {
    uid: null
  };

  getChildContext() {
    return { uid: this.state.uid };
  }

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({
          uid: user.uid
        });
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({
          uid: null
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated() {
    return !!this.state.uid;
  }

  render() {
    return (
      <HashRouter>
        {this.isAuthenticated()
          ? <GrommetApp centered>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Accueil} />
            <Route path="/notrepresence" component={NotrePresence} />
            {/* <Route path="/galleries" component={Galleries} />*/}
            <Route path="/galleries/:name" component={Galleries} />
            <Route exact path="/galleries" component={Galleries} />
            <Route path="/informationspratique/capitole" component={LeCapitole} />
            <Route path="/informationspratique/moulin" component={LeMoulin} />
            <Route exact path="/informationspratique" component={InformationsPratique} />
            <Route path="/lesmaries" component={LesMaries} />
            <Route path="/lemariage" component={LeMariage} />
            <Route path="/listemariage" component={ListeMariage} />
            <Route path="/faq" component={FAQ} />
          </GrommetApp>
          : <GrommetApp><Login /></GrommetApp>}
      </HashRouter>
    );
  }
}

export default App;
