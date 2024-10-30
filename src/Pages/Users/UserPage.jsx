import { Link, useLoaderData } from "react-router-dom";

function UserPage() {
    const user = useLoaderData();
    console.log(user);

    return (
        <div className="Main user-page ">
            <div>
                <Link to="/users">Back</Link>
            </div>
            <img src={user.img} alt="" />
            <h2>User: {user.name}</h2>
            <h2>Age: { user.age}</h2>
            <h2>{ user.email }</h2>
        </div>

    );
}

export default UserPage;