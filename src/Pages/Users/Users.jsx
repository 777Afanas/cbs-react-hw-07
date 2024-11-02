import axios from "axios";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";


function Users() {
//     return (
//         <div className="Main">
//             <h1>USERS</h1>
//             <ul>
//                 <li><Link to='/users/walles'>John Walles</Link></li>
//                 <li><Link to='/users/beanit'>Jim Beanit</Link></li>
//             </ul>
//         </div>
//     )
// } 

 const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => setUsers(res.data));
  }, []);
    // console.log(users);
  return (
    <>
      <h2>USERS</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
            <p>
              Name:  {user.name}
              </p>{' '}
            </Link>            
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;