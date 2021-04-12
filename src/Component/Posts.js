// import React from 'react'
// import useApi from './useApi';

// function Posts() {
//     const [post, isLoading, selectCoffee] = useApi();

//     return (
//         <div className="App_post">
//           {isLoading
//           ? "loading..."
//           : post.map(({ fields, sys }, index) => (
//             <div onClick={()=> selectCoffee(sys.id)} key={index}>
//               <div className="App_post_prop">{fields.sort}</div>
//               <img src={fields.image?.fields.file.url} alt={fields.sort} width="200"/>
//             </div>
//             ))
//           }
//         </div>
//     )
// }

// export default Posts
