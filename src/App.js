import React, { useState } from 'react';
import Map from './components/map';

import './App.scss';
import Sidebar from './components/Sidebar.jsx';




function App() {

  const [checked, setChecked] = useState([]);

  function handleCheck(checked) {

    setChecked(checked);

    


  };

  const [checkedBase, setcheckedBase] = useState([]);

  function handleCheckBase(checkedBase) {

    setcheckedBase(checkedBase);
    
  };



  return (

    <div className='App'>
      
      

        <div >
          <Map
            checked={checked}
            checkedBase = {checkedBase}

          />
        </div>
        <div>
          <Sidebar
            handleCheck={handleCheck}
            checked={checked}
            handleCheckBase={handleCheckBase}
            checkedBase={checkedBase}
            
          />
        </div>



      
    </div>
  )
}

export default App;