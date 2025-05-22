export default function Table() {

    const students = [
        {
            name: "Dhiraj",
            roll: 23,
            gmail: "Dhiraj@gamil.com",
            id: 1
        },
        {
            name: "Pawan",
            roll: 20,
            gmail: "Pawan@gamil.com",
            id: 2
        },
        {
            name: "Rajesh",
            roll: 30,
            gmail: "Rajesh@gamil.com",
            id: 3
        },
        {
            name: "Sandeep",
            roll: 27,
            gmail: "Sandeep@gamil.com",
            id: 4
        }
    ]

    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Gmail</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.roll}</td>
                                <td>{item.gmail}</td>
                                <td>{item.id}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}