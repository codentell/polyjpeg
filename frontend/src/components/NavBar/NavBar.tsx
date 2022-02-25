import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Autocomplete, Box , TextField} from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo Here
          </Typography>
          
          <Autocomplete
         
  options={['no','options']}
  sx={{ width: 700, marginRight: "150px", color: "inherit" }}
 
  renderInput={(params) => <TextField sx={{ "& .MuiAutocomplete-inputRoot": {
    color: "inherit",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26
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
          <Button variant="outlined" color="inherit" >
            Discover
          </Button>
          <Button sx={{marginRight: "100px", marginLeft: "50px"}} variant="outlined" color="inherit">
            Sell
          </Button>
          <Button variant="outlined" color="inherit">Connect wallet</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar