import { Link, useParams } from "react-router"

function UserDetails() {

    let userData = useParams();
    console.log(userData);

    return (
        <div className="wrapper">
            <h1>User Name : {userData.id}</h1>
            <Link to="/users" >Back to another user</Link>
        </div>
    )
}

export default UserDetails;