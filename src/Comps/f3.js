import React , {useState} from'react' 
import axios from "axios";
import './style.css'
import {useDispatch} from 'react-redux'
export default function F3() {  
  const displatch=useDispatch()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationality, setNationality] = useState('');
  const [passport, setPassport] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');
  const [email, setEmail] = useState('');
  const [message, setm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  function f4(){
    if(firstName=="" ||lastName=="" ||dateOfBirth=="" ||nationality=="" ||passport=="" ||countryOfResidence=="" ||email=="" ||phoneNumber=="")
    {
      alert('all fields are required')
    }
    else
    {
      displatch({
        type:"f4",
        payload:[firstName,lastName,dateOfBirth,nationality,passport,countryOfResidence,email,phoneNumber]
      })

      

    }
  }
  return ( 
      <div className='f1'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <div>
            <label htmlFor='from'>First name</label>
            <input
              type='text'
              name='firstName'
              id='from'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='To'>Last name</label>
            <input
              type='text'
              name='lastName'
              id='To'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='going'>Date of birth</label>
            <input
              type='date'
              name='dateOfBirth'
              id='going'
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='ad'>Nationality</label>
            <input
              type='text'
              name='nationality'
              id='ad'
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='ch'>Passport</label>
            <input
              type='text'
              name='passport'
              id='To'
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='ch'>Country of residence</label>
            <input
              type='text'
              name='countryOfResidence'
              id='To'
              value={countryOfResidence}
              onChange={(e) => setCountryOfResidence(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='ch'>Email</label>
            <input
              type='text'
              name='email'
              id='To'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='ch'>Phone number</label>
            <input
              type='text'
              name='phoneNumber'
              id='To'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='cnt' style={{opacity:"0"}}>h</label>
            <button onClick={f4} id="cnt" type='submit'>Continue</button>
          </div>
        </form>
      </div>
  ) 
}
