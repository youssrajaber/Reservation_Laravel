import React , {useState,useEffect} from'react' 
import axios from 'axios'
import './style.css'
import {useSelector,useDispatch} from 'react-redux'
export default function F2(){ 
  
  const [ec,setec]=useState([])
  // const [hours, setHours] = useState(null)
  const [isload, setload] = useState(true)
  const v=useSelector(state=>state.f1)
  const displatch=useDispatch()
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/ShowC', {
      params: {
        from: v.from,
        to: v.to
      }
    }).then(res => {
      setload(false)
      setec(res.data)
    })
  }, [])

  const randHour = () => {
    return Math.floor(Math.random() * 12) + 1; 
  }
  
  const randMin = () => {
    const mins = [0, 15, 30, 45, 5, 10, 20, 25, 35, 40, 50, 55]; 
    const randIndex = Math.floor(Math.random() * mins.length); 
    return mins[randIndex]; 
  }
  
  const randAMPM = () => {
    const ampm = ['AM', 'PM']; 
    const randIndex = Math.floor(Math.random() * ampm.length);
    return ampm[randIndex]; 
  }
  const pricen = () => {
    let cp = 0
    if(v.classs=="Buissniss class"){
      cp=200
    }
    return cp
  }

  const sc=ec.map((e)=>{
    const hours = randHour();
    const mins = randMin();
    const ampm = randAMPM();
    const price = pricen()+e.price;
    const fsh=`${hours}:${mins} ${ampm}`
    const feh=`${hours+e.duration}:${mins} ${ampm}`
    return(
      <span >
        <h2>Flight Details</h2>
        <div className='first'>
          <i className='Boarding'></i>
          <p>{e.Scity}</p>
          <p>{hours}:{mins} {ampm} <br /><small>Boarding</small></p>
        </div>
        <div>
          <i className='departure'></i>
          <p>{e.Ecity}</p>
          <p>{hours+e.duration}:{mins} {ampm} <br /><small>Departure</small></p>
        </div>
        <div className='card'>
          <div>
            <h3>Passengers:</h3>
            <p>{v.passengers}</p>
          </div>
          <div>
            <h3>Total:</h3>
            <p>{price}</p>
          </div>
        </div>
        <button onClick={()=>f3(e.Scity,e.Ecity,fsh,feh,e.duration,price,v.date,v.classs)}>Select</button>
      </span>
    )
  })


function f3(Scity,Ecity,fsh,feh,duration,price,date,classs){
  displatch({
    type:"f3",
    payload:[Scity,Ecity,fsh,feh,duration,price,date,classs]
  })
}
function f1(){
  displatch({
    type:"f1"
  })
}
  
  return (
    <div className='f2'>
      <h2>List Of Flights available</h2>
      <article>
        {/* {Object.keys(sc).length>0 ? sc : (<p>No flights available</p>)} */}
        {isload ?(<p>Loading...</p>) : Object.keys(sc).length>0 ? sc : (
        <p>
          No flights available
          <br /><br />
          <a href="#" onClick={f1} style={{ textDecoration:"none",color:"##1882fc" }}>Modify flight</a>
        </p>
        
        )}
      </article>
      
    </div>
  )
}
