import React, { useState} from 'react';
import axios from "axios"
import "./SeTAFaddForm.css"
// import {useNavigate} from 'react';

 export const Econtent=()=>{
  const[information,setInformation]=useState("")

  const[Symposium,setSymposium]=useState({
    "Name_of_the_Faculty":"",
    "Name_of_the_Module_Developed":"",
    "Module_of_platform":"",
    "Date_of_launching_e_content":"",
    "Link_to_the_module_developed":""
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
      if(name==="Name_of_the_Faculty"||name==="Name_of_the_Module_Developed"||name==="Module_of_platform"||name==="Date_of_launching_e_content"||name==="Link_to_the_module_developed"){
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
  await axios.post(`http://localhost:1234/econtent/newrecord`,Symposium)
  // setInformation(temp.message)
}
  return (
    <>
    <div className='overallcontent'>
    <div className="style" style={{justifyContent:'center'}}>
    <div class="head"><h1 class="recent-Articles" style={{color:'purple'}}>E-CONTENT, (VIDEO LECTURE)</h1></div>
    <div className="row justify-content-center"style={{justifyContent:'center'}}>
    <div className="ej">
      <label>Name of the Faculty</label>
      <input type="text" placeholder="Enter the Name" name='Name_of_the_Faculty'value={Symposium.faculty_name} onChange={infoCollect}/>

      <label>Name of the Module Developed</label>
      <input type="text" placeholder="Enter the Module Name" name='Name_of_the_Module_Developed' value={Symposium.nameofmoduledeveloped} onChange={infoCollect}/>

      <label>Module of Platform</label>
      <input type="text" placeholder="Enter the Module Platform" name='Module_of_platform' value={Symposium.platform} onChange={infoCollect}/>

      <label>Date of launching e-Content</label>
      <input type="date" name='Date_of_launching_e_content' value={Symposium.dateoflaunching} onChange={infoCollect}/>

      <label>Link to the Module Developed</label>
      <input type="text" placeholder="Enter the Link" name='Link_to_the_module_developed' value={Symposium.link} onChange={infoCollect}/>
    </div>
    <h1 style={{color:'red',}}></h1>
         <div className='row mt-5 justify-content-around' onClick={callPropose}>
          <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
          <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
         </div> 
    </div>
    </div>
    </div>
    </>

  )
}


export default Econtent