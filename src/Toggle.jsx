import useToggle from "./useToggle";

function ToggleData() {
    const [data, setData] = useToggle('true');
    return (
        <>
            <button onClick={() => setData(!data)}>Hide/Data</button>
            {
                data ? <h2>Sum text is here</h2> : null
            }
        </>
    );
}

export default ToggleData;