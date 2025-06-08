function PlayerField({ setPlayer }) {
    return (
        <>
            <input type="text" onChange={e => setPlayer(e.target.value)} />
        </>
    )
}

export default PlayerField;