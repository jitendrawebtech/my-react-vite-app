import { useFormStatus } from 'react-dom';

function StateForm() {

    async function submitFun() {
        await new Promise(res => setTimeout(res, 2000));
        console.log("Form Submited");
    }

    return (
        <>
            <form action={submitFun}>
                <FormFields />
            </form>
        </>
    )
}

export function FormFields() {
    const { pending } = useFormStatus();
    return (
        <>
            <input type="text" />
            <button disabled={pending} >{pending ? "Submitting" : "Submit"}</button>
        </>
    )
}

export default StateForm;