import React, { Component, Fragment } from 'react';

import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {CssBaseline} from '@material-ui/core'

import SideMenu from './Componentes/SideMenu';
import Login from './Componentes/login';
import MainPage from './Componentes/main'


const App = () => (
  <Fragment>
    <CssBaseline/>
  <BrowserRouter>
  <Switch>
    <Route path="/"component={Login} />    
    <Route path="/MainPage" component={MainPage}  />
    
  </Switch>
  </BrowserRouter>
  </Fragment>
)

export default App;