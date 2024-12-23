import React, { useState } from "react";



import PostItem from "./PostItem";

import { dummyPosts } from "../data";




const Posts = () => {

  const [posts, setPosts] = useState(dummyPosts);

  return (
  <section className="posts">
    <div className="posts_container">
    {
        posts.map(({id, thumbnail, category, title, desc, authorID}) => 
        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
        desc={desc} authorID={authorID} />)
    }
    </div>
  </section>
  )
};

export default Posts;
