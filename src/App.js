import React , { useState }from 'react';
import Map from './components/map';

import './App.css';
import Sidebar from './components/Sidebar.jsx';



function App() {

  const [checked,setChecked] = useState([]);

  function handleCheck(checked){

    setChecked(checked);
    console.log(checked);

  };

  

  return (
    <div className="row App">

      <div className='col-9'>
        <Map 
          checked = {checked}
          
        />
        </div>
      <div className='col'>
        <Sidebar 
          handleCheck = {handleCheck}
          checked = {checked}
        />
        </div>



    </div>
  )
}

export default App;