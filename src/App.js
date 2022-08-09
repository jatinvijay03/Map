import React , { useState }from 'react';
import Map from './components/map';

import './App.scss';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/navbar';



function App() {

  const [checked,setChecked] = useState([]);

  function handleCheck(checked){

    setChecked(checked);
    

  };

  

  return (

    <div className='App'>
    <Navbar/>
    <div className="row">

      <div className='col-9 Map'>
        <Map 
          checked = {checked}
          
        />
        </div>
      <div className='col-3 Sidebar'>
        <Sidebar 
          handleCheck = {handleCheck}
          checked = {checked}
        />
        </div>



    </div>
    </div>
  )
}

export default App;