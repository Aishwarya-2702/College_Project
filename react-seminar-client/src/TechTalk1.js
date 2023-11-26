import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"


export const TechTalk1=()=>{
const[Symposium,setSymposium]=useState({
     "acedemic_year":"",
     "semester":"",
     "department":"",
     "date":"",
     "title_of_the_techtalk":"",
     "name_of_the_student":"",
     "year":"",
     "semester":"",
     "section":"",
     "no_of_beneficiaries":"",
     "students_techtalk_report_first_page_pdf":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="acedemic_year"||name==="semester"||name==="department"||name==="date"||name==="title_of_the_techtalk"||name==="name_of_the_student"||name==="year"||name==="semester"||name==="section"||name==="no_of_beneficiaries"||name==="students_techtalk_report_first_page_pdf"){
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
          <h1 class="recent-Articles" style={{color:'purple'}}><center>STUDENT TECHTALK(ST2)</center></h1>
        </div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
          <div className="ej">
            <label htmlFor="acdyr_id">Academic Year</label>
            <select name="acdyr_id" className="form group" placeholder='Select the Academic Year' >
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

            <div className="form group">
              <label htmlFor="event_date">Date</label>
              <input type="date" name="event_date"  required /></div>
      
              <label htmlFor="guest_email">Title of the TechTalk</label>
              <input type="text" name="guest_email" placeholder='Enter the Title' />
      
              <label htmlFor="guest_email">Name of the Student</label>
              <input type="text" name="guest_email" placeholder='Enter your Name' />
      
              <label htmlFor="sem">Year</label>
              <select name="sem">
                <option value="">Select the Year</option>
                <option value="0">I</option>
                <option value="1">II</option>
                <option value="1">III</option>
                <option value="1">IV</option>
              </select>

              <label htmlFor="sem">Semester</label>
              <select name="sem">
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

              <label htmlFor="sem">Section</label>
              <select name="sem">
                <option value="">Select the Section</option>
                <option value="0">A</option>
                <option value="1">B</option>
                <option value="1">C</option>
              </select>

              <label htmlFor="guest_email">No.of Beneficiaries</label>
              <input type="text" name="guest_email" placeholder='Enter the Number' />
      
              <label htmlFor="guest_email">Student Techtalk Report First Page-PDF</label>
              <input type="file" name="guest_email"  />
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
export default TechTalk1