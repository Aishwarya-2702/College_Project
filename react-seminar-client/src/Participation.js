import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Participation=()=>{

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
             <h1 class="recent-Articles" style={{color:'purple'}}>STUDENTS PARTICIPATION</h1>
           </div>

           <div className="row justify-content-center"style={{justifyContent:'center'}}>
           <div className="ej">
              <label>Academic Year</label>
              <select name="event_name">
                <option value="">Select Academic Year</option>
                <option value="2022-23">2022-23</option>
                <option value="2023-24">2023-24</option>
              </select>
            </div>

            <div className="ej">
              <label>Semester</label>
              <select name="event_name">
                <option value="">Select Semester</option>
                <option value="ODD">ODD</option>
                <option value="EVEN">EVEN</option>
              </select>
            </div>

            <div className="ej">
               <label>Department</label>
               <input type="text" placeholder="Enter Your Department"/>
            </div>

            <div className="ej">
               <label>Name of the Student</label>
               <input type="text" placeholder="Enter Your Student"/>
            </div>

            <div className="ej">
               <label>Year</label>
               <input type="text" placeholder="Enter Your Year"/>
            </div>

            <div className="ej">
               <label>Semester</label>
               <input type="text" placeholder="Enter Your Semester"/>
            </div>

            <div className="ej">
               <label>Section</label>
               <input type="text" placeholder="Enter Your Section"/>
            </div>

            <div className="ej">
              <label>Nature of Participation</label>
              <select name="event_name">
                <option value="">Select the Participation</option>
                <option value="Seminar">Seminar</option>
                <option value="Workshop">Workshop</option>
                <option value="Paper Presentation">Paper Presentation</option>
                <option value="Project Contest">Project Contest</option>
                <option value="Sports">Sports</option>
                <option value="Outreach Program">Outreach Program</option>
              </select>
            </div>

            <div className="ej">
               <label>Name of the Program</label>
               <input type="text" placeholder="Enter the Program"/>
            </div>

            <div className="ej">
               <label>Date</label>
               <input type="date"/>
            </div>

            <div className="ej">
               <label>Duration</label>
               <input type="text" placeholder="Enter the Timing"/>
            </div>

            <div className="ej">
               <label>Name of the Organization</label>
               <input type="text" placeholder="Enter the Organisation Name"/>
            </div>

            <div className="ej">
               <label>Awards and Recognitions</label>
               <input type="text" placeholder="Enter the Prize"/>
            </div>

            <div className="ej">
               <label>Certificates-pdf</label>
               <input type="file"/>
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
export default Participation