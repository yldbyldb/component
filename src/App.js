import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <nav className={classes.Nav}>
          <ul>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route path="/ContactUs" component={ContactUs}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;