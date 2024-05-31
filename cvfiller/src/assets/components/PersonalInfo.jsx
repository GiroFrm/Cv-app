import { useState } from "react";


function PersonalInfo() {
 
    return(
        <>
        <h1>Personal Info</h1> 
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"/><br/>
          <label htmlFor="email">email</label> 
          <input type="email" id="email"/> <br/>
          <label htmlFor="number">Number</label>
          <input type="tel" id="number"/>
        </form>
        </>
    )
}

export default PersonalInfo;