import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Nav() {
    return (
        <div>
            <nav>
                <section>
                    <Link to="/Landing" className="nav-brand">North Flights</Link>
                    <div>
                        <Link to="/Landing">About</Link>
                        <Link to="/Landing">Contact</Link>
                        <Link to="/res">Reserve</Link>
                        <Link to="/Landing#serv">Services</Link>
                        <Link to="/N">News</Link>
                        <Link to="/Sign" className="btn">Register</Link>
                    </div>
                </section>
            </nav>
        </div>
    )
}