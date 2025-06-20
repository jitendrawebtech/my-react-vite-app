import { Link } from "react-router"

function UserList() {
    const userList = [
        { name: 'Ram', id: 1 },
        { name: 'Shyam', id: 2 },
        { name: 'Ramesh', id: 3 }
    ]

    return (
        <div className="wrapper">
            <div className="user">
                <br /><br />
                <h2> * Dynamic Route Below</h2>
                {
                    userList.map(user => (
                        <Link key={user.id} className="link" to={"/users/" + user.id}>{user.name}</Link>
                    ))
                }
                <br /><br />
                <h2> * Optional Segment with Dynamic Route Below</h2>
                {
                    userList.map(user => (
                        <Link key={user.id} className="link" to={"/users/" + user.id + "/" + user.name}>{user.name}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList;