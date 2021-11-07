import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navigation/NavigationBar';
import MenuBar from './components/navigation/MenuBar'

import {
  HomePage,
  LoginPage,
  RegisterPage,
  SearchPage
} from './pages/'

export const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={NavigationBar(HomePage)} />
      <Route path="/login" component={LoginPage} />
      <Route path="/search" component={NavigationBar(MenuBar(SearchPage))} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  </BrowserRouter>
)
