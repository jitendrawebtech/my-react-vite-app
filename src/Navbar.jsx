import { NavLink, Outlet } from "react-router";
import "./assets/styles/header.css"

function Navbar() {
    return (
        <div>
            <header>
                <div className="wrapper">
                    <div className="headerBox">
                        <div className="logo">
                            <NavLink to="/"><h2>Logo</h2></NavLink>
                        </div>
                        <nav>
                            <NavLink className={({ isActive }) => isActive ? 'actLink link' : 'link'} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'actLink link' : 'link'} to="/in/user/about">About</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'actLink link' : 'link'} to="/in/user/login" >Login</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'actLink link' : 'link'} to="/college" >College</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'actLink link' : 'link'} to="/users">User</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'actLink link' : 'link'} to="/users/list">List</NavLink>
                        </nav>
                    </div>
                </div>
            </header>
            <Outlet />
        </div>
    )
}

export default Navbar;