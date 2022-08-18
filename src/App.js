import React, { useState } from 'react';
import Map from './components/map';

import './App.scss';
import Sidebar from './components/Sidebar.jsx';




function App() {

  const [checked, setChecked] = useState([]);

  function handleCheck(checked) {

    setChecked(checked);


  };



  return (

    <div className='App'>
      
      

        <div >
          <Map
            checked={checked}

          />
        </div>
        <div>
          <Sidebar
            handleCheck={handleCheck}
            checked={checked}
            
          />
        </div>



      
    </div>
  )
}

export default App;