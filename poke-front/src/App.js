import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

// Page Imports
import {
  MainSearch,
  EntryPage
} from './Pages';

import {
  Navbar
} from './Components';

export default function App() {

  const [tab, setTab] = useState('home');

  return (
    <div className="mainBody">
      <Navbar setTab={setTab} tab={tab}/>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={ EntryPage }/>
            <Route exact path='/pokedex' render={()=> <MainSearch tab={tab}/>} /> 
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
