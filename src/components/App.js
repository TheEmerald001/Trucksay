import {React, useState} from "react"
import NavBar from "./navbar/NavBar"
import SignUp from "./signup/SignUp"
import AboutUs from "./aboutus/AboutUs"
import Home from "./home/Home"
import { Route, Switch } from "react-router-dom"
import LogIn from "./login/LogIn"

export default function App() {
  // On successfull log in, set the current user in state
  const [currentUser, setCurrentUser] = useState(null)
  const [resStatus, setResStatus] = useState(null)
    return (
      <>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/> 
        <Switch>          
          <Route path="/signup"><SignUp setResStatus={setResStatus}/></Route>
          <Route path="/login"><LogIn setCurrentUser={setCurrentUser} resStatus={resStatus}/></Route>
          <Route path="/aboutus"><AboutUs/></Route>
          <Route exact path="/"><Home/></Route>
        </Switch>  
      </>   
    )
}