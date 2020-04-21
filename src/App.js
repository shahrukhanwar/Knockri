import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import CandidateList from './components/CandidateList';
import CandidateDetails from './components/CandidateDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CandidateList} />
        <Route path="/:id" exact component={CandidateDetails} />
      </Switch>
    </Router>
  );
};

export default App;
