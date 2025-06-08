import { useState } from "react"

function Members() {
    const [mem, addMem] = useState();
    const [mems, addMems] = useState([]);

    function addMemFun() {
        addMems([...mems, mem]);
    }
    const totalMems = mems.length;
    const lastMems = mems[mems.length - 1];
    const unique = [...new Set(mems)].length;
    return (
        <>
            <h2>Total Members: {totalMems}</h2>
            <h2>Last Member: {lastMems}</h2>
            <h2>Unique Members: {unique}</h2>

            <input type="text" onChange={e => addMem(e.target.value)} />
            <button onClick={addMemFun}>Add Members</button>
            {
                mems.map((item, i) => <h2 key={i}>{item}</h2>)
            }
        </>
    )
}

export default Members;