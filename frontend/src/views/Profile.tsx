import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Profile = () => {
    const navigate = useNavigate();
  return (
    <div><p>Profile</p> <button onClick={()=> navigate('/')}></button></div>
  );
};

export default Profile;
