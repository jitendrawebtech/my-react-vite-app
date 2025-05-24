function Students({ students }) {
    return (
        <>
            {
                students.map((student, index) => (
                    <ul key={index} style={{
                        backgroundColor: "#1B9BCF",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        margin: "10px"
                    }} >
                        <li>{student.name}</li>
                        <li>{student.class}</li>
                        <li>{student.email}</li>
                    </ul>
                ))
            }
        </>
    )
}

export default Students;