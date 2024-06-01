import { useLayoutEffect, useState } from "react";


function Education() {
   

    const [inputs, setInputs]=useState({});

   const [isSubmit, setIsSubmit]= useState(false);
   
   function handleChange(event){
    const name = event.target.name;
    const value= event.target.value;
    setInputs(values=>({...values, [name]:value}))
}
    function submit(event){
        event.preventDefault()
        if(inputs.school!=''&& inputs.title!=''
        &&inputs.startDate!=''&&inputs.endDate!=''){
        setIsSubmit(!isSubmit)
        }
    }

    return (
        <>
         <h1>Education</h1>
        { ! isSubmit? (
         <form onSubmit={submit}>
          <label htmlFor="" >School name</label>
          <input type="text" name="school" value={inputs.school} onChange={handleChange}/> <br/>
          <label htmlFor="">Title</label>
          <input type="text" name="title" value={inputs.title}  onChange={handleChange}/> <br/>
          <label htmlFor="">Start Date</label>
          <input type="date" name="startDate" value={inputs.startDate} onChange={handleChange}/> <br/>
          <label htmlFor="">End Date</label>
          <input type="date" name="endDate" value={inputs.endDate} onChange={handleChange}/><br/>
          <input type="submit" />
         </form>):
         (
         <div>
         <ul>
           <li><p>School name</p><p>{inputs.school}</p></li>
           <li><p>Title</p><p>{inputs.title}</p></li>
           <li><p>Start Date</p><p>{inputs.startDate}</p></li>
           <li><p>End Date</p><p>{inputs.endDate}</p></li>
         </ul>
         <button onClick={submit}>Edit</button>
         </div>
         )
        }
        </>
    )
}

export default Education;