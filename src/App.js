import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './Components/App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {actions, originals, comedy} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={actions} title='Netflix Originals' />
      <RowPost url={originals} title='Action Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />

    </div>
  );
}

export default App;
