const Kids = ({ kid, name, onClick }) => {

    return (
        <>
            <button onClick={() => kid(name)}>Kid Name 1</button>
            <button onClick={() => onClick()}>Father Name</button>
        </>
    )
}

export default Kids;