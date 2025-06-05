import { useRef } from "react"

function UserForm() {

    const refInput = useRef(null);
    const refHeading = useRef(null);

    function focusOnInput() {
        refInput.current.focus();
        refInput.current.placeholder = "Please Enter Name";
        refInput.current.value = "123";
        refInput.current.style.color = "Yellow";

    }

    function toggleInput() {

        if (refInput.current.style.display != "none") {
            refInput.current.style.display = "none";
        }
        else {
            refInput.current.style.display = "inline";
        }
    }

    function headingFun() {
        refHeading.current.style.color = "red";
    }

    return (
        <>
            <button onClick={toggleInput}>Toggle Input</button>
            <input ref={refInput} type="text" placeholder="Name" />
            <button onClick={focusOnInput}>Focus on Input</button>

            <h2 ref={refHeading}>Hellow World!</h2>
            <button onClick={headingFun}>Change Heading Color</button>
        </>
    )
}

export default UserForm;