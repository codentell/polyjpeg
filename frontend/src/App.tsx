import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";

import Sell from "./views/Sell";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
 
  const RequireAuth = ({ children }: { children: any }) => {
    let location = useLocation();
    if (!isSignedIn) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;