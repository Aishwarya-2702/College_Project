import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Ntel=()=>{

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
         <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>NPTEL CERTIFICATION</h1></div>
         <div className="row justify-content-center"style={{justifyContent:'center'}}>
         <div className="ej">
            <label>Academic Year</label>
            <select>
                <option value="">Select the Academic Year</option>
                <option value="0">2022-23</option>
                <option value="1">2023-24</option>
            </select>

            <label>Semester</label>
            <select>
                <option value="">Select the Semester</option>
                <option value="0">Odd Sem</option>
                <option value="1">Even Sem</option>
            </select>

            <label>Name of the Faculty</label>
            <input type="text" placeholder="Enter the Name"/>

            <label>Year</label>
            <select>
                <option value="">Select the Year</option>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
            </select>

            <label>Session</label>
            <input type="text" placeholder="Enter the Session"/>

            <label>Course Name</label>
            <input type="text" placeholder="Enter the Course Name"/>

            <label>Score Obtained</label>
            <input type="text" placeholder="Enter the Score Obtained"/>

            <label>Certificate Type</label>
            <select>
                <option value="">Select the Type</option>
                <option value="0">Gold</option>
                <option value="1">Silver</option>
                <option value="1">Elite</option>
                <option value="1">Successfully Completed</option>
            </select>

            <label>Certificate - PDF</label>
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
export default Ntel;