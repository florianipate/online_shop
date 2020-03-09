import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const WomenPage = () => (
  <div>
    <h1>Women Page</h1>
  </div>
);
const MenPage = () => (
  <div>
    <h1>Men Page</h1>
  </div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact path= '/' component= {HomePage} />
        <Route path= '/women' component= {WomenPage} />
        <Route path= '/men' component= {MenPage} />
      </Switch>
    </div>
  );
}

export default App;
