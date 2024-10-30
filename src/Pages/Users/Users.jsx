import { Link } from "react-router-dom";


function Users() {
    return (
        <div className="Main">
            <h1>USERS</h1>
            <ul>
                <li><Link to='users/walles'>John Walles</Link></li>
                <li><Link to='users/beanit'>Jim Beanit</Link></li>
            </ul>
        </div>
    )
}

export default Users;