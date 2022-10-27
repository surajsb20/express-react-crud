import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link, Route, Router, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
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
          CRUD
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
         
          <Link to={`addstudent`}>
          <Button variant="contained" color="success"> Add Student</Button>
        
           </Link>
        </Toolbar>
      </AppBar>
    </Box>
     
          </div>
  );
}

export default App;
