import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Sell = () => {
    const navigate = useNavigate();
    return (
        <>
      <div><p>profile</p> <button onClick={()=> navigate('/profile/100')}></button></div>
      <div><p>home</p> <button onClick={()=> navigate('/')}></button></div>
      </>
    );
  };
  
  export default Sell;
  