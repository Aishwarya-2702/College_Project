import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const VAC=()=>{

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
           <h1 class="recent-Articles" style={{color:'purple'}}><center>VALUE ADDED COURSES</center></h1>
        </div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
           <label htmlFor="acdyr_id">Academic Year</label>
           <select name="acdyr_id" className="ej"  >
              <option value="">Select Academic Year</option>
              <option value="0">2022-23</option>
              <option value="1">2023-24</option>
            </select>

           <label htmlFor="sem">Semester</label>
           <select name="sem">
            <option value="">Select the Semester</option>
             <option value="0">Odd Sem</option>
             <option value="1">Even Sem</option>
           </select>

           <label htmlFor="sem">Department</label>
           <select name="sem">
            <option value="">Select the Department</option>
            <option value="0">CSE</option>
            <option value="1">IT</option>
            <option value="1">ECE</option>
            <option value="1">EEE</option>
           </select>

           <label htmlFor="guest_email">Name of the Value Added Courses</label>
           <input type="text" name="guest_email" placeholder='Enter the Name' />

           <label htmlFor="guest_email">Venue of Value Added Course</label>
           <input type="text" name="guest_email" placeholder='Enter the Venue' />

           <div className="form group">
            <label htmlFor="event_date">Date</label>
            <input type="date" name="event_date"  required /></div>

            <label htmlFor="guest_email">Duration</label>
            <input type="text" name="guest_email" placeholder='Enter the Duration' />

            <label htmlFor="guest_email">Name of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Name' />

            <label htmlFor="guest_email">Address of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Address' />

            <label htmlFor="guest_email">Designation of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Designation' />

            <label htmlFor="guest_email">Organization of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Organization' />

            <label htmlFor="guest_email">Mobile of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the Number' />

            <label htmlFor="guest_email">Email ID of Resource Person</label>
            <input type="text" name="guest_email" placeholder='Enter the MailID' />

            <label htmlFor="sem">Students Participated in the Event</label>
            <input type="text" name="guest_email" placeholder='Number of Participants' />
     
            <label htmlFor="sem">Outcome of the Activity</label>
            <input type="text" name="guest_email" placeholder='Enter the Outcome' />

            <label htmlFor="guest_email">CCR First Page-PDF</label>
            <input type="file" name="guest_email"  />
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
export default VAC