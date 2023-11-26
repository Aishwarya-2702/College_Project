import "./SeTAFaddForm.css"

export const NptelCertification=()=>{
    return(
        <>
        <body>
        <div class="main" >
        <div className="report-container" style={{justifyContent:'center'}}>
        <div class="report-header">
         <h1 class="recent-Articles">NPTEL CERTIFICATION</h1>
        </div>
        <div className="row justify-content-center"style={{justifyContent:'center'}}>
        <div className="form group">
          <label>Academic year</label>
          <select name="event_name">
            <option value="">Select The Academic Year</option>
            <option value="0">2022-23</option>
            <option value="1">2023-24</option>   
          </select>

          <label>Semester</label>
          <select name="event_name">
            <option value="">Select The Semester</option>
            <option value="ODD">ODD</option>
            <option value="EVEN">EVEN</option>
          </select>
        </div>
                
        <div className="form group">
          <label >Name Of The Student</label>
          <input  type="text" name="event_title" placeholder="Enter your Name" className="form-control"/>
        </div>
                    
        <div className="form group">
          <label >Academic Year Of The Student:</label>
          <input type="text" placeholder="Enter the Academic Year"/>
        </div>

        <div className="form group">
        <label >Semester</label>
        <select >
          <option value="">Select The Semester</option>
          <option value="2022-23">2022-23</option>
          <option value="2023-24">2023-24</option>
        </select>
        </div>  

        <div className="form group">
        <label >Section</label>
        <select >
         <option value="">Select The Secction</option>
         <option value="A">A</option>
         <option value="B">B</option>
         <option value="C">C</option>
        </select>                      
        </div>                

        <div className="form group">
          <label >Course Name</label>
          <input  type="text" name="event_title" placeholder="Enter the Course Name" className="form-control"/>
        </div>

        <div className="form group">
          <label >Year</label>
          <input  type="text" name="event_title" placeholder="Enter the Year" className="form-control"/>
        </div>

        <div className="form group">
          <label >Session</label>
          <input  type="text" name="event_title" placeholder="Enter The Session" className="form-control"/>
        </div>

        <div className="form group">
          <label >Score Obtained</label>
          <input  type="text" name="event_title" placeholder="Score Obtained" className="form-control"/>
        </div>
     
     
        <div className="form group">
         <label >Certificate Type</label>
         <select >
          <option value="">select The Type</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Elite">Elite</option>
          <option value="Successfully Completed">Successfully Completed</option>
         </select>                     
        </div>

        <div className="form group">
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
 </body>
        </>
    )
}
export default NptelCertification;