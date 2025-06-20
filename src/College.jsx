import { Link, NavLink, Outlet } from "react-router";

function College() {
    return (
        <div className="wrapper" style={{ textAlign: 'center' }}>
            <h1>College Page</h1>
            <Link to="/">Go Back to Home</Link>
            <br /><br />
            <div className="clgPage">
                <NavLink className="link" to="" >Student</NavLink>
                <NavLink className="link" to="department" >Department</NavLink>
                <NavLink className="link" to="details" >College Details</NavLink>
                <Outlet />
            </div>
        </div>
    )
}

export default College;