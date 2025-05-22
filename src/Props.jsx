import { useState } from "react"

/* function User(getN) {
    return (
        <h1>User Name is {getN.uName}</h1>
    )
} */

// or -------------

function User({ uName, uAge, uEmail }) {
    return (
        <h4>Name is {uName}. <br />
            Age is {uAge}<br />
            Email is {uEmail} </h4 >
    )
}

// ---Props Passing with Objects---

export function FriendGroup2({ userInfo }) {
    return (
        <h4>Name is {userInfo.name}. <br />
            Age is {userInfo.age}. <br />
            Email is {userInfo.gmail} </h4 >
    )
}

// ---Props Passing with Objects---

/* export function FriendGroup3(frand) {
    return (
        <>
            <h4>All Friends - <br />
                Friend 1: {frand.frndNames[0]}<br />
                Friend 2: {frand.frndNames[1]}<br />
                Friend 3: {frand.frndNames[2]}<br />
                Friend 4: {frand.frndNames[3]}<br />
                Friend 5: {frand.frndNames[4]}
            </h4>
        </>
    )
} */

// OR
export function FriendGroup3({ frndNames }) {
    return (
        <>
            <h4>
                All Friend - <br />
                Friend 1: {frndNames[0]}<br />
                Friend 2: {frndNames[1]}<br />
                Friend 3: {frndNames[2]}<br />
                Friend 4: {frndNames[3]}<br />
                Friend 5: {frndNames[4]}
            </h4>
        </>
    )
}

// OR Get One by once ---
export function FriendGroup4({ frndName }) {
    return (
        <>
            <h4>{frndName}</h4>
        </>
    )
}


// Props on Click

function Student({ stuName }) {
    return (
        <h2>Student Name : {stuName}</h2>
    )
}

export function StudName() {
    const [studName, newStudName] = useState();
    return (
        <>
            <button onClick={() => newStudName("Jitendra")}>Click to Update Student</button>
            {
                studName && <Student stuName={studName} />
            }
        </>
    )
}

export default User;