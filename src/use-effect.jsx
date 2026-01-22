// import { useEffect, useState } from "react";

// fetch users using useEffect
// export default function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);

//   return (
//     <>
//       {/* card */}
//       <div className=" grid grid-cols-3 gap-4 container mx-auto">
//         {users.map((user) => (
//           <div className="p-8 bg-green-100">
//             <h2 className="text-blue-700 text-3xl font-bold line-clamp-1">{user.name}</h2>
//             <p className="text-lg text-red-500">{user.email}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]) /* Complete this */;
  // const [loading, setLoading] = /* Complete this */;
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      setPosts(data);
    })
  },[]);
  
  return (
    /* Write your code here */
    <>
     {/* card */}
     <div className=" grid grid-cols-4 gap-4 container mx-auto">
         {posts.map((post) => (
          <div className="p-8 bg-green-100">
            <h2 className="text-blue-700 text-3xl font-bold line-clamp-1">{post.title}</h2>
            <p className="text-lg text-red-500">{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// export default PostList;

// a theme toggler coponent to change the page theme
// dark and light 
function ThemeToggler() {
  // the usestate hook initializes isDark to false,
  // managing whether the theme is light or dark
  const [isDark, setIsDark] = useState(false);

  // useEffect update only whenever isDark changes
  // when the isDark change react re-run this function agian
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "black" : "white";
    document.body.style.color = isDark ? "black" : "white";
  },[isDark]);

  return (
    <div className='grid place-content-center gap-12'>
      <h2 className='bg-red-500 text-5xl font-bold p-8'>Hello Universe</h2>
      <p className='bg-blue-700 text-3xl text-center p-8'>I am from planet.</p>
      <button className=' bg-amber-300 px-6 p-12 text-3xl' onClick={() => setIsDark(!isDark)}>click to change the theme</button>
    </div>
  )
}
export default ThemeToggler;