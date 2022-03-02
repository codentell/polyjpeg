import { Autocomplete, Stack, TextField, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Profile = () => {
    const navigate = useNavigate();
  return (
    <Stack direction="column">
    <Stack alignItems='' direction="row" mt={4}> 
    <Typography variant="h4">wallet img here</Typography> 
    <Typography color="gray" variant="caption">wallet number here w/ copy option</Typography>
   
    </Stack>
    
     {//render nft's here
    }
       <Autocomplete
         
         options={['no','options']}
         sx={{ width: 700, marginRight: "150px", color: "inherit" }}
        
         renderInput={(params) => <TextField sx={{ "& .MuiAutocomplete-inputRoot": {
           color: "inherit",
           // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
           '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
             // Default left padding is 6px
             paddingLeft: 0
           },
           "& .MuiOutlinedInput-notchedOutline": {
             borderColor: "inherit"
           },
           "&:hover .MuiOutlinedInput-notchedOutline": {
             borderColor: "inherit"
           },
           "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
             borderColor: "inherit"
           }
         }}} {...params} placeholder="Search items, collections, and profiles" />}
       />
    </Stack>
  );
};

export default Profile;
