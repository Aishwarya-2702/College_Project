import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Workshop=()=>{

    const[Symposium,setSymposium]=useState({
        "academic_year":"",
        "semster":"",
        "name_of_the_student":"",
        "academic_year_of_the_student":"",
        "semester":"",
        "section":"",
        "course_name":"",
        "year":"",
        "session":"",
        "score_obtained":"",
        "certificate_type":"",
        "certificate_pdf":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="academic_year"||name==="semester"||name==="name_of_the_student"||name==="academic_year_of_the_student"||name==="semester"||name==="section"||name==="course_name"||name==="year"||name==="session"){
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
        <div className='overallcontent'>
        <div className="style" style={{justifyContent:'center'}}>
        <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>WORKSHOP</h1></div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
            <label>Name of the Faculty</label>
            <input type="text" placeholder="Enter the Name"/>

            <label>Designation</label>
            <input type="text" placeholder="Enter the Designation"/>

            <label>Nature of the Program</label>
            <select>
                <option value="">Select the Program</option>
                <option value="0">Workshop</option>
                <option value="1">Seminar</option>
                <option value="1">FDP</option>
                <option value="1">SDP</option>
                <option value="1">STTP</option>
                <option value="1">Webinar</option>
            </select>

            <label>Title of the Program</label>
            <input type="text" placeholder="Enter the Title"/>

            <label>Duration From</label>
            <input type="date"/>

            <label>Duration To</label>
            <input type="date"/>

            <label>Participation</label>
            <select>
                <option value="">Select the Participation</option>
                <option value="0">Internal</option>
                <option value="1">External</option>
            </select>

            <label>Name of the Organization and Place</label>
            <input type="text" placeholder="Enter the Name"/>

            <label>Location of Organization</label>
            <input type="text" placeholder="Enter the Location"/>

            <label>Amount provided by the HEI</label>
            <input type="text" placeholder="Enter the Amount"/>

            <label>Certificates - PDF</label>
            <input type="file"/>
        </div>
        <h1 style={{color:'red',}}></h1>
        <div className='row mt-5 justify-content-around'>
          <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
          <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
        </div>  
        </div>
        </div>
        </div>
        </>
    )
}
export default Workshop;