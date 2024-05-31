import { useState } from "react";


function PersonalInfo() {
 
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [number, setNumber]= useState('');
    
    function submit(event){
        event.preventDefault();
        alert(name)
    }

    return(
        <>
        <h1>Personal Info</h1> 
        <form onSubmit={submit}>
          <label >Name</label>
          <input type="text"
          value={name} 
          onChange={e=> setName(e.target.value)}/><br/>
          <label htmlFor="email">email</label> 
          <input type="email" id="email" 
          value={email}
          onChange={e=>setEmail(e.target.value)}
          /> <br/>
          <label htmlFor="number">Number</label>
          <input type="tel" id="number" value={number}
           onChange={e=>setNumber(e.target.value)}/> <br/>
         <input type="submit"/>
        
        </form>
        </>
    )
}

export default PersonalInfo;