import React , {useState,useEffect} from'react' 
import './style.css'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
export default function F1() {  
  const displatch=useDispatch()
  const [from,setf]=useState("")
  const [to,sett]=useState("")
  const [date1,setd]=useState("")
  const [passengers,setp]=useState(1)
  const [classs,setc]=useState("Economy class")
  const [scities,setsc]=useState([])
  const [ecities,setec]=useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/flights').then(res=>{
      setsc(res.data.Scity)
      setec(res.data.Ecity)
    })
  },[])

  const sc=scities.map((e)=>(
        <option key={e.id} value={e.Scity}>{e.Scity}</option>
  ))
  const ec=ecities.map((e)=>(
    <option key={e.id} value={e.Ecity}>{e.Ecity}</option>
  ))
  
  function f2(){
    if(from =="" || to=="" || date1=="" || passengers<1)
    {
      alert('all fields are required')
    }
    else
    {
      displatch({
        type:"f1values",
        payload:[from,to,date1,passengers,classs]
      })
    }
  }

  return ( 
    <div className='f1'> 
      <form action="#" onSubmit={(e)=>{e.preventDefault()}}> 
        
        <div>
            <label htmlFor="from">From</label> 
            <select id="from" value={from} onChange={evt => setf(evt.target.value)}>
                <option value="">Select City</option>
                {sc}
            </select> 
        </div>

        <div>
            <label htmlFor="To">To</label> 
            <select id="To" value={to} onChange={evt => sett(evt.target.value)}>
                <option value="">Select Destination</option>
                {ec}
            </select> 
        </div>

        <div>
            <label htmlFor="going">Date of going</label> 
            <input type="date"  name="going" value={date1} onChange={(e)=>{setd(e.target.value)}} id="gg" />
        </div>
        <div>
            <label htmlFor="ad">Passengers</label> 
            <input type="number" value={passengers} onChange={(e)=>{setp(e.target.value)}} name="going" id="ad" />
        </div>
        <div>
            <label htmlFor="ch">Class</label> 
            <select id="To" value={classs} onChange={evt => setc(evt.target.value)}>
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
