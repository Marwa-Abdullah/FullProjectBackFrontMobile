// import React, { useEffect, useState } from "react";
// import { getPosts } from "../api/postApi";

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     const res = await getPosts();
//     setPosts(res.data);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Posts</h2>
//       <ul className="space-y-2">
//         {posts.map((p) => (
//           <li
//             key={p._id}
//             className="border border-gray-200 p-3 rounded shadow-sm bg-gray-50"
//           >
//             <b>{p.title}</b> - {p.content} - User ID: {p.userId?._id}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostList;
