import React from 'react';
import Login from "../component/Login";
import Singup from "../component/Singup";
import DefaultLayout from "./Default";
import { Redirect } from "react-router-dom";

export default [
    {
      path: "/",
      exact: true,
      layout: DefaultLayout,
      component: () => <Redirect to="/login" />
    },
    {
      path: "/login",
      layout: DefaultLayout,
      component: Login
    },
    {
      path: "/signup",
      layout: DefaultLayout,
      component: Singup
    }
]