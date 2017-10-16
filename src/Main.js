import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';
import Team from './views/Team/Team';

class Main extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
      </Switch>
    )
  }
}


export default Main;