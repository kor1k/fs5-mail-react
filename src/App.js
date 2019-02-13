import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main'
import Some from './pages/Some'
import Feedback from './components/Feedback'

class App extends Component {
  render() {
    return (
        <>
            <Switch>
                <Route path="/some/:id" render={(props) => (
                    <Some {...props} data='some data'/>
                )} />
                <Route path="/contacts" component={Some} />
                <Route path="/feedback" component={Feedback} />
                <Route path="/" component={Main} />
            </Switch>
        </>
    );
  }
}

export default App;
