import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Router } from "@reach/router";
import { Detail } from "./pages/Detail";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import User from "./pages/User";
import Favs from "./pages/Favs";
import NotRegisteredUser from "./pages/NotRegisteredUser";
import Context from "./context/Context";

// const UserLogged = ({ children }) => {
//   return children({ isAuth: true });
// };

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>

      <NavBar />
    </div>
  );
}
