import "./SeTAFaddForm.css"

export const ValueAdded=()=>{
    return(
        <>
         <div class="overallcontent">
         <div class="report-header">
         <h1 class="recent-Articles">Your Reports</h1>
         </div>
         <table className='table table-striped '>
          <thead>
          <tr>
          <th>Acadamic Year</th>
                            <th>Semester</th>
                            <th>Department</th>
                            <th>Name of the Value Added Course</th>
                            <th>Venue of Value Added Course</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Name of Resource Person</th>
                            <th>Address of  Resource Person</th>
                            <th>Designation of Resource Person</th>
                            <th>Organization of Resource Person</th>
                            <th>Mobile of Resource Person</th>
                            <th>Email ID of Resource Person</th>
                            <th>Students Participated in the Event</th>
                            <th>Outcome of the Activity</th>
                            <th>Attachements</th>
                          
          </tr>
          </thead>
         </table>
         </div>
        </>
    )
}
export default ValueAdded;