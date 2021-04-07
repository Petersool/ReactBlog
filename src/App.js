import React, { useState, useEffect } from 'react';
import Client from './client';
// import { createClient } from 'contentful';

// import useContentfulData from "./useContentfulData";

import './App.css';

function App() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Client.getEntries()
          .then((json) => {
            setIsLoading(false)
            setPost(json.items)
          })
          .catch(() => console.log("error"))
    }, [])
  console.log(post)

  return (
      <div className="App">
        <header>
          <div>
            <h2>Coffee of the World</h2>
          </div>
        </header>

        <main>
          <div className="App_post">
          {isLoading
          ? "loading..."
          : post.map(({ fields }, index) => (
            <div key={index}>
              <div className="App_post_prop">{fields.sort}</div>
              {/* Image */}
              <img src={fields.image?.fields.file.url} alt={fields.sort} width="200"/>
              {/* Origin */}
              <div><span className="App_post_prop">Origin: </span>{fields.origin}</div>
              {/* Description */}
              <div><span className="App_post_prop">Description: </span>{fields.origin}</div>
            </div>
            ))
          }
          </div>
        </main>
      
      </div>
  );
}

export default App;


// export const Post = ({ article }: IArticle) => {
//   // console.log(article);
//   const { title, image, description} =article.fields;
//   const postDescription = marked(description);
//   return (
//       <div className="post">
//           <h2 className="title">{title}</h2>
//           {image && <img className="featuredImage" src={image.fields.file.url} alt={title} title={title} /> }
//           <section dangerouslySetInnerHTML={{ __html: postDescription}} />
//       </div>
//   )
// }
