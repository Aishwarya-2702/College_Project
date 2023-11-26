import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Internship=()=>{

    const[Symposium,setSymposium]=useState({
        "Academic_year":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="Academic_year"){
                return{
                    ...old,
                    [name]:value
                }
            }
            else if(name==="s_no"){
                // fillPorposals(value)
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
            else{
                return{
                    ...old,
                    [name]:parseInt(value)
                }
            }
        })
      }
    
    const callPropose=async()=>{
        try{
            await axios.post(`http://localhost:1234/newrecord`,Symposium)
            }
            catch(err){
              alert("Error in axios")
            }
        }
        
    return(
        <>
        <div className="style" style={{justifyContent:'center'}}>
          <div class="head">
            <h1 class="recent-Articles" style={{color:'purple'}}>INTERNSHIP</h1>
        </div>
     
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
          <label for="major_id">Academic Year</label>< required placeholder="Academic" />
          <select name="Academic Year">
            <option value="">Select the Academic Year</option>
            <option value="0">2022-2023</option>
            <option value="1">2023-2024</option>
          </select>
        </div>

        <div className="ej">
           <label for="event_title">Semester</label>
           <select name="Academic Year">
            <option value="">Select the Semester</option>
            <option value="0">Odd Sem</option>
            <option value="1">Even Sem</option>
           </select>
        </div>
                
        <div className="ej">
           <label for="event_title">Department</label>
           <select name="Academic Year">
            <option value="">Select the Departemnt</option>
            <option value="0">CSE</option>
            <option value="1">IT</option>
            <option value="1">ECE</option>
            <option value="1">EEE</option>
           </select>
        </div>
                    
        <div className="ej">
           <label for="event_organizer">Name of the Student</label>
           <input type="text" name="Organizer Name" placeholder= "Enter Your Name" className="form-control" />
        </div>
  
        <div className="ej">
          <label htmlFor="event_year">year</label>
          <input type="text" name="event_time" required placeholder="Enter the Year" className="form-control" />
        </div>

        <div className="ej">
           <label htmlFor="event_number">Semester</label>
           <select name="Academic Year">
            <option value="">Select the Semester</option>
            <option value="0">1</option>
            <option value="1">2</option> 
            <option value="1">3</option> 
            <option value="1">4</option> 
            <option value="1">5</option> 
            <option value="1">6</option> 
            <option value="1">7</option> 
            <option value="1">8</option> 
           </select>
        </div>
      
        <div className="ej">
          <label htmlFor="event_date">Section</label>
          <input type="text" name="event_date" placeholder='Enter Your Section' required />
  
          <label htmlFor="guest_name">Name of the Participation</label>
          <select name="Name of the participation">
            <option value="">Select Your Participation</option>
            <option value="0">Research project</option>
            <option value="1">Internship</option>
            <option value="1">Field project</option>
            <option value="1">Minor project</option>
            <option value="1">Industrial visit</option>
            <option value="1">In plant Training</option>
          </select>
    
        <label htmlFor="guest_designation">Title</label>
        <input type="text" name="guest_designation" placeholder='Enter Your Title' required />
  
        <label htmlFor="guest_address">Date</label>
        <input type="date" name="guest_address" required />
  
        <label htmlFor="guest_phone_number">Duration</label>
        <input type="number" name="guest_phone_number" placeholder='Enter the Duration'/>
  
        <label htmlFor="guest_email">Name of the Organisation</label>
        <input type="text" name="guest_email" placeholder='Enter the Name'/>
  
        <label htmlFor="student_count">Name of the Contact Person</label>
        <input type="text" name="student_count" placeholder='Enter the Name' />
  
      <label htmlFor="faculty_count">phone number of Contact Person</label>
      <input type="text" name="faculty_count" placeholder='Enter your Number'/>
  
      <label htmlFor="others_count">EMAILID of Contact Person</label>
      <input type="text" name="others_count" placeholder='Enter your MailID'/>
  
      <label htmlFor="event_budget">Website Of Organisation</label>
      <input type="text" name="event_budget" placeholder='Enter the Website'/>
  
      <label htmlFor="event_budget">Outcome of the Activity</label>
      <input type="text" name="event_budget" placeholder='Enter your Outcome' />
  
      <label >Certificate-PDF</label>
      <input type="File" name="event_budget" /> 
    </div>
    
  
    <h1 style={{color:'red',}}></h1>
    <div className='row mt-5 justify-content-around'>
        <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
        <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
    </div>   
   </div>
</div> 
    </>
    )
}
export default Internship