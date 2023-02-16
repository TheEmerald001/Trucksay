import React,{useState} from "react";
import axios from "axios";

const client = axios.create(
  {
    baseURL: "https://test-backend-production-30ff.up.railway.app/posts"
  }
)


function NewPost({ userPosts, setUserPosts }) {
  const[postData, setPostData] = useState({
    name: "",
    image: "",
    desc: "",
  })
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;

    setPostData({
      ...postData,
      [key]: value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    client
      .post(("/"),
      {
        ...postData
      })
      .then((response)=> {setUserPosts([...userPosts, response.data])})
  }    


  return (
    <>
      <form onSubmit={handleSubmit} class="w-1/3 mx-2">
        <h3>Create new post</h3>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="mb-6">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Item Name
            </label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={postData.name}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label
              for="image"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image Link
            </label>
            <input
              type="url"
              id="image"
              onChange={handleChange}
              value={postData.image}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="desc" class="sr-only">
              Item description
            </label>
            <textarea
              id="desc"
              onChange={handleChange}
              value={postData.desc}
              rows="4"
              class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Item description"
              required
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post Item
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewPost;
