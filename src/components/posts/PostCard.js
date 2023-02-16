import React from "react";
import { Card } from "flowbite-react";

function PostCard({ post }) {
  return (
    <div className="max-w-sm space-y-4">
      <Card imgSrc={post.image}>
        {/* <img class="rounded-t-lg" src={post.image} alt="" /> */}
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.desc}
        </p>
      </Card>
    </div>
  );
}

export default PostCard;
