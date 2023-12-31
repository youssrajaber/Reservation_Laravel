import React, { useState,useEffect } from 'react'; 
import axios from 'axios'
import logo from '../img/Static.png'
import wp from '../img/Wplanelogo.png'
import p from '../img/Logop.png'
import bar from '../img/Bar.png'
import {useSelector} from 'react-redux';

export default function FF5() {
    const f3 = useSelector(state => state.f3); 
    const f2 = useSelector(state => state.f2); 
    const [ec,setec]=useState([])
    const fn=f3.fname+' '+f3.lname
    const data={
        Dateb:f3.Dateb,
        Scity:f2.Scity,
        Ecity:f2.Ecity,
        duration:f2.duration,
        feh:f2.feh,
        fsh:f2.fsh,
        classs:f2.classs,
        price:f2.price,
        clientemail:f3.email,
        clientname:fn
     }
    // axios.post('http://127.0.0.1:8000/api/res_models', data).then(res => {
    //     setec(res.data.message)
        
    // })
    
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/res_models', data).then(res => {
            setec(res.data.message)
            console.log(ec)
        })
      }, [])
             
     console.log(ec)
    return (
        <div className='ticket'>
            <h1>Your Air Ticket new</h1>
            {Object.keys(ec).map((e) => (
                <main> 
                <header><img src={logo} alt="" /><h3>Air ticket</h3></header>
                <article>
                    <div>
                        <span><p>Passenger</p><h3>{ec[e].clientname}</h3></span>
                        <span><p>Flight</p><h3>Ex423</h3></span>
                        <span><p>Date</p><h3>{ec[e].Dateb}</h3></span>
                        <span><p>Seat</p><h3>8A</h3></span>
                    </div>
                    <div className='flight'>
                        <strong>{ec[e].Scity}</strong>
                        <div><img src={p} alt="" /></div>
                        <strong>{ec[e].Ecity}</strong>
                    </div>
                    <div>
                        <span><p>Gate</p><h3>D 04</h3></span>
                        <span><p>Boarding Time</p><h3>{ec[e].feh}</h3></span>
                        <span><p>Duration</p><h3>{ec[e].duration}</h3></span>
                    </div>
                </article>
                <div className='cut'>
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
                <aside>
                    <div className='barc'><img  src={bar} alt="" /></div>
                    <div>
                        <span><p>Passenger</p><h3>{ec[e].clientname}</h3></span>
                        <span><p>Date</p><h3>{ec[e].Dateb}</h3></span>
                        <aside>
                            <span><p>Flight</p><h3>Ex423</h3></span>
                            <span><p>Seat</p><h3>8A</h3></span>
                        </aside>
                        <span><p>Boarding Time</p><h3>{ec[e].feh} AM</h3></span>
                    </div>
                    <div className='vertical'>
                        <strong>{ec[e].Scity}</strong>
                        <strong><img src={wp} alt="" /></strong>
                        <strong>{ec[e].Ecity}</strong>
                    </div>
                </aside>
                </main>
            ))}
        </div>
    )
}
