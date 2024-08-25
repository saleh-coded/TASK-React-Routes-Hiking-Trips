import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import TripList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { NavLink } from 'react-router-dom';
import TripItem from "./components/TripItem";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Home</div>,
    element: <Home/>,
  },
  {
    path: "/TripList",
    element: <TripList/>,
  },
  {
    path: "/TripDetail/:tripId",
    element: <TripDetail/>,
  },
  // {
  //   path: "/details/:tripId",
  //   element: <TripDetail/>,
  // },
]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
