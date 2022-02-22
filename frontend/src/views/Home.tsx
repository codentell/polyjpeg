
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Home = () => {
  const navigate = useNavigate();

  return (
    <div><p>Home</p> <button onClick={()=> navigate('/sell')}></button></div>
  );
};

export default Home;
