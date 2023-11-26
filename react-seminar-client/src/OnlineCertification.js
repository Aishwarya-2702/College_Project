import "./SeTAFaddForm.css"

export const OnlineCertification=()=>{
    return(
        <>
         <body>
         <div class="main">
         <div className="report-container" style={{justifyContent:'center'}}>
         <div class="report-header">
         <h1 class="recent-Articles"><center>ONLINE CERTIFICATION</center></h1>
         </div>
         <div className="row justify-content-center"style={{justifyContent:'center'}}>
         <div className="form group">
          <label htmlFor="acdyr_id">Academic Year</label>
          <select name="acdyr_id" className="form group"  >
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

          <label htmlFor="guest_email">Name of the Student</label>
          <input type="text" name="guest_email" placeholder="Enter your Name" />

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
 
          <label htmlFor="sem">Online Certification</label>
          <select name="sem">
            <option value="">Select the Certification</option>
            <option value="0">Technical</option>
            <option value="1">General Topic</option>
          </select>

          <label htmlFor="guest_email">Name of the Course</label>
          <input type="text" name="guest_email" placeholder="Enter the Course Name" />
      
          <div className="form group">
            <label htmlFor="event_date">Date</label>
            <input type="date" name="event_date"  required /></div>

            <label htmlFor="guest_email">Duration</label>
            <input type="text" name="guest_email" placeholder="Enter the Duration" />

            <label htmlFor="guest_email">Details of the Organization</label>
            <input type="text" name="guest_email" placeholder="Enter the Deatails" />

            <label htmlFor="guest_email">Awards and Recognitions</label>
            <input type="text" name="guest_email" placeholder="Enter the Achievements"  />
      
            <label htmlFor="guest_email">Outcome of the Activity</label>
            <input type="text" name="guest_email" placeholder="Enter the Outcomes" />

            <label htmlFor="guest_email">Student Techtalk Report First Page-PDF</label>
            <input type="file" name="guest_email"  />
          </div>
    
          <h1 style={{color:'red',}}></h1> 
          <div className='row mt-5 justify-content-around'>
            <input type='button' onClick={()=>{}} value="Submit" className='col-3 btn btn-primary' />
            <input type='button' onClick={()=>{}} value="Clear" className='col-3 btn btn-danger' />
          </div>      
        </div>
      </div>
    </div>
  </body>
        </>
    )
}
export default OnlineCertification;