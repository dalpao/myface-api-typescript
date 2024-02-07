import React, { FC, useEffect, useState } from "react"; // import React (to provide access to TSX)
import { PostModel } from "../models/api/postModel";
import * as moment from "moment";
import './post.css' // importing css file

export function Postlists() {
  const [posts, setPosts] = useState<PostModel[]>([])
  useEffect(() => {
    async function apiPostscall(){
     try{
         const response = await fetch("http://localhost:3001/posts");
         const apiData = await response.json();
         // console.log(apiData.results)
         setPosts(apiData.results)
         return apiData;
     }catch(error){
         console.log(`---> Cannot Fecth Data from the API$ `);
         console.log(error);
     }
 }
 apiPostscall();
}, []);
return (
    <>

      { posts.map((post) => (
        <div className="listItem" key={post.id}>
          <div className="post">
            <p className="post-name">{post.message}</p>
            <img src={post.imageUrl} alt={post.imageUrl} className="imageSize" />

            <p>Liked by {post.likedBy.length} users:</p>
            <p>Disliked by {post.dislikedBy.length} users:</p>

          </div>
          </div>
       
        )) }
        
   </>
  );
};




