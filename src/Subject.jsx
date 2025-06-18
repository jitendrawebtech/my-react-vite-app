import { useContext } from "react"
import { SubjectContext } from "./ContextData"

function Subject() {
    const subject = useContext(SubjectContext)
    return (
        <div style={{ backgroundColor: 'red', padding: '20px' }}>
            <h2>Subject Is : {subject}</h2>
        </div>
    )
}

export default Subject;