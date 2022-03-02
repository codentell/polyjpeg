
import { Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Home = () => {
  return (
  <Stack alignItems='center' direction="column" mt={4}> 
  <Typography variant="h4">What NFT's are in store today?</Typography> 
  <Typography color="gray" variant="caption">View, buy and sell NFT's across different marketplaces here.</Typography>
  {//render nft's here
  }
  </Stack>
  );
};

export default Home;
