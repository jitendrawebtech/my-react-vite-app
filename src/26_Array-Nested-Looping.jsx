import CollegeList from "./Colleges";

const College = () => {
    const colleges = [
        {
            collegeName: "Janta Inter College",
            city: "Newada",
            email: "jantaCollege@gmail.com",
            students: [
                {
                    name: "Sandeep",
                    class: 10,
                    email: "sandeep@gmail.com"
                },
                {
                    name: "Suraj",
                    class: 12,
                    email: "suraj@gmail.com"
                },
                {
                    name: "Bharat",
                    class: 10,
                    email: "bharat@gmail.com"
                }
            ]
        },
        {
            collegeName: "Rampher Girl Inter College",
            city: "Paikauli",
            email: "rampherCollege@gmail.com",
            students: [
                {
                    name: "Pradeep",
                    class: 10,
                    email: "pradeep@gmail.com"
                },
                {
                    name: "Sumant",
                    class: 12,
                    email: "sumant@gmail.com"
                },
                {
                    name: "Dhiraj",
                    class: 10,
                    email: "dhiraj@gmail.com"
                }
            ]
        },
        {
            collegeName: "ShankarJi Pg College",
            city: "Mathiya",
            email: "ShankarJi@gmail.com",
            students: [
                {
                    name: "Pawan",
                    class: 13,
                    email: "pawan@gmail.com"
                },
                {
                    name: "Mangal",
                    class: 10,
                    email: "mangal@gmail.com"
                },
                {
                    name: "Gopal",
                    class: 12,
                    email: "gopal@gmail.com"
                }
            ]
        }
    ]

    return (
        <>
            <h2>Colleges Names</h2>
            {
                colleges.map((college, i) => (
                    <ul style={{
                        backgroundColor: "#6B9BCF",
                        padding: "20px",
                        borderRadius: "20px"
                    }} key={i}>
                        <CollegeList college={college} />
                    </ul>
                ))
            }
        </>
    )
}

export default College;