import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/MyAlert'; 
import { useState } from 'react';

import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"

function App() 
{
  const [alert1,setAlert]=useState(null)
  const newAlert=(message,type)=>
  {
    setAlert(
    {
      msg:message,
      type:type
    })
  }
  const [mode,setMode]=useState("light");



  const RemoveBg=()=>
  {
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');

  }


  const newMode=(cls)=>{
    RemoveBg();
    document.body.classList.add('bg-'+cls);
    if(cls==='light')
    {
      setMode('light');
      document.body.style.color="black";
    }
    else
    {
      document.body.style.color="white";
      setMode('dark');
    }
    // for dark mode and light mode 
    // if(mode==="light")
    // {
    //   setMode("dark");
    //   document.body.style.background="#212121";
    //   document.body.style.color="white";
    //   newAlert("Dark Mode Enabled","Success");
    //   document.title="String All:Dark Mode"
    // }
    // else{
    //   setMode("light");
    //   document.body.style.background="white";
    //   document.body.style.color="black";
    //   newAlert("Light Mode Enabled","Success");
    //   document.title="String All:light Mode"

    // }
  }

  return(
      <>
      <Router>
        <Navbar heading="Neeraj" about="About" mode={mode} ToggleMode={newMode}/>
        <Alert alertMsg={alert1} />

        <Routes>
          <Route exact path="/" element={<Form heading="comment"/>} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes> 

      </Router>    
      </>
  );
}
export default App;