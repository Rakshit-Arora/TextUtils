import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
      
      <Navbar title = "TextUtils" mode={mode} about = "About Us" toggleMode = {toggleMode} />
      <Alert alert={alert}></Alert>

      <div className="container my-3">

        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} h1 = "Enter the text to analyze" mode={mode}/>}>
          </Route>
        </Routes>

      </div>

    </Router>
    </>
  );
}

export default App;

