import { useState } from "react";

function Experience(){

    const[company, setCompany]= useState('');
    const [title, setTitle]=useState('');
    const[startDate, setStartDate] = useState('');
    const[endDate, setEndDate] = useState('');

   const [isSubmit, setIsSubmit]= useState(false);

   function submit(event){
    event.preventDefault()
    if(company!=''&& title!=''
    &&startDate!=''&&endDate!=''){
    setIsSubmit(!isSubmit)
    }
}
    return (
        <>
         <h1>Experience</h1>
        { ! isSubmit? (
         <form onSubmit={submit}>
          <label htmlFor="" >Company name</label>
          <input type="text" value={company} onChange={e=>{setCompany(e.target.value)}}/> <br/>
          <label htmlFor="">Position Title</label>
          <input type="text" value={title} onChange={e=>{setTitle(e.target.value)}}/> <br/>
          <label htmlFor="">Start Date</label>
          <input type="date" value={startDate} onChange={e=>{setStartDate(e.target.value)}}/> <br/>
          <label htmlFor="">End Date</label>
          <input type="date" value={endDate} onChange={e=>{setEndDate(e.target.value)}}/> <br/>
          <input type="submit" />
         </form>):
         (
         <div>
         <ul>
           <li><p>School name</p><p>{company}</p></li>
           <li><p>Title</p><p>{title}</p></li>
           <li><p>Start Date</p><p>{startDate}</p></li>
           <li><p>End Date</p><p>{endDate}</p></li>
         </ul>
         <button onClick={submit}>Edit</button>
         </div>
         )}
        </>
    )
}

export default Experience;