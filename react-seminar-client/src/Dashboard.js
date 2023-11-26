import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FacultyMenu } from "./FacultyMenu"
import { CreateEvent } from "./CreateEvent"
import { useEffect, useState } from "react"
import { HodDashboard } from "./HodDashboard"
import { FacultyPage } from "./FacultyPage"
import { Add } from "./Add"
import { PrincipalDashboard } from "./PrincipalDashboard"
import { EcrInput } from "./ecrInput"
import PDFGenerator from "./pdfGenerator"
import Setaf from "./Setaf"
import Setafadd from "./Setafadd"
import SeSTA from "./SeSTA"
import SeSTAadd from "./SeSTAadd"
import NptelCertification from "./NptelCertification"
import OnlineCertification from "./OnlineCertification"
import StudentTechTalks from "./StudentTechTalks"
import StudentsParticipation from "./StudentsParticipation"
import Intership from "./Intership"
import ValueAdded from "./ValueAdded"
import StudentTechTalk from "./StudentTechTalk"


export const Dashboard=()=>{
    const[hodLog,setHodLog]=useState(false)
    const[principalLog,setPrincipalLog]=useState(false)

    useEffect(()=>{
        const logged=JSON.parse(sessionStorage.getItem("person"))
        if(logged.faculty_desig===403){
            setHodLog(true)
        }
    },[])
    useEffect(()=>{
        const logged=JSON.parse(sessionStorage.getItem("person"))
        if(logged.faculty_desig===401){
            setPrincipalLog(true)
        }
    },[])

    return(
        <>
            {
                (principalLog) ?
                <>
                <PrincipalDashboard/>
                </>
                :
                (hodLog) ?
                <>
                    <HodDashboard/>
                </>
                :
                <>
                    <BrowserRouter>
                        <FacultyMenu/>
                        <Routes>
                        <Route path="" element={<FacultyPage/>} />
                            <Route path="ecr" element={<CreateEvent/>} />
                            <Route path="add" element={<Add/>} />
                            <Route path="setaf" element={<Setaf/>} />
                            <Route path="ecrInput" element={<EcrInput/>} />
                            <Route path="viewPdf" element={<PDFGenerator/>} />
                            <Route path="setafadd" element={<Setafadd/>}/>
                            <Route path="sesta" element={<SeSTA/>}/>
                            <Route path="sestaadd" element={<SeSTAadd/>}/>
                            <Route path="nptelcertification" element={<NptelCertification/>}/>
                            <Route path="onlinecertification" element={<OnlineCertification/>}/>
                            <Route path="studenttechtalks" element={<StudentTechTalks/>}/>
                            <Route path="studentsparticipation" element={<StudentsParticipation/>}/>
                            <Route path="intership" element={<Intership/>}/>
                            <Route path="valueadded" element={<ValueAdded/>}/>
                            <Route path="studenttechtalk" element={<StudentTechTalk/>}/>
                        </Routes>
                    </BrowserRouter>
                </>
            }
        </>
    )
}