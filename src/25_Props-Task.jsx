import { useEffect, useState } from "react"

export function Clock({ bgColor }) {
    const [time, newTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            newTime(new Date().toLocaleTimeString());
        }, 1000)
    }, [])

    return (
        <div style={{ backgroundColor: bgColor, padding: '0px 10px', borderRadius: '20px' }}>
            <h2>{time}</h2>
        </div>
    )
}

export default function ClockColor() {
    const [color, setColor] = useState('black');
    return (
        <>
            <select defaultValue="black" onChange={event => setColor(event.target.value)}>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
            </select>

            <Clock bgColor={color} />
        </>
    )
}