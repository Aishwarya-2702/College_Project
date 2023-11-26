import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const TechTalk2=()=>{

    const[Symposium,setSymposium]=useState({
        "student_name":"",
        "date":"",
        "title":"",
        "no_of_students_participated":"",
        "faculty_co_ordinator":"",
        "po_and_pso_mapping":"",
        "attendance":"",
        "photo_1":"",
        "photo_2":""
      })
    
      console.log(Symposium)
    
      const infoCollect=(eve)=>{
        const{name,value}=eve.target
        setSymposium((old)=>{
            if(name==="student_name"||name==="date"||name==="title"||name==="no_of_students_participated"||name==="faculty_co_ordinator"||name==="po_and_pso_mapping"||name==="attendance"||name==="photo_1"||name==="photo_2"){
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
            <h1 class="recent-Articles" style={{color:'purple'}}>STUDENTS TECHTALK</h1>
          </div>

          <div className="row justify-content-center"style={{justifyContent:'center'}}>
            <div className="ej">
              <label>Student Name</label>
              <input type="text" placeholder="Enter Your Name" onChange={infoCollect}/>
            </div>

            <div className="ej">
               <label>Date</label>
               <input type="date" onChange={infoCollect}/>
            </div>

            <div className="ej">
              <label>No of Students Participated</label>
              <input type="text" placeholder="Enter the Student Count" onChange={infoCollect}/>
            </div>

            <div className="ej">

              <label>Faculty Co Ordinator</label>
              <input type="text" placeholder="Faculty Co Ordinator" onChange={infoCollect}/>
            </div>

            <div className="ej">
              <label>PO and PSO Mapping</label>
              <input type="text" placeholder="Enter the Mapping" onChange={infoCollect}/>
            </div>

            <div className="ej">
               <label>Attendance</label>
               <input type="file" onChange={infoCollect}/>
            </div>

            <div className="ej">
               <label>Photo 1</label>
               <input type="file" onChange={infoCollect}/>
            </div>

            <div className="ej">
               <label>Photo 2</label>
               <input type="file" onChange={infoCollect}/>
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
export default TechTalk2