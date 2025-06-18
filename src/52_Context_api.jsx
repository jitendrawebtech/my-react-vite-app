import { useState } from "react";
import College from "./CollegeData";
import { SubjectContext } from "./ContextData";

function SubjectApi() {
    const [subject, setSubject] = useState('Biology');
    return (
        <div style={{ backgroundColor: 'yellow', padding: '20px', color: 'black' }}>
            <select value={subject} onChange={sub => setSubject(sub.target.value)}>
                <option value="">Select Subject</option>
                <option value="English">English</option>
                <option value="Physics">Physics</option>
                <option value="Hindi">Hindi</option>
            </select>
            <button onClick={() => setSubject('')}>Clear Subject</button>
            <h2>Context API</h2>
            <SubjectContext.Provider value={subject}>
                <College />
            </SubjectContext.Provider>
        </div>
    )
}

export default SubjectApi;