
import './Appa.css';
 import Navbar from './componenets/Navbar';
 import Alert from './componenets/Alert';
  import TextBox from './componenets/TextBox'
//  import About from './componenets/About';
 import React, { useState } from 'react'
//  import { BrowserRouter, Routes, Route } from "react-router-dom";

// import TextBox from './componenets/TextBox';
// import Header from './componenets/Header';
// import Text from './componenets/Text';
// import Copyright from './componenets/Copyright';


function App() {
   const [mode,setmode]=useState("light");
    const togglemode=()=>{
     if(mode==='light')
     {
       setmode('dark');
     showAlert("You had switched to dark mode", "success");
       document.body.style.backgroundColor='rgb(0 15 30)';
     }
     else{
       setmode('light');
        showAlert("You had switched to light mode", "success");
        document.body.style.backgroundColor='white';     }


   }
   const [alert, setAlert]=useState(null);
   const showAlert=(message,type)=>{

    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    },2000)
   }
   
   

  
  return (
    
   <>
   {/* <BrowserRouter> */}
   <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
   <Alert  alert={alert}/>
   <div className="container my-3 ">
    {/* <Routes> */}
          {/* <Route path="/" element={<TextBox heading="Enter text here to analyze below" mode={mode} />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
         
       {/* </Routes>  */}
   

<TextBox heading="Enter text here to analyze below" mode={mode} />
   
   </div>
    {/* </BrowserRouter> */}
</>
  );
}

export default App;







