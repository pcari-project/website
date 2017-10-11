import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home/Home';
import About from './views/About/About';

class Main extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    )
  }
}


export default Main;