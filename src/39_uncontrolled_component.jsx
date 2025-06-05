import { useRef } from "react";

function From() {

    function getFormData(e) {
        e.preventDefault();
        const inputVal = document.getElementById('input').value;
        const passVal = document.getElementById('password').value;
        console.log("User Values by DOM: " + inputVal, passVal);
    }


    // With UseRef
    const inputRef = useRef();
    const passwordRef = useRef();

    function getFormDataRef(e) {
        e.preventDefault();
        const inputVal = inputRef.current.value;
        const passVal = passwordRef.current.value;
        console.log("User Values by Ref Hook: " + inputVal, passVal);
    }

    return (
        <>
            <h2>Always Check in Console log</h2>
            <form action="index" onSubmit={getFormData}>
                <input type="text" id="input" />
                <input type="password" id="password" />
                <button>Submit Form by DOM</button>
            </form>

            <form action="index" onSubmit={getFormDataRef}>
                <input ref={inputRef} type="text" id="inputRef" />
                <input ref={passwordRef} type="password" id="passwordRef" />
                <button>Submit Form by Ref Hook</button>
            </form>
        </>
    )
}

export default From;