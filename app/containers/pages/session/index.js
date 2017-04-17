import React, { Component } from 'react';
import { Input, Label, Menu, Image, Icon } from 'semantic-ui-react'

import Navigation from '../../../components/navigation/index';

import './session.less';

class Session extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }) 

  render() {
    const { activeItem } = this.state;

    return (
      <div className='page page--session'>
        <Navigation />
        <div className='container'>
          <Menu vertical>
            <Menu.Item>
              <Image src='http://wesleydebruijn.nl/assets/img/wesleydebruijn.png' size='tiny' shape='circular' />
              <br />
              <b>Wesley de Bruijn</b>
            </Menu.Item>
            <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
              Dashboard
            </Menu.Item>

             <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
              <Label color="green">2</Label>
              Current sessions
            </Menu.Item>

            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              <Label>51</Label>
              Session history
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Session;
