import {React,useState,useRef,useEffect} from 'react'
import axios from 'axios'
import './style.css'
import sa  from '../img/plane.png'
import { useNavigate } from 'react-router-dom'

export default function Sign() {
    const signint=useRef()
    const signf=useRef()
    const logf=useRef()
    const [uname,setuname]=useState('')
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const [email1, setemail1] = useState('');
    const [pass1, setpass1] = useState('');
    const navigate=useNavigate()
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

    

    function Login(){
        axios.get('http://127.0.0.1:8000/api/client')
          .then(res => {
            console.log(res.data)
            let ex=0
            res.data.map((e)=>{
                if(e.email==email){
                    if(e.password==pass){
                        ex=1
                    }
                    else{
                        alert('password incorrect')
                    }
                }
            })
            if(ex==0){
                alert('user not found')
            }
            else{
                alert('you are logged')
                ex=0
                navigate('/res')
            }
          })
          .catch(error => {
            console.error(error);
          });
    }

    function Signup(){
         axios.post('http://127.0.0.1:8000/api/client',{uname,email1,pass1})
          .then(res => {
            alert('You Have successfuly created your account')
            navigate('/res')
          })
          .catch(error => {
            console.error(error);
          });
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
                    <button type='submit'className="signin" onClick={Login}>Sign in</button>
                    <p>
                        Don't have an account <a href="#" onClick={Rignup}>Sign up</a>
                    </p>
                </form>
                
                {/* sign up */}
                <form  style={{display:"none"}} ref={logf} onSubmit={(e)=>{e.preventDefault()}} className="signup-form">
                    <input type="text" name='name'value={uname} onChange={(e)=>{setuname(e.target.value)}} placeholder="name" />
                    <input type="email"  name='email1'value={email1} onChange={(e)=>{setemail1(e.target.value)}} placeholder="email" />
                    <input type="password" name='password1'value={pass1} onChange={(e)=>{setpass1(e.target.value)}}  placeholder="password"/>
                    <button type='submit' onClick={Signup}>Sign up</button>
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
