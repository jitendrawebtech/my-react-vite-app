// import { useState } from "react";

// New Method
import { useTransition } from "react"



function FormTrans() {

    /* const [trans, setTrans] = useState(false);

    async function transition() {
        setTrans(true)
        await new Promise(res => setTimeout(res, 2000));
        setTrans(false)
    } */
    const [pending, setPending] = useTransition();
    function transition() {
        setPending(async () => {
            await new Promise(res => setTimeout(res, 5000))
        })
    }

    return (
        <>
            {/* Not Mendetory Form Tag, use on indivisual elements */}
            <h2>useTransition Hook</h2>
            <button onClick={transition} disabled={pending}>
                {
                    pending ? <img style={{ width: '30px' }} src="https://bfis.app.dot.illinois.gov/images/loader.gif" alt="Loading" /> : "Submit"
                }
            </button>
        </>
    )
}

export default FormTrans;