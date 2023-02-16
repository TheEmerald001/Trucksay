import React, { useState, useEffect } from "react";
import UserPosts from "../posts/UserPosts.js";
import axios from "axios";
import NewPost from "../posts/NewPost.js";

const client = axios.create(
    {
      baseURL: "https://test-backend-production-30ff.up.railway.app/posts"
    }
)

function Home(){
    const[userPosts, setUserPosts] = useState([]);
    useEffect(
        ()=>{
          client
          .get("/")
          .then((response)=>(setUserPosts(response.data)))
        }, []
    )
    return(
        <div class="flex space-x-4">
            <NewPost setUserPosts={ setUserPosts } userPosts={userPosts}/>
            <UserPosts posts={ userPosts }/>            
        </div>
    )
}

export default Home