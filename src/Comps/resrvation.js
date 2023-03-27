import React, { useState } from "react"; 
import './style.css'
import {useSelector} from 'react-redux'
import F1 from "./f1"; 
import F2 from "./f2"; 
import F3 from "./f3"; 
import F4 from "./F4"; 
 
export default function Resrvation() {
  const st=useSelector(state=>state.st)
  return ( 
    <div className="reservation"> 
      <div className="nav"> 
        <div className={st==="f1"?'active':''}><h2>Search for flights</h2></div> 
        <div className={st==="f2"?'active':''}><h2>Choose youre flight</h2></div> 
        <div className={st==="f3"?'active':''}><h2>Enter data</h2></div> 
        <div className={st==="f4"?'active':''}><h2>Payment</h2></div> 
      </div> 
      {st === "f1" && ( 
        <F1/> 
      )} 
      {st === "f2" && ( 
        <F2/> 
      )}
      {st === "f3" && ( 
        <F3/> 
      )}
      {st === "f4" && ( 
        <F4/> 
      )}
    </div> 
  ); 
} 
