import * as React from 'react';
import logo from './logo.svg';
import { types } from './types';
/* TODO this should be a count of only the unread messages */

function Header(props: types['HeaderProps']){
  return (
    <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Notes Viewer Test App</h1>
        <div className='Unread'>
          Unread:
          <span className='App-title-unread-count'>
            {props.unread}
          </span>
        </div>
      </header>
  );
}

export default Header;
