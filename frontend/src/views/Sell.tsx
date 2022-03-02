import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Sell = () => {
    const navigate = useNavigate();
    return (
      <Stack alignItems='center' direction="column" mt={4}> 
      <Typography variant="h4">Connect to wallet</Typography> 
      <Typography color="gray" variant="caption">View, buy and sell NFT's across different marketplaces here.</Typography>
      {//render connect buttons here
      }
      </Stack>
      
    );
  };
  
  export default Sell;
  