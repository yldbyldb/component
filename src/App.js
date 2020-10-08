import React from "react";
import classes from "./App.module.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ContactUsClass from "./pages/ForHomeonMui/ContactUs/ContactUsClass";
import ContactUsFunction1 from "./pages/ForHomeonMui/ContactUs/ContactUsFunction1";
import ContactUsFunction2 from "./pages/ForHomeonMui/ContactUs/ContactUsFunction2";
import ContactUsRst from "./pages/ForHomeonMui/ContactUs/ContactUsRst";
import ContactUsFormik from "./pages/ForHomeonMui/ContactUs/ContactUsFormik";
import MedianPrice from "./pages/ForHomeonMui/home/MedianPrice";
import {MedianPriceRst} from "./pages/ForHomeonMui/home/MedianPriceRst";
import MapSelector from "./pages/ForHomeonMui/MapSelector/MapSelector";
import PriceRange from "./pages/ForHomeonMui/PriceRange/PriceRange";


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
              <Link to="/ContactUsFunction1">Contact Us (Function 1)</Link>
            </li>
            <li>
              <Link to="/ContactUsFunction2">Contact Us (Function 2)</Link>
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
            <li>
              <Link to="/MapSelector">Map Selector</Link>
            </li>
            <li>
              <Link to="/PriceRange">Price Range</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route path="/ContactUsClass" component={ContactUsClass}></Route>
          <Route path="/ContactUsFunction1" component={ContactUsFunction1}></Route>
          <Route path="/ContactUsFunction2" component={ContactUsFunction2}></Route>
          <Route path="/ContactUsRst" component={ContactUsRst}></Route>
          <Route path="/ContactUsFormik" component={ContactUsFormik}></Route>
          <Route path="/MedianPrice" component={MedianPrice}></Route>
          <Route path="/MedianPriceRst" component={MedianPriceRst}></Route>
          <Route path="/MapSelector" component={MapSelector}></Route>
          <Route path="/PriceRange" component={PriceRange}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;