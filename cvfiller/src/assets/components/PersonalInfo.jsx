import { useState } from "react";


function PersonalInfo() {
 
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [number, setNumber]= useState('');

   const [isSubmited, setisSubmited]= useState(false);
    
    function submit(event){
        event.preventDefault();
        if(name!=''&& email!=''&& number!=''){
        setisSubmited(!isSubmited);
        }
       
    }

    function handleName(e){
     setName(e.target.value)
    
    }

    return(
        <>
        <h1>Personal Info</h1> 
       { ! isSubmited ? (
        <form onSubmit={submit}>
          <label >Name</label>
          <input type="text"
          value={name} 
          onChange={handleName}/><br/>
          <label htmlFor="email">email</label> 
          <input type="email" id="email" 
          value={email}
          onChange={e=>setEmail(e.target.value)}
          /> <br/>
          <label htmlFor="number">Number</label>
          <input type="tel" id="number" value={number}
           onChange={e=>setNumber(e.target.value)}/> <br/>
         <input type="submit"/>
        </form> ) :
        
        (
         <div>
        <ul>
        <li><b>Name</b><p>{name}</p></li>
        <li><p>Email</p><p>{email}</p></li>
        <li><p>Number</p><p>{number}</p></li>
        </ul>
        <button onClick={submit}>Edit</button>
       </div>
        ) }
        </>
    )
}

export default PersonalInfo;