/* function Guests() {
    return (
        <>
            <Guests guest={2} />
        </>
    )
}


function Teas({ count }) {
    return (
        <>
            <h2>Came {count} Guests and Bring {count} Cups of Teas.</h2>
        </>
    )
}

export default Guests; */


function Guests() {
    return (
        <>
            <Teas guest={2} />
            <Teas guest={3} />
            <Teas guest={5} />
        </>
    )
}


function Teas({ guest }) {
    return (
        <>
            <h2> {guest} Guests Came and Bring {guest} Cups of Tea.</h2>
        </>
    )
}

export default Guests;