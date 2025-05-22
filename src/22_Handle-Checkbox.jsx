import { useState } from "react"

export function Skills() {
    const [skill, selectedSkill] = useState([]);
    function setSkills(event) {
        if (event.target.checked) {
            selectedSkill([...skill, event.target.value]);
        } else {
            selectedSkill([...skill.filter(item => item != event.target.value)])
        }
    }

    return (
        <>
            <form action="/">
                <h2>Select Your Skills</h2>
                <input type="checkbox" value="HTML" id="HTML" onChange={setSkills} />
                <label htmlFor="HTML">HTML</label>

                <input type="checkbox" value="CSS" id="CSS" onChange={setSkills} />
                <label htmlFor="CSS">CSS</label>

                <input type="checkbox" value="JQUERY" id="JQUERY" onChange={setSkills} />
                <label htmlFor="JQUERY">JQUERY</label>
            </form>

            <h3>Our Selected Subjects: {skill.toString()}</h3>
        </>
    )
}