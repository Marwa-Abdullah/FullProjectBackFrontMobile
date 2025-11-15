// import React, { useEffect, useState } from "react";
// import { getUsers } from "../api/userApi";

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const res = await getUsers();
//     setUsers(res.data);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Users</h2>
//       <ul className="space-y-2">
//         {users.map((u) => (
//           <li
//             key={u._id}
//             className="border border-gray-200 p-3 rounded shadow-sm bg-gray-50"
//           >
//             {u.name} - {u.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;
