import { useState } from "react";


function PersonalInfo() {
 
    
  const [inputs, setInputs]=useState({});

   const [isSubmited, setisSubmited]= useState(false);
    
    function submit(event){
        event.preventDefault();
        if(inputs.nome!=''&& inputs.mail!=''&& inputs.number!=''){
        setisSubmited(!isSubmited);
        }
       
    }

    function handleChange(event){
        const name = event.target.name;
        const value= event.target.value;
        setInputs(values=>({...values, [name]:value}))
    }

    return(
        <>
        <h1>Personal Info</h1> 
       { ! isSubmited ? (
        <form onSubmit={submit}>
          <label >Name</label>
          <input type="text"
          name="nome"
          value={inputs.nome} 
          onChange={handleChange}/><br/>
          <label  >email</label> 
          <input type="email" name="mail" 
          value={inputs.mail}
          onChange={handleChange}
          /> <br/>
          <label >Number</label>
          <input type="tel" name="number" value={inputs.number}
           onChange={handleChange}/> <br/>
          <input type="submit"/>
        </form> ) :
        
        (
         <div>
        <ul>
        <li><b>Name</b><p>{inputs.nome}</p></li>
        <li><p>Email</p><p>{inputs.mail}</p></li>
        <li><p>Number</p><p>{inputs.number}</p></li>
        </ul>
        <button onClick={submit}>Edit</button>
       </div>
        ) }
        </>
    )
}

export default PersonalInfo;