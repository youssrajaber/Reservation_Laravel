import React , {useState} from'react' 
import './style.css'

export default function F3() {  
  
  return ( 
    <div className='f1'> 
      <form action="#" onSubmit={(e)=>{e.preventDefault()}}> 
        
        <div>
            <label For="from">First name</label> 
            <input type="text" name="fname"  id="from"/>
        </div>

        <div>
            <label For="To">Last name</label> 
            <input type="text" name="lname" id="To" />
        </div>

        <div>
            <label For="going">Date of birth</label> 
            <input type="date" name="Dateb" id="going" />
        </div>
        <div>
            <label for="ad">Nationamity</label> 
            <input type="text" name="Nationamity" id="ad" />
        </div>
        <div>
            <label for="ch">Pasport</label> 
            <input type="text" name="Pasport" id="To" />
        </div>
        <div>
            <label for="ch">Country of residenc</label> 
            <input type="text" name="Pasport" id="To" />
        </div>
        <div>
            <label for="ch">Email</label> 
            <input type="text" name="Pasport" id="To" />
        </div>
        <div>
            <label for="ch">Phone number</label> 
            <input type="text" name="Pasport" id="To" />
        </div>
        <div>
          <label htmlFor="">&nbsp;</label>
          <button type="button">Continue</button> 
        </div>
      </form> 
    </div> 
  ) 
}
