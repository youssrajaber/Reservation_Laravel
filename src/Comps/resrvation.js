import React, { useState } from "react"; 
import './style.css'
import {useSelector,useDispatch} from 'react-redux'
import F1 from "./f1"; 
import F2 from "./f2"; 
import F3 from "./f3"; 
 
export default function Resrvation() { 
  const displatch=useDispatch()
  const st=useSelector(state=>state.st)
  
  function f1(){
    displatch({
      type:"f1"
    })
  }
  function f2(){
    displatch({
      type:"f2"
    })
  }
  function f3(){
    displatch({
      type:"f3"
    })
  }
  function f4(){
    displatch({
      type:"f4"
    })
  }
  return ( 
    <div className="reservation"> 
      <div className="nav"> 
        <div className={st==="f1"?'active':''}><h2>Search for flights</h2></div> 
        <div className={st==="f2"?'active':''}><h2>Choose youre flight</h2></div> 
        <div className={st==="f3"?'active':''}><h2>Enter data</h2></div> 
        <div className={st==="f4"?'active':''}><h2>Pay & confirm reservation</h2></div> 
      </div> 
      {st === "f1" && ( 
        <F1 onLinkClick={f2} /> 
      )} 
      {st === "f2" && ( 
        <F2 onBackButtonClick={f3} /> 
      )}
      {st === "f3" && ( 
        <F3 onBackButtonClick={f4} /> 
      )}
    </div> 
  ); 
} 
