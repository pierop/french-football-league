import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import League from './League/League';
import TeamDetails from './TeamDetails/TeamDetails';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={League} />
        <Route path="/team/:id" component={TeamDetails} />
      </Switch>
    );
  }
}

export default App;
