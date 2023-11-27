import "./SeTAFaddForm.css"

export const StudentTechTalks=()=>{
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
                            <th>Date</th>
                            <th>Title of the TechTalk </th>
                            <th>Name of the Student</th>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Section</th>
                            <th>No. of Beneficiaries</th>
                            <th>Name of the Program</th>
                            <th>Attachements</th>
            </tr>
          </thead>
        </table>
        </div>
        </>
    )
}
export default StudentTechTalks;