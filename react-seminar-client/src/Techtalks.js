import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"

export const Techtalks=()=>{

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
        <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>TECHTALKS TO BE DELIVERED MULTIDISCIPLINARY LECTURES</h1></div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="ej">
            <label>Name of the Faculty</label>
            <input type="text" placeholder="Enter the Name"/>

            <label>MuDiL Number</label>
            <input type="text" placeholder="Enter the Number"/>

            <label>Lecture Delivered to Branch</label>
            <select>
                <option value="">Select the Branch</option>
                <option value="0">B.E</option>
            </select>

            <label>Semester</label>
            <select>
                <option value="">Select the Semester</option>
                <option value="0">Odd Sem</option>
                <option value="1">Even Sem</option>
            </select>

            <label>Section</label>
            <select>
                <option value="">Select the Section</option>
                <option value="0">A</option>
                <option value="1">B</option>
                <option value="1">C</option>
            </select>

            <label>Date of Lecture Delivered</label>
            <input type="date"/>

            <label>Period</label>
            <select>
                <option value="">Select the Period</option>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
            </select>

            <label>Topic of Discussion</label>
            <input type="text" placeholder="Enter the Topic"/>

            <label>No.of.Beneficiaries</label>
            <input type="number" placeholder="Enter the Number"/>

            <label>Details of the Discussion made</label>
            <input type="text" placeholder="Enter the Details"/>

            <label>Outcome of the Discussion</label>
            <input type="text" placeholder="Enter the Outcome"/>

            <label>Outcome of the Activity</label>
            <input type="text" placeholder="Enter the Outcome"/>

            <label>PO and PSO</label>
            <input type="text" placeholder="Enter the PO and PSO"/>

            <label>Attendance Sheet - PDF</label>
            <input type="file"/>

            <label>Handouts of Lecture - PDF</label>
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
export default Techtalks;