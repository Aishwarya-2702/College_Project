import "./SeTAFaddForm.css"

export const ValueAdded=()=>{
    return(
        <>
        <body>
        <div class="main" >
        <div className="report-container" style={{justifyContent:'center'}}>
        <div class="report-header">
          <h1 class="recent-Articles"><center>Value Added Courses</center></h1>
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

          <label htmlFor="guest_email">Name of the Value Added Courses</label>
          <input type="text" name="guest_email" placeholder="Enter the Name" />
      
          <label htmlFor="guest_email">Venue of Value Added Course</label>
          <input type="text" name="guest_email" placeholder="Enter the Venue" />
       
          <div className="form group">
          <label htmlFor="event_date">Date</label>
          <input type="date" name="event_date"  required /></div>

          <label htmlFor="guest_email">Duration</label>
          <input type="text" name="guest_email" placeholder="Enter the Duration" />

          <label htmlFor="guest_email">Name of Resource Person</label>
          <input type="text" name="guest_email" placeholder="Enter the Name" />

          <label htmlFor="guest_email">Address of Resource Person</label>
          <input type="text" name="guest_email" placeholder="Enter the Address" />

          <label htmlFor="guest_email">Designation of Resource Person</label>
          <input type="text" name="guest_email" placeholder="Enter the Designation" />

          <label htmlFor="guest_email">Organization of Resource Person</label>
          <input type="text" name="guest_email" placeholder="Enter the Organization" />

          <label htmlFor="guest_email">Mobile of Resource Person</label>
          <input type="text" name="guest_email" placeholder="Enter the Number" />

          <label htmlFor="guest_email">Email ID of Resource Person</label>
          <input type="text" name="guest_email" placeholder="Enter the MailID" />

          <label htmlFor="sem">Students Participated in the Event</label>
          <input type="text" name="guest_email" placeholder="Enter the Participants" />
     
          <label htmlFor="sem">Outcome of the Activity</label>
          <input type="text" name="guest_email" placeholder="Enter the Outcome" />

          <label htmlFor="guest_email">CCR First Page-PDF</label>
          <input type="file" name="guest_email" />
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
export default ValueAdded;