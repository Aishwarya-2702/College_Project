import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const NPTEL=()=>{

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
        
        <div class="overallcontent" >
        <div className="style" style={{justifyContent:'center'}}>
        <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>NPTEL CERTIFICATION</h1></div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
            <label>Academic Year</label>
            <select name="event_name">
            <option value="">Select The Academic Year</option>
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
            </select>

            <label>Semester</label>
            <select name="ej">
            <option value="">Select The Semester</option>
            <option value="ODD">ODD</option>
            <option value="EVEN">EVEN</option>
            </select>
        </div>
                
<div className="ej">
     <label >Name of the Student</label>
     <input  type="text" name="event_title" placeholder="Enter Your Name"/>
     </div>
                    
   <div className="ej">
   <label >Academic Year of the Student</label>
    <select name="select the Student Academic Year">
    <option value="">select the student academic year</option>
     </select>

     </div>

   <div className="ej">
   <label >Semester</label>
    <select >
    <option value="">Select The Semester</option>
    <option value="2022-23">2022-23</option>
    <option value="2023-24">2023-24</option>
    </select>
                            
     </div>  

     <div className="ej">
   <label >Section</label>
    <select >
    <option value="">Select The Secction</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    </select>
                            
     </div>               

     <div className="ej">
     <label >Course Name</label>
     <input  type="text" name="event_title" placeholder=" Enter the course name" className="form-control"/>
     </div>

     <div className="ej">
     <label >Year</label>
     <input  type="text" name="event_title" placeholder="Enter the year" className="form-control"/>
     </div>

     <div className="ej">
     <label >Session</label>
     <input  type="text" name="event_title" placeholder="Enter The Session" className="form-control"/>
     </div>

     <div className="ej">
     <label >Score Obtained</label>
     <input  type="text" name="event_title" placeholder="Score Obtained" className="form-control"/>
     </div>
     
     
     <div className="ej">
   <label >Certificate Type</label>
    <select >
    <option value="">select The Type</option>
    <option value="Gold">Gold</option>
    <option value="Silver">Silver</option>
    <option value="Elite">Elite</option>
    <option value="Successfully Completed">Successfully Completed</option>
    </select>
                            
     </div>

     <div className="ej">
     <label >Certificate-PDF</label>
     <input  type="file" />
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
export default NPTEL