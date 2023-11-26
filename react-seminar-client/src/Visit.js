import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Visit=()=>{

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
     <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>VISIT TO INDUSTRIES AND INSTITUTIONS</h1></div>
     <div className="row justify-content-center"style={{justifyContent:'center'}}>
     <div className="ej">
        

        <label>Name of the Faculty</label>
        <input type="text" placeholder="Enter the Name"/>

    
        <label>Date of Visit</label>
        <input type="date" placeholder="Enter the date"/>


        <label>Name of Industry/Institution visited </label>
        <input type="text" placeholder="Enter the Name"/>


        <label>Location of Industry/Institution visited </label>
        <input type="text" placeholder="Enter the Location"/>

        <label>Webiste Link of  Industry/Institution visited  </label>
        <input type="text" placeholder="Enter the Website"/>

        <label>Name of Industry/Institution Person Interacted  </label>
        <input type="text" placeholder="Enter the Name"/>

        <label>Designation of Industry/Institution Person Interacted</label>
        <input type="text" placeholder="Enter the Designation"/>

        <label>Purpose of the Visit</label>
        <input type="text" placeholder="Enter the Purpose"/>

        <label>Outcome of the Visit</label>
        <input type="text" placeholder="Enter the Outcome"/>


            <label>Report of Visit - PDF</label>
            <input type="file"/>

            <label>Photos - JPG</label>
            <input type="file"/>

            <label>Geotagged Photos - JPG</label>
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
export default Visit;