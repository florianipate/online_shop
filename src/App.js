import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import  MenPage from './pages/menpage/menpage.component.jsx';
import WomenPage from './pages/womenpage/womenpage.component.jsx';
import GirlsPage from './pages/girls-page/girls-page.component.jsx';
import BoysPage from './pages/boys-page/boys-page.component.jsx';
import BabyPage from './pages/baby-page/baby-page.component.jsx';
import './App.css';




function App() {
  return (
    <div>
      <Switch>
        <Route exact path= '/' component = {  HomePage } />
        <Route exact path= '/women' component = { WomenPage } />
        <Route path= '/men' component= { MenPage } />
        <Route path = '/women' component = { WomenPage } />
        <Route path = '/girls' component = { GirlsPage } />
        <Route path = '/boys' component = { BoysPage } />
        <Route path = '/baby' component = { BabyPage } />
      </Switch>
    </div>
  );
}

export default App;
