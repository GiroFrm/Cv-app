import { useState } from "react";

function Experience(){


    const [inputs, setInputs]=useState({});

   const [isSubmit, setIsSubmit]= useState(false);

   function handleSubmit(event){
    event.preventDefault()
    if(inputs.company!=''&& inputs.title!=''
    &&inputs.startDate!=''&&inputs.endDate!=''){
    setIsSubmit(!isSubmit)
 
    }
}

function handleChange(event){
    const name = event.target.name;
    const value= event.target.value;
    setInputs(values=>({...values, [name]:value}))
}

    return (
        <>
         <h1>Experience</h1>
        { ! isSubmit? (
         <form onSubmit={handleSubmit}>
          <label htmlFor="" >Company name</label>
          <input type="text" name="company" value={inputs.company} onChange={handleChange}/> <br/>
          <label htmlFor="">Position Title</label>
          <input type="text" name="title" value={inputs.title} onChange={handleChange}/> <br/>
          <label htmlFor="">Start Date</label>
          <input type="date" name="startDate" value={inputs.startDate} onChange={handleChange}/> <br/>
          <label htmlFor="">End Date</label>
          <input type="date" name="endDate" value={inputs.endDate} onChange={handleChange}/> <br/>
          <input type="submit" />
         </form>):
         (
         <div>
         <ul>
           <li><p>School name</p><p>{inputs.company}</p></li>
           <li><p>Title</p><p>{inputs.title}</p></li>
           <li><p>Start Date</p><p>{inputs.startDate}</p></li>
           <li><p>End Date</p><p>{inputs.endDate}</p></li>
         </ul>
         <button onClick={handleSubmit}>Edit</button>
         </div>
         )}
        </>
    )
}

export default Experience;