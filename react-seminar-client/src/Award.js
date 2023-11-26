import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"
// import {useNavigate} from 'react';

 export const Award=()=>{
  // const[information,setInformation]=useState("")

  const[Symposium,setSymposium]=useState({
    "Academin_year":"",
    "semester":"",
    "name_of_faculty_awarded":"",
    "name_of_the_award":"",
    "category":"",
    "date_of_award":"",
    "name_of_awarding_org":""
  })

  console.log(Symposium)
//   const[proposal,setProposal]=useState([])

//   const fillPorposals=async(s_no)=>{
//     const temp = await onProposalsLoad(s_no)
//     setProposal(temp)
// }
// console.log(Symposium)
// console.log(typeof(Symposium.Event_type))

const infoCollect=(eve)=>{
  const{name,value}=eve.target
  setSymposium((old)=>{
      if(name==="Academin_year"||name==="semester"||name==="name_of_faculty_awarded"||name==="name_of_the_award"||name==="category"||name==="date_of_award"||name==="name_of_awarding_org"||name==="attachments"||name==="award_certificate"){
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
  // const temp = await -nameonPropose(Symposium)
  // alert(Symposium.faculty_name,Symposium.link)
  // console.log("Symposium :",Symposium)
  // alert("Wait")
  try{
  await axios.post(`http://localhost:1234/newrecord`,Symposium)
  }
  catch(err){
    alert("Error in axios")
  }
  // setInformation(temp.message)
}
  return (
    <>
    <div className='overallcontent'>
     <div className="style" style={{justifyContent:'center'}}>
     <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>AWARDS AT NATIONAL INTERNATIONAL LEVEL</h1></div>
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

        <label>Name of the Faculty  Awarded National/ International Fellowship</label>
        <input type="text" placeholder="Enter the Name"/>

        <label>Name of the Award/Fellowship</label>
        <input type="text" placeholder="Enter the Name"/>

        <label>Category</label>
        <select>
            <option value="">Select the Category</option>
            <option value="0">National</option>
            <option value="1">International</option>
        </select>

        <label>Date of Award</label>
        <input type="date" placeholder="Enter the date"/>

        <label>Name of Awarding Organization</label>
        <input type="text" placeholder="Enter the Name"/>

        
            <label>Award Certificate -PDF </label>
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


export default Award