import React from 'react';
import NavBar from './Components NavBAr/NavBar';
import {action, originals} from './url'
import './App.css'
import Banner from './Components NavBAr/Banner/Banner';
import RowPost from './Components NavBAr/RowPost/RowPost';

function App() {
  return (
<div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Muthflix Originals'/>
    <RowPost url={action} title='Action' isSmall />
</div>
  );
}

export default App;
