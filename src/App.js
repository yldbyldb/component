import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import MedianPrice from "./pages/home/MedianPrice";

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <nav className={classes.Nav}>
          <ul>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/MedianPrice">Median Price</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route path="/ContactUs" component={ContactUs}></Route>
          <Route path="/MedianPrice" component={MedianPrice}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;