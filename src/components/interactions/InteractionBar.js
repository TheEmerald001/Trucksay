import React from "react";

function InteractionBar(){
    return(
        <>
        <div className="flex items-center justify-center">
  <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
    <button type="button" className="rounded-l inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Like</button>
    <button type="button" className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Dislike</button>
    <button type="button" className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Comment</button>
  </div>
</div>
        </>
    )
}

export default InteractionBar