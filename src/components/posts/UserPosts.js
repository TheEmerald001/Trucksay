import React from "react";
import PostCard from '../posts/PostCard'

function UserPosts({posts}) {
  const displayPostCards = posts.map(post => {
    return <PostCard key={post.id} post={post} />
  })
  return (
    <div class="w-2/3">
      {displayPostCards}
    </div>
  );
}

export default UserPosts;