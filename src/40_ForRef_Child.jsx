/* import { forwardRef } from "react";

function InputField(prop, ref) {
    return (
        <>
            <input ref={ref} type="text" />
        </>
    )
}

export default forwardRef(InputField); */



// or After React 19+

function InputField(prop) {
    return (
        <>
            <input ref={prop.ref} type="text" />
        </>
    )
}


export default InputField;