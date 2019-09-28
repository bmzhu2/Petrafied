import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Nav from './nav/nav'
import Petra from './petra';
import Home from './home/home';
import ErrorPage from './error_page';

const App = () => (
    <>
      <header>
        <Nav />
      </header>
      <Petra />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/" component={ErrorPage}/>
      </Switch>
    </>
)


export default App