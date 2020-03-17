import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import  MenPage from './pages/menpage/menpage.component.jsx';
import WomenPage from './pages/womenpage/womenpage.component.jsx';
import './App.css';




function App() {
  return (
    <div>
      <Switch>
        <Route exact path= '/' component= {HomePage} />
        <Route exact path= '/women' component= {WomenPage} />
        <Route path= '/men' component= {MenPage} />
        <Route path = '/women' component = {WomenPage} />
      </Switch>
    </div>
  );
}

export default App;
