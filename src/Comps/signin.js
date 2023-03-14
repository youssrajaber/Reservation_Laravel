import {React,useState,useRef} from 'react'
import './style.css'
import sa  from '../img/plane.png'

export default function Sign() {
    const signint=useRef()
    const signf=useRef()
    const logf=useRef()
    const [uname,setuname]=useState()
    const [email,setemail]=useState()
    const [pass,setpass]=useState()
    function Rignup(){
        signf.current.style.display='none'
        logf.current.style.display='block'
        signint.current.innerText="Create your account"
    }
    function Dignup(){
        signf.current.style.display='block'
        logf.current.style.display='none'
        signint.current.innerText="Register"
    }

    
    
return (
    <section className="sign">
        <section>
            <div className="bg">
                <h2>North Flights</h2>
            </div>
            <div>
                <h2 ref={signint}>Register</h2>
                
                {/* sign in */}
                <form  ref={signf} onSubmit={(e)=>{e.preventDefault()}} className="login-form">
                    <input type="email"name='email'value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="email" />
                    <input type="password"name='password'value={pass} onChange={(e)=>{setpass(e.target.value)}} placeholder="password"/>
                    <button type='submit'className="signin" >Sign in</button>
                    <p>
                        Don't have an account <a href="#" onClick={Rignup}>Sign up</a>
                    </p>
                </form>
                
                {/* sign up */}
                <form  ref={logf} onSubmit={(e)=>{e.preventDefault()}} className="signup-form">
                    <input type="text" name='name'value={uname} onChange={(e)=>{setuname(e.target.value)}} placeholder="name" />
                    <input type="email"  name='email1'value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="email" />
                    <input type="password" name='password1'value={pass} onChange={(e)=>{setpass(e.target.value)}}  placeholder="password"/>
                    <button type='submit' >Sign up</button>
                    <p>
                        Already have an account <a href="#" onClick={Dignup}>log in</a>
                    </p>
                </form>
                <img src={sa} alt="" className="pimg" />
            </div>
        </section>
    </section>
  )
}
