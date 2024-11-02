import { Link, useLoaderData } from "react-router-dom";

function UserPage() {
    const user = useLoaderData();
    console.log(user);
//     const { addres: { city, geo: { lat, Ing }, street, suite, zipcode },
//         company,
//         email,
//         id, 
//   name,
//   phone,
//         username,
//         website } = user;
    
//     const { 
//         id, 
//   name,
//   phone,
//         username,
//         website } = user;
    
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
            {/* <h2>User Page</h2> */}             
            <h2>user: {user.name}</h2>
            <h2>username: { user.username}</h2>
            <h2>email: {user.email}</h2>
            {/* {user } */}
            {/* <h3>addres: {user}</h3> */}
            
            {/* for (const key in user.addres) {
  console.log(key); // Ключ
  console.log(            
[key]);  // Значення властивості з таким ключем */}
{/* } */}



        </div>

    ); 






}

export default UserPage;