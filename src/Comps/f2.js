import React , {useState} from'react' 
import './style.css'
import {useSelector,useDispatch} from 'react-redux'
export default function F2() {  
  const st=useSelector(state=>state.st)
  const displatch=useDispatch()
  function f3(){
    displatch({
      type:"f3"
    })
  }
  return (
    <div className='f2'>
      <h2>List Of Flights available</h2>
      <article>
        <span >
          <h2>Flight Details</h2>
          <div className='first'>
            <i className='Boarding'></i>
            <p>Casablanca,Morocco</p>
            <p>09:00 PM <br /><small>Boarding</small></p>
          </div>
          <div>
            <i className='departure'></i>
            <p>Paris,France</p>
            <p>13:30 PM <br /><small>Departure</small></p>
          </div>
          <div className='card'>
            <div>
              <h3>Passengers:</h3>
              <p>3</p>
            </div>
            <div>
              <h3>Total:</h3>
              <p>440$</p>
            </div>
          </div>
          <button onClick={f3}>Select</button>
        </span>
        <span >
          <h2>Flight Details</h2>
          <div className='first'>
            <i className='Boarding'></i>
            <p>Casablanca,Morocco</p>
            <p>09:00 PM <br /><small>Boarding</small></p>
          </div>
          <div>
            <i className='departure'></i>
            <p>Paris,France</p>
            <p>13:30 PM <br /><small>Departure</small></p>
          </div>
          <div className='card'>
            <div>
              <h3>Passengers:</h3>
              <p>3</p>
            </div>
            <div>
              <h3>Total:</h3>
              <p>440$</p>
            </div>
          </div>
          <button onClick={f3}>Select</button>
        </span>
        <span >
          <h2>Flight Details</h2>
          <div className='first'>
            <i className='Boarding'></i>
            <p>Casablanca,Morocco</p>
            <p>09:00 PM <br /><small>Boarding</small></p>
          </div>
          <div>
            <i className='departure'></i>
            <p>Paris,France</p>
            <p>13:30 PM <br /><small>Departure</small></p>
          </div>
          <div className='card'>
            <div>
              <h3>Passengers:</h3>
              <p>3</p>
            </div>
            <div>
              <h3>Total:</h3>
              <p>440$</p>
            </div>
          </div>
          <button onClick={f3}>Select</button>
        </span>
      </article>
      
    </div>
  )
}
