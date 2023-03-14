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
        <span onClick={f3}>
          <h2>Flight</h2>
          <div>
            <h3>Departure:</h3>
            <p>Casablanca</p>
          </div>
          <div>
            <h3>Arrivle:</h3>
            <p>Paris</p>
          </div>
          <div>
            <h3>Duration:</h3>
            <p>4 h</p>
          </div>
          <div>
            <h3>Passengers:</h3>
            <p>3</p>
          </div>
          <div>
            <hr />
            <h3>Total:</h3>
            <p>440$</p>
          </div>
        </span>
        <span onClick={f3}>
          <h2>Flight</h2>
          <div>
            <h3>Departure:</h3>
            <p>Casablanca</p>
          </div>
          <div>
            <h3>Arrivle:</h3>
            <p>Paris</p>
          </div>
          <div>
            <h3>Duration:</h3>
            <p>4 h</p>
          </div>
          <div>
            <h3>Passengers:</h3>
            <p>3</p>
          </div>
          <div>
            <hr />
            <h3>Total:</h3>
            <p>440$</p>
          </div>
        </span>
        <span onClick={f3}>
          <h2>Flight</h2>
          <div>
            <h3>Departure:</h3>
            <p>Casablanca</p>
          </div>
          <div>
            <h3>Arrivle:</h3>
            <p>Paris</p>
          </div>
          <div>
            <h3>Duration:</h3>
            <p>4 h</p>
          </div>
          <div>
            <h3>Passengers:</h3>
            <p>3</p>
          </div>
          <div>
            <hr />
            <h3>Total:</h3>
            <p>440$</p>
          </div>
        </span>
      </article>
      
    </div>
  )
}
