import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Logout from 'grommet/components/icons/base/Logout';
import { auth } from '../api';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["logout"] }] */
class Nav extends Component {

  constructor(props) {
    super(props);
    this.currentMenu = _.findLast(this.menu, (menu) => _.startsWith(props.currentPath, menu.href));
    this.currentMenu.className = 'active';
    if (this.currentMenu.children && this.currentMenu.children.length > 0) {
      const currentSubMenu = _.find(this.currentMenu.children, (menu) => _.startsWith(props.currentPath, menu.href));
      currentSubMenu && (currentSubMenu.className = 'active');
    }
  }

  getSubMenu() {
    if (this.currentMenu.children && this.currentMenu.children.length > 0) {
      return (<Menu inline direction="row" flex="grow" justify="center" responsive={false}>
        {
          this.currentMenu.children.map((menu) => <Anchor key={menu.href} path={menu.href} className={menu.className}>{menu.title}</Anchor>)
        }
      </Menu>);
    }
    return undefined;
  }

  logout() {
    auth.signOut();
  }

  menu = [
    { href: '/', title: 'Accueil' },
    { href: '/lesmaries', title: 'Les Mariés' },
    { href: '/lemariage', title: 'Le Mariage' },
    { href: '/listemariage', title: 'Liste de Mariage' },
    {
      href: '/informationspratique',
      title: 'Informations Pratiques',
      children: [
        { href: '/informationspratique/capitole', title: 'Le Capitole' },
        { href: '/informationspratique/moulin', title: 'Le Moulin' }
      ]
    },
    { href: '/notrepresence', title: 'Notre Présence' },
    { href: '/galleries', title: 'Photos' },
    { href: '/faq', title: 'F.A.Q.' }
  ];

  render() {
    return (
      <Header direction="column" pad="small">
        <Box direction="row" full="horizontal" colorIndex="neutral-3" responsive={false}>
          <Menu inline direction="row" flex="grow" justify="center" fill={false}>
            {
              this.menu.map((menu) => <Anchor key={menu.href} path={menu.href} className={menu.className} >{menu.title}</Anchor>)
            }
          </Menu>
          <Button icon={<Logout />} onClick={() => this.logout()} primary={false} secondary={false} plain />
        </Box>
        <Box direction="row" full="horizontal" colorIndex="neutral-3">
          {this.getSubMenu()}
        </Box>
      </Header>
    );
  }
}

Nav.propTypes = {
  currentPath: PropTypes.string
};

Nav.defaultProps = {
  currentPath: '/'
};


export default Nav;
