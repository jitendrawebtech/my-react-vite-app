import { useState } from "react";

function Academy() {
    const [stuName, setStuName] = useState(
        [
            {
                name: "Raheem",
                roll: 35,
                bio: {
                    momName: "Sangeeta",
                    age: 16
                }
            },
            {
                name: "Kajal",
                roll: 40,
                bio: {
                    momName: "Sangeeta",
                    age: 16
                }
            },
            {
                name: "Sanjeev",
                roll: 15,
                bio: {
                    momName: "Sangeeta",
                    age: 16
                }
            }
        ]
    );
    function updateStuInfo(val) {
        stuName[stuName.length - 1].bio.momName = val;
        setStuName([...stuName]);
    }

    return (
        <>
            <h2>Update Student Mom Name</h2>
            <input type="text" onChange={e => updateStuInfo(e.target.value)} />
            {
                stuName.map((item, index) => (
                    <h2>{item.name}, {item.roll}, {item.bio.momName}</h2>
                ))
            }
        </>
    )
}

export default Academy;

