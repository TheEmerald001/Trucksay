import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { Alert } from "flowbite-react";

const client = axios.create({
  baseURL: "https://test-backend-production-30ff.up.railway.app/users",
});

function LogIn({ setCurrentUser, resStatus }) {
  const history = useHistory();
  const [loggingInUser, setLoggingInUser] = useState({
    email: "",
    password: "",
  });

  //anticipate an array of registered users
  const [registeredUsers, setRegisteredUsers] = useState([]);
  //fetch registered users and store in state
  useEffect(() => {
    client.get("/").then((response) => setRegisteredUsers(response.data));
  }, []);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setLoggingInUser({
      ...loggingInUser,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    registeredUsers.map((user) => {
      if (user.email === loggingInUser.email) {
        if (user.password === loggingInUser.password) {
          setCurrentUser({
            name: `${user.username}`,
            city: `${user.city}`,
            image: `${user.image_url}`,
          });
          history.push("/");
        } else {
          console.log("Invalid email or password");
        }
      } else {
        console.log("Invalid email or password");
      }
    });
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <NavLink
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://cdn.worldvectorlogo.com/logos/mercedes-benz-5.svg"
              alt="logo"
            />
            TruckChat
          </NavLink>
          {/* An alert for created acc */}
          {resStatus ? <Alert
            color="success"
            onDismiss={function onDismiss() {
              return alert("Alert dismissed!");
            }}
          >
            <span>
              <span className="font-medium">Account Created successfully!</span> Please Log in Below to proceed
            </span>
          </Alert> : <></> }
          
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <NavLink
                    to="/SignUp"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </NavLink>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <NavLink
                    to="/SignUp"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogIn;
