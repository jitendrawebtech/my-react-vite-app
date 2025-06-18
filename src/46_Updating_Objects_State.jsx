import { useRef, useState } from "react";

function UpdatingObject() {
    const [employee, setEmployee] = useState(
        {
            name: "Vikash",
            age: 30,
            address: {
                state: "Delhi",
                city: "Ashram"
            }
        }
    )

    // Updating object using of form and button tag with useRef hook

    /*     const nameField = useRef();
        const cityField = useRef();
    
        function updateValue(e) {
            e.preventDefault();
            
            const newName = nameField.current.value;
            const newCity = cityField.current.value;
    
            employee.name = newName;
            employee.address.city = newCity;
            console.log(employee);
    
            setEmployee({ ...employee });
        } */

    // Updating object without useRef and form
    function updateName(newName) {
        employee.name = newName;
        setEmployee({ ...employee });
    }
    function updateCity(newCity) {
        employee.address.city = newCity;
        console.log(employee);

        setEmployee({ ...employee });
        setEmployee({ ...employee, address: { ...employee.address, newCity } });
    }

    return (
        <>
            {/* Updating object using of form and button tag with useRef hook */}

            {/* <form action="#" onSubmit={updateValue}>
                <input type="text" ref={nameField} />
                <input type="text" ref={cityField} />
                <button>Submit</button>
            </form> */}


            {/* Updating object without useRef and form */}

            <input type="text" onChange={e => updateName(e.target.value)} />
            <input type="text" onChange={e => updateCity(e.target.value)} />

            <h2>Employee Name: {employee.name}</h2>
            <h2>Address: {employee.address.city}</h2>
        </>
    )
}
export default UpdatingObject;