import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        Home
      </NavLink>
      <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        About
      </NavLink>
      <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        Login
      </NavLink>
      <NavLink to="/signup" exact style={linkStyles} activeStyle={{background: "darkblue"}}>
        SingUp
      </NavLink>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div>
          <input type="text" name="firstName" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Enter password!" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Enter Password again!" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
      <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
     <NavBar />
    <Switch>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>, document.getElementById("root"));
