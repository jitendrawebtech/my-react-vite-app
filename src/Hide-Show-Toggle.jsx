import { useState } from "react";


function Toggle() {
    const [data, toggleData] = useState(true);
    return (
        <>
            <button onClick={() => toggleData(!data)}>Toggle Now</button>
            {
                data ? <h1>Data Toggle</h1> : null
            }
        </>
    )
}

export default Toggle;