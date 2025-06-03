import { useEffect } from "react"

const Counter = ({ value, data }) => {

    useEffect(() => {
        console.log("For Mounting Phase Value");
    }, []);

    useEffect(() => {
        console.log("For Updating Phase Data");
    }, [data]);

    useEffect(() => {
        return () => {
            console.log("For Unmounting Phase");
        };
    }, []);

    return (
        <>
            <h2>Mounting Value {value}</h2>
            <h2>Updating Data {data}</h2>
        </>
    );
}

export default Counter;