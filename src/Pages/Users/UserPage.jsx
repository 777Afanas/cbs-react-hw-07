import { Link, useLoaderData } from "react-router-dom";

function UserPage() {
  const user = useLoaderData();
//   console.log(user);
  
  // return (
  //     <div className="Main user-page ">
  //         <div>
  //             <Link to="/users">Back</Link>
  //         </div>
  //         <img src={user.img} alt="" />
  //         <h2>User: {user.name}</h2>
  //         <h2>Age: { user.age}</h2>
  //         <h2>{ user.email }</h2>
  //     </div>

  // );

  return (
    <div className="Main user-page ">
      <div>
        <Link to="/users">Back</Link>
      </div>     
      <h2>{user.name}</h2>
      <h3>username: {user.username}</h3>
      <h3>email: {user.email}</h3>       
      <p>Address: </p>
      <h4>city: {user.address.city}</h4>
      <h4>street: {user.address.street}</h4>
    </div>
  );
}

export default UserPage;
