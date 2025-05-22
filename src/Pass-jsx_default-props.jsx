// #19 Pass JSX with Props | Default props

function Member({ mem = "Empty-Member" }) {
    return (
        <>
            <h2>Member Name :- {mem}</h2>
        </>
    )
}

export function Person({ children, col = "red" }) {
    return (
        <div style={{ color: col }}>
            {children}
        </div>
    )
}

export default Member;