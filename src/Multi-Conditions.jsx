import { useState } from "react";

function MultiCondition() {
    const [count, incCount] = useState(0);
    return (
        <>
            <button onClick={() => incCount(count + 1)}>Check Condtions</button>
            {
                count == 0 ? <h1>Condtion: {count}</h1>
                    : count == 1 ? <h1>Condtion: {count}</h1>
                        : count == 2 ? <h1>Condtion: {count}</h1>
                            : count == 3 ? <h1>Condtion: {count}</h1>
                                : count == 4 ? <h1>Condtion: {count}</h1>
                                    : <h1>Anything Else</h1>
            }
        </>
    )
}

export default MultiCondition;