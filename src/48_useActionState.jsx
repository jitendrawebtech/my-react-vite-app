import { useActionState } from "react";

function UserData() {

    const [data, action, pending] = useActionState(handleSubmit, null);

    async function handleSubmit(prevData, formData) {
        let name = formData.get('name');
        let pass = formData.get('password');
        await new Promise(res => setTimeout(res, 2000));
        console.log('All Data :', name, pass);
        if (name && pass) {
            return { msg: "Form Submitted", name, pass };
        } else {
            return { error: "Failed to submit", name, pass };
        }
    }

    return (
        <>
            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" />
                <input defaultValue={data?.pass} type="password" name="password" />
                <button disabled={pending}>Submit</button>
            </form>

            {
                data?.msg && <h3 style={{ color: 'green' }}>{data?.msg}</h3>
            }
            {
                data?.error && <h3 style={{ color: 'red' }}>{data?.error}</h3>
            }

            <h2>Name: {data?.name}</h2>
            <h2>Password: {data?.pass}</h2>
        </>
    )
}

export default UserData;