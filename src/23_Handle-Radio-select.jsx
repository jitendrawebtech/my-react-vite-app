import { use, useState } from "react"

export default function Gender() {
    const [gender, setGender] = useState("Female");
    return (
        <>
            <h2>Select Your Gender</h2>
            <input type="radio" name="gender" id="male" value="Male" onChange={e => setGender(e.target.value)} />
            <label htmlFor="male">Male</label>
            <input checked={gender == "Female"} type="radio" name="gender" id="female" value="Female" onChange={e => setGender(e.target.value)} />
            <label htmlFor="female">Female</label>

            <h3>You selected: {gender}</h3>
        </>
    )
}

export function City() {
    const [city, selCity] = useState("Mumbai");
    return (
        <>
            <h2>Select Your City</h2>
            <select defaultValue={"Mumbai"} onChange={e => selCity(e.target.value)}>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Gurugram">Gurugram</option>
            </select>
            <h2>Your Selected City: {city}</h2>
        </>
    )
}