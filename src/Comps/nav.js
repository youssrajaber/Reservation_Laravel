import React from 'react'
import logo from '../img/Static.png'
import { Link } from 'react-router-dom'
import './style.css'
export default function Nav() {
    function show_nav(){
        document.querySelector('.links').classList.toggle('links-active')
    }
    return (
        <div>
            <nav>
                <section>
                    <Link to="/Landing" className="nav-brand"><img className='logo' src={logo} alt="" /></Link>
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
            <div className='mobile-header'>
                <section>
                    <Link to="/Landing" className="nav-brand"><img className='logo' src={logo} alt="" /></Link>
                    <i class="icon" onClick={show_nav}>
                        ≡
                    </i>
                </section>
                
            </div>
            <div className="links">
                <Link onClick={show_nav} to="/Landing">About</Link>
                <Link onClick={show_nav} to="/Landing">Contact</Link>
                <Link onClick={show_nav} to="/res">Reserve</Link>
                <Link onClick={show_nav} to="/Landing#serv">Services</Link>
                <Link onClick={show_nav} to="/N">News</Link>
                <Link onClick={show_nav} to="/Sign" className="btn">Register</Link>
            </div>
        </div>
    )
}
