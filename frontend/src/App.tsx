import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
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
        <Route path="/" element={<><NavBar/> <Home /> </>} />
        <Route path='/sell' element={<><NavBar/><Sell /> </>} />
        <Route path='/profile/:id' element={<><NavBar/><Profile /> </>} />
      </Routes>
    </Router>
  );
}

export default App;