import React from 'react'
import logo from '../img/Static.png'
import wp from '../img/Wplanelogo.png'
import p from '../img/Logop.png'
import bar from '../img/Bar.png'

export default function FF() {
  return (
    <div className='ticket'>
      <h1>Your Air Ticket</h1>
      <main> 
        <header><img src={logo} alt="" /><h3>Air ticket</h3></header>
        <article>
            <div>
                <span><p>Passenger</p><h3>Name of passenger</h3></span>
                <span><p>Flight</p><h3>Ex423</h3></span>
                <span><p>Date</p><h3>DD MM YY</h3></span>
                <span><p>Seat</p><h3>8A</h3></span>
            </div>
            <div className='flight'>
                <strong>Tanger</strong>
                <div><img src={p} alt="" /></div>
                <strong>Milan</strong>
            </div>
            <div>
                <span><p>Gate</p><h3>D 04</h3></span>
                <span><p>Boarding Time</p><h3>09:40</h3></span>
                <span><p>Duration</p><h3>4h &nbsp; 45min</h3></span>
            </div>
        </article>
        <div className='cut'>
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
        <aside>
            <div className='barc'><img  src={bar} alt="" /></div>
            <div>
                <span><p>Passenger</p><h3>Name of passenger</h3></span>
                <span><p>Date</p><h3>DD MM YY</h3></span>
                <aside>
                    <span><p>Flight</p><h3>Ex423</h3></span>
                    <span><p>Seat</p><h3>8A</h3></span>
                </aside>
                <span><p>Boarding Time</p><h3>09:40 AM</h3></span>
            </div>
            <div className='vertical'>
                <strong>Tanger</strong>
                <strong><img src={wp} alt="" /></strong>
                <strong>Milan</strong>
            </div>
        </aside>
      </main>
    </div>
  )
}
