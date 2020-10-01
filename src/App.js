import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ContactUsClass from "./pages/ContactUs/ContactUsClass";
import ContactUsFunction from "./pages/ContactUs/ContactUsFunction";
import ContactUsRst from "./pages/ContactUs/ContactUsRst";
import ContactUsFormik from "./pages/ContactUs/ContactUsFormik";
import MedianPrice from "./pages/home/MedianPrice";
import MedianPriceRst from "./pages/home/MedianPriceRst";

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
              <Link to="/ContactUsFunction">Contact Us (Function)</Link>
            </li>
            <li>
              <Link to="/ContactUsRst">Contact Us (Rst)</Link>
            </li>
            <li>
              <Link to="/ContactUsFormik">Contact Us (Formik)</Link>
            </li>
            <li>
              <Link to="/MedianPrice">Median Price</Link>
            </li>
            <li>
              <Link to="/MedianPriceRst">Median Price Rst</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route path="/ContactUsClass" component={ContactUsClass}></Route>
          <Route path="/ContactUsFunction" component={ContactUsFunction}></Route>
          <Route path="/ContactUsRst" component={ContactUsRst}></Route>
          <Route path="/ContactUsFormik" component={ContactUsFormik}></Route>
          <Route path="/MedianPrice" component={MedianPrice}></Route>
          <Route path="/MedianPriceRst" component={MedianPriceRst}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;