import React,{useState} from "react";
import "./SeTAFaddForm.css"
import { Econtent } from "./SeTAFaddForm.js";
import Journal from "./Journal.js";
import Conference from "./Conference.js";
import Workshop from "./Workshop.js";
import Seminar from "./Seminar.js";
import Techtalks from "./Techtalks.js";
import Faculty from "./Faculty.js";
import Ntel from "./Ntel.js";
import Taste from "./Taste.js";
import Motivation from "./Motivation.js";
import Profession from "./Profession.js";
import Field from "./Field.js";
import Proposals from "./Proposals.js";
import Visit from "./Visit.js";
import Seed from "./Seed.js";
import Award from "./Award.js";
import Patent from "./Patent.js";
import Books from "./Books.js";
import Consult from "./Consult.js";
import Collaborate from "./Collaborate.js";
import Library from "./Library.js";

 export const Setafadd=()=>{

  const [setafsubtype, setsetafsubtype]=useState({
    "Subtype":""
  })

  const infoCollect=(eve)=>{
    const{name,value}=eve.target
    setsetafsubtype((old)=>{
      if(name==="Subtype" && value==="econtent"||name==="Subtype" && value==="journal"||name==="Subtype" && value==="conference"||name==="Subtype" && value==="workshop"||name==="Subtype" && value==="seminar"||name==="Subtype" && value==="techtalks"||name==="Subtype" && value==="faculty"||name==="Subtype" && value==="ntel"||name==="Subtype" && value==="taste"||name==="Subtype" && value==="motivation"||name==="Subtype" && value==="profession"||name==="Subtype" && value==="field"||name==="Subtype" && value==="proposals"||name==="Subtype" && value==="visit"||name==="Subtype" && value==="seed"||name==="Subtype" && value==="award"||name==="Subtype" && value==="patent"||name==="Subtype" && value==="books"||name==="Subtype" && value==="consult"||name==="Subtype" && value==="collaborate"||name==="Subtype" && value==="library"){
      return{
        ...old,
        [name]:eve.target.value
    }
  }
    })
  }

  const Condition=()=>{
    if(setafsubtype.Subtype==="journal"){
      return<Journal/>
    }
    if(setafsubtype.Subtype==="conference"){
      return<Conference/>
    }
    if(setafsubtype.Subtype==="workshop"){
      return<Workshop/>
    }
    if(setafsubtype.Subtype==="seminar"){
      return<Seminar/>
    }
    if(setafsubtype.Subtype==="techtalks"){
      return<Techtalks/>
    }
    if(setafsubtype.Subtype==="faculty"){
      return<Faculty/>
    }
    if(setafsubtype.Subtype==="ntel"){
      return<Ntel/>
    }
    if(setafsubtype.Subtype==="taste"){
      return<Taste/>
    }
    if(setafsubtype.Subtype==="econtent"  ){
      return<Econtent/>
    }
    if(setafsubtype.Subtype==="motivation"){
      return<Motivation/>
    }
    if(setafsubtype.Subtype==="profession"){
      return<Profession/>
    }
    if(setafsubtype.Subtype==="field"){
      return<Field/>
    }
    if(setafsubtype.Subtype==="proposals"){
      return<Proposals/>
    }
    if(setafsubtype.Subtype==="visit"){
      return<Visit/>
    }
    if(setafsubtype.Subtype==="seed"){
      return<Seed/>
    }
    if(setafsubtype.Subtype==="award"){
      return<Award/>
    }
    if(setafsubtype.Subtype==="patent"){
      return<Patent/>
    }
    if(setafsubtype.Subtype==="books"){
      return<Books/>
    }
    if(setafsubtype.Subtype==="consult"){
      return<Consult/>
    }
    if(setafsubtype.Subtype==="collaborate"){
      return<Collaborate/>
    }
    if(setafsubtype.Subtype==="library"){
      return<Library/>
    }
  }

  console.log(setafsubtype)



  return (
    <>
    <body>
      <div className="main">
        <div className="report-container" style={{justifyContent:'center'}}>
        <div className='head'><h1 style={{color:'purple'}}>EVENT PROPOSAL</h1></div>
         
          <div  className='ej' >
         
            <tr><label><b>Sub type</b></label>
            <select name="Subtype" onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}}>
              <option>Select sub type...</option>
              <option value="journal">Journal Publications</option>
              <option value="conference">Conference Publications and Presentations</option>
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="techtalks">TechTalks to be delivered Multidisciplinary Lectures</option>
              <option value="faculty">Faculty Guest Talk in other Institutions</option>
              <option value="ntel">NPTEL Certifications</option>
              <option value="taste">Participation in TASTE</option>
              <option value="econtent" >e-Content,(Video Lecture)</option>
              <option value="visit">Visit to Industries, Institution</option>
              <option value="seed">Seed Money Proposal for Research</option>
              <option value="award" >Award at National and International Level</option>
              <option value="proposals">Proposals Submission for Grands</option>
              <option value="books">Books, Chapters Authorship</option>
              <option value="consult">Consultancy and Corporate Training done for Revenue Generation</option>
              <option value="patent">Patents Filled, Published, Granted</option>
              <option value="collaborate">Collaborative Activities with MoU Signed Industries, Institutions</option>
              <option value="library">Visit to the Library</option>
              <option value="motivation">Students Motivation for Paper Presentation, Project Submission, Other Contests</option>
              <option value="profession">Professional Society Membership</option>
              <option value="field">Students Field Work, Internship Guidance</option>
            </select> 
            </tr>
            <Condition/>
        </div>
        </div>
    </div>
     
      
    </body>
    </>

  )
}


export default Setafadd;