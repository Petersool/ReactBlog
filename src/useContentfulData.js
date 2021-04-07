// import { useState, useEffect } from 'react';
// import client from './Client';

// function useContentfulData( contentType, sort ) {
//     const [blog, setBlog] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//     }, [blog]);

//     const fetchData = async() => {
//         try {
//             const resp = await client.getEntries ({content_type: 'coffeeblog'});
//             setBlog(resp.items);
//         } catch (error) {
//             console.log(error);
//         }
//     }


//     //         client.getEntries({content_type: coffeeBlog})
// //         .then(
// //             function(entries) {
// //                 setBlog=(entries);
// //                 setLoading=(false);
// //             });
// //     }, []);
// //     return [blog, loading];
// // }
// }
// export default useContentfulData