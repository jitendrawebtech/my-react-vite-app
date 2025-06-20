import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import College from "./College";
import PageNotFound from "./assets/5_PageNotFound";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import UserList from "./UserList";
import UserDetails from "./UserDetails";


function Routing() {
    return (
        <>
            <Routes>
                {/* #7 Layout */}
                <Route element={<Navbar />}>
                    <Route path="/" element={<Home />} />

                    {/* #10 Optional Segment */}
                    <Route path="/users/list?" element={<UserList />} />
                    <Route path="/users/:id/:name?" element={<UserDetails />} />

                    {/* #9 Dynamic Route */}
                    <Route path="/users/:id" element={<UserDetails />} />

                    {/* #8 Route Prefixes */}
                    <Route path="/in">
                        <Route path="/in/user">
                            <Route path="/in/user/about" element={<About />} />
                            <Route path="/in/user/login" element={<Login />} />
                        </Route>
                    </Route>
                </Route>

                {/* #7 Index Routes */}
                <Route path="/college" element={<College />} >
                    <Route index element={<Student />} />
                    <Route path="department" element={<Department />} />
                    <Route path="details" element={<Details />} />
                </Route>
                {/* <Route path="/*" element={<PageNotFound />} /> */}

                {/* or If page not found then redirect to Home page */}
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default Routing;