import Students from "./Students";

function CollegeList({ college }) {
    return (
        <>
            <li>{college.collegeName}</li>
            <li>{college.city}</li>
            <li>{college.email}</li>
            <li><Students students={college.students} /></li>
        </>
    )
}

export default CollegeList;