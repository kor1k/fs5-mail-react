import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main'
import Some from './pages/Some'

class App extends Component {
  render() {
    return (
        <>
            <Route exact path="/" component={Main} />
            <Route path="/some/static1/:id/:second" render={(props) => (
                <Some {...props} data='some data'/>
            )} />
        </>
    );
  }
}

export default App;
