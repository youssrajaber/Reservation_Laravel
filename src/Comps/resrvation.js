import React, { useState } from "react"; 
import './style.css'
import F1 from "./f1"; 
import F2 from "./f2"; 
import F3 from "./f3"; 
 
export default function Resrvation() { 
  const [activeScreen, setActiveScreen] = useState("f1"); 

  return ( 
    <div className="reservation"> 
      <div className="nav"> 
        <div><h2>Search for flights</h2></div> 
        <div><h2>Choose youre flight</h2></div> 
        <div><h2>Enter data</h2></div> 
        <div><h2>Pay & confirm reservation</h2></div> 
      </div> 
      <F1/>
    </div> 
  ); 
} 
