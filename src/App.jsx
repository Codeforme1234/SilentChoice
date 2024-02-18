import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/ProfilePage";
import Signup from "./Pages/SignUpPage";
import ErrorPage from "./Pages/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { useState } from "react";

function App() {
  return <Profile />;
}

export default App;
