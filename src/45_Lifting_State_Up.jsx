import { useState } from "react"
import PlayerField from "./PlayerInput";
import ShowPlayers from "./ShowPlayer";

function Players() {
    const [player, setPlayer] = useState();
    return (
        <>
            <PlayerField setPlayer={setPlayer} />
            <ShowPlayers player={player} />
        </>
    )
}

export default Players;