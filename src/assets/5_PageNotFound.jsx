import { Link } from "react-router";

function PageNotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Page Not Found</h2>
            <Link to="/">Go back to home page</Link>
            <br />
            <br />
            <div>
                <img width="500" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="Page Not Found" />
            </div>
        </div>
    )
}

export default PageNotFound;