import React from 'react';
import logo from './../logo.svg';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

import './headers.css';



function Header() {
  return (
    <div className='header'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className='header__logo'>
            <Link to={`/`} className="logo-link">
              Hotel in Ukraine
              <img src={logo} className="logo" alt="logo"/>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;
