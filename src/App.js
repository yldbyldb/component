import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ContactUsClass from "./pages/ContactUs/ContactUsClass";
import MedianPrice from "./pages/home/MedianPrice";

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <nav className={classes.Nav}>
          <ul>
            <li>
              <Link to="/ContactUsClass">Contact Us (Class)</Link>
            </li>
            <li>
              <Link to="/MedianPrice">Median Price</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route path="/ContactUsClass" component={ContactUsClass}></Route>
          <Route path="/MedianPrice" component={MedianPrice}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;