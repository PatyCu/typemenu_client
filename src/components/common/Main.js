import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/HomePage';
import NewMenu from '../menu/NewMenu';
import AboutPage from '../about/AboutPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/new_menu" component={NewMenu} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </main>
)

export default Main
