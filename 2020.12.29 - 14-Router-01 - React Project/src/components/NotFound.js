import {Link} from "react-router-dom";

const NotFound = props => {
    return (
        <div>
            <h1>Error 404! Page Not Found</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound;