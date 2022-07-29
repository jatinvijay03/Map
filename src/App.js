import React from 'react';
import Map from './components/map';

import './App.css';
import Sidebar from './components/Sidebar.jsx';



function App() {
  return (
    <div className="row App">

      <div className='col-9'>
        <Map />
        </div>
      <div className='col'>
        <Sidebar />
        </div>



    </div>
  )
}

export default App;