import { useState } from "react"


export function GetIputValue() {
    const [inputVal, newInputVal] = useState("");
    return (
        <>
            <input type="text" value={inputVal} onChange={event => newInputVal(event.target.value)} placeholder="Your Name" />
            <p>Paragrph Value: {inputVal}</p>
            <button onClick={() => newInputVal("")}>Clear Value</button>
        </>
    )
}



// Que - Take 3 input field and print or console all input values

export function InpVals() {
    const [vals, allVals] = useState("");
    const viewFun = () => {
        let items = "";
        let getVal = document.querySelectorAll("form input");

        /* for (let item of getVal) {
            items += item.value + " ";
        } */
        // OR
        getVal.forEach(item => {
            items += item.value;
        })
        console.log(items);

        allVals(items);
    }
    return (
        <>
            <h3>All Values : {vals}</h3>

            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
            <button onClick={viewFun}>Get All Values</button>
        </>
    )
}

