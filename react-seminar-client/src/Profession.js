import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Profession=()=>{

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
     <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>PROFESSIONAL SOCIETY MEMBERSHIP</h1></div>
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

       
        <label>Membership ID</label>
        <input type="number" placeholder="Enter the ID"/>

        <label>Date of Membership</label>
        <input type="date" placeholder="Enter the date"/>

        <label>Professional Society Membership</label>
        <select>
            <option value="">Professional Society Membership</option>
            <option value="0">IEEE</option>
            <option value="1">ISTE</option>
            <option value="2">IE(I)</option>
            <option value="3">IETE</option>
            <option value="4">CSI</option>
            <option value="5">SAE</option>
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
export default Profession;