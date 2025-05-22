import { use } from "react";
import { useState } from "react";

function Myfruit() {
    const [fruit, newFruit] = useState("Apple");
    const fruitUpdate = (newItem) => {
        newFruit(newItem)
    }
    return (
        <>
            <button onClick={() => fruitUpdate("Banana")}>Click to Update Fruit</button>
            <h1>{fruit}</h1>
        </>
    )
}

function Counter() {
    const [count, countFun] = useState(0);
    const [rcount, rcountFun] = useState(0)
    return (
        <>
            <button onClick={() => countFun(count + 1)}>Increase Counter</button>
            <h2>Start Increase Counter: {count}</h2>
            <button onClick={() => rcountFun(rcount - 1)}>Decrease Counter</button>
            <h2>Start Decrease Counter: {rcount}</h2>
        </>
    )
}

export default Myfruit;
export { Counter };