import { useLayoutEffect, useState } from "react";


function Education() {
   
    const [school, setSchool]= useState('');
    const [title, setTitle]=useState('');
    const[startDate, setStartDate] = useState('');
    const[endDate, setEndDate] = useState('');

   const [isSubmit, setIsSubmit]= useState(false);
   

    function submit(event){
        event.preventDefault()
        if(school!=''&& title!=''
        &&startDate!=''&&endDate!=''){
        setIsSubmit(!isSubmit)
        }
    }

    return (
        <>
         <h1>Education</h1>
        { ! isSubmit? (
         <form onSubmit={submit}>
          <label htmlFor="" value={school} onChange={e=>{setSchool(e.target.value)}}>School name</label>
          <input type="text" /> <br/>
          <label htmlFor="">Title</label>
          <input type="text" /> <br/>
          <label htmlFor="">Start Date</label>
          <input type="date" /> <br/>
          <label htmlFor="">End Date</label>
          <input type="date" /> <br/>
          <input type="submit" />
         </form>):
         (
         <div>
         <ul>
           <li><p>School name</p><p>{school}</p></li>
           <li><p>Title</p><p>{title}</p></li>
           <li><p>Start Date</p><p>{startDate}</p></li>
           <li><p>End Date</p><p>{endDate}</p></li>
         </ul>
         <button onSubmit={submit}>Edit</button>
         </div>
         )
        }
        </>
    )
}

export default Education;