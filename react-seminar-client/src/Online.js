import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Online=()=>{

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
        <div class="overallcontent" >
        <div className="style" style={{justifyContent:'center'}}>
        <div class="head">
          <h1 class="recent-Articles" style={{color:'purple'}}><center>ONLINE CERTIFICATION</center></h1>
        </div>
          <div className="row justify-content-center"style={{justifyContent:'center'}}>
            <div className="ej">
              <label>Academic Year</label>
              <select >
                <option value="">Select Academic Year</option>
                <option value="0">2022-23</option>
                <option value="1">2023-24</option>
              </select>

              <label>Semester</label>
              <select>
                <option value="">Select Semester</option>
                <option value="0">Odd Sem</option>
                <option value="1">Even Sem</option>
              </select>

             <label>Department</label>
             <select>
              <option value="">Select Department</option>
              <option value="0">CSE</option>
              <option value="1">IT</option>
              <option value="1">ECE</option>
              <option value="1">EEE</option>
             </select>

             <label>Name of the Student</label>
             <input type="text" name="guest_email" placeholder='Enter your Name' />

             <label>Year</label>
             <select>
              <option>Select the Year</option>
              <option value="0">I</option>
              <option value="1">II</option>
              <option value="1">III</option>
              <option value="1">IV</option>
             </select>

             <label>Semester</label>
             <select>
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

            <label>Section</label>
            <select>
             <option value="">Select the Section</option>
             <option value="0">A</option>
             <option value="1">B</option>
            <option value="1">C</option>
            </select>

            <label>Online Certification</label>
            <select>
              <option value="">Select the Certification</option>
             <option value="0">Technical</option>
             <option value="1">General Topic</option>
            </select>

            <label htmlFor="guest_email">Name of the Course</label>
            <input type="text" name="guest_email" placeholder='Enter the Course Name' />
      
            <div className="form group">
              <label htmlFor="event_date">Date</label>
              <input type="date" name="event_date"  required /></div>

            <label htmlFor="guest_email">Duration</label>
            <input type="text" name="guest_email" placeholder='Enter the Duration' />
     
            <label htmlFor="guest_email">Details of the Organization</label>
            <input type="text" name="guest_email" placeholder='Enter the Details' />
      
           <label htmlFor="guest_email">Awards and Recognitions</label>
           <input type="text" name="guest_email" placeholder='Awards and Recognitions' />
      
           <label htmlFor="guest_email">Outcome of the Activity</label>
           <input type="text" name="guest_email" placeholder='Text Your Outcome' />
      
           <label htmlFor="guest_email">Certificate - PDF</label>
           <input type="file" name="guest_email" />
          </div>
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
export default Online