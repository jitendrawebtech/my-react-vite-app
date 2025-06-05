import { useRef } from "react"
import InputField from "./40_ForRef_Child";

function InputForRef() {
    const inputRef = useRef();

    function getValue() {
        const inputVal = inputRef.current.value;
        inputRef.current.style.color = 'red';
        console.log(inputVal);
    }

    return (
        <>
            <h2>Always check in Log</h2>
            <InputField ref={inputRef} />
            <button onClick={getValue}>Submit</button>
        </>
    )
}

export default InputForRef;