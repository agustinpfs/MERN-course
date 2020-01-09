import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation'
import NoteList from './components/NoteList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

function App() {
  return (

    <Router>
      <Navigation />
      <Route path="/" exact component={NoteList} />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
