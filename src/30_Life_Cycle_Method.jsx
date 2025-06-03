import { useState } from "react";
import Counter from "./Counter";

const CounterBtn = () => {

    const [value, setValue] = useState(0);
    const [data, setData] = useState(0);
    const [display, setDisplay] = useState(true);

    return (
        <>
            {display ? <Counter value={value} data={data} /> : null}
            <button onClick={() => setValue(value + 1)}>Mounting Button</button>
            <button onClick={() => setData(data + 1)}>Updating Button</button>
            <button onClick={() => setDisplay(!display)}>Toggle Data</button>
        </>
    )
}

export default CounterBtn;