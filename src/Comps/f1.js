import React , {useState} from'react' 
import './style.css'
import {useDispatch} from 'react-redux'
export default function F1() {  
  const displatch=useDispatch()
  function f2(){
    displatch({
      type:"f2"
    })
  }
  return ( 
    <div className='f1'> 
      <form action="#" onSubmit={(e)=>{e.preventDefault()}}> 
        
        <div>
            <label For="from">From</label> 
            <select id="from">
                <option value="">o</option>
                <option value="">o</option>
                <option value="">o</option>
            </select> 
        </div>

        <div>
            <label For="To">To</label> 
            <select id="To">
                <option value="">o</option>
                <option value="">o</option>
                <option value="">o</option>
            </select> 
        </div>

        <div>
            <label For="going">Date of going</label> 
            <input type="date" name="going" id="going" />
        </div>
            <div>
                <label for="ad">Passengers</label> 
                <input type="number" name="going" id="ad" />
            </div>
            <div>
                <label for="ch">Class</label> 
                <select id="To">
                    <option value="Economy class">Economy class</option>
                    <option value="Buissniss class">Buissniss class</option>
                </select>
            </div>
        <div>
          <label htmlFor="">&nbsp;</label>
          <button type="button" onClick={f2}>Search</button> 
        </div>
      </form> 
    </div> 
  ) 
}
