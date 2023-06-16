import React, { useState,useEffect } from 'react'; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; 
import './style.css'; 
import { useSelector, useDispatch } from 'react-redux';

export default function F3() {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('');
  const dispatch = useDispatch();
  const f3 = useSelector(state => state.f3); 
  const f2 = useSelector(state => state.f2); 
  const navigate=useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
  }
  function f4(){
    if(cardNumber=="" || cardName=="" || expiryDate=="" || cvv=="")
    {
      alert('all fields are required')
    }
    else{
      navigate('/f5')
    }
  }

  return (
    <div className='f1'> 
      <form onSubmit={handleSubmit} method="post">
        <div>
          <label htmlFor="from">Card Number:</label> 
          <input 
            type="text" 
            name="cn" 
            id="from"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div> 
        <div> 
          <label htmlFor="To">Card Name:</label> 
          <input 
            type="text" 
            name="cnm" 
            id="To" 
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          /> 
        </div> 
        <div> 
          <label htmlFor="going">Expiry Date:</label> 
          <input 
            type="date" 
            name="exd" 
            id="going" 
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          /> 
        </div> 
        <div> 
          <label htmlFor="ad">CVV:</label> 
          <input 
            type="text" 
            name="cvv" 
            id="ad" 
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          /> 
        </div> 

        <div> 
          <label htmlFor="">&nbsp;</label> 
            <button type="submit" onClick={f4}>Done</button> 
        </div> 
      </form> 
    </div> 
  );
}
