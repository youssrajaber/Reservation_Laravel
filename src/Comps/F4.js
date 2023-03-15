import React , {useState} from'react' 
import { Link } from 'react-router-dom'
import './style.css'
import {useSelector,useDispatch} from 'react-redux'
export default function F3() {  
  const st=useSelector(state=>state.st)
  const displatch=useDispatch()
  function f4(){
    displatch({
      type:"f4"
    })
  }
  return ( 
    <div className='f1'> 
      <form action="#" onSubmit={(e)=>{e.preventDefault()}}> 
        
        <div>
            <label For="from">Card Number:</label> 
            <input type="text" name="cn"  id="from"/>
        </div>

        <div>
            <label For="To">Card Name:</label> 
            <input type="text" name="cnm" id="To" />
        </div>

        <div>
            <label For="going">Expiry Date:</label> 
            <input type="date" name="exd" id="going" />
        </div>
        <div>
            <label for="ad">CVV:</label> 
            <input type="text" name="cvv" id="ad" />
        </div>
        <div>
          <label htmlFor="">&nbsp;</label>
          <Link to="/ff"><button type="button" onClick={f4}>Done</button> </Link>
        </div>
      </form> 
    </div> 
  ) 
}
