import React, { useState } from 'react';
import './App.css';
import MiniDrawer from './components/Nav/MiniDrawer';
import Form from './components/Form/Product/General/GeneralForms';
import Box from '@mui/material/Box';
import Nav from './components/Nav/Nav';
import FormTabs from './components/Form/FormTabs';
import List from './components/List/List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SKUsList from './components/SKUs/List';

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<List open={open} handleDrawerToggle={handleDrawerToggle} />} />
          <Route path="/form/:id" element={<FormTabs />} />
          <Route path="/new/product" element={<FormTabs />} />
          <Route path="/SkusList" element={<SKUsList open={open} handleDrawerToggle={handleDrawerToggle}/>} />
        </Routes>
      </Router>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Nav />
        {/* <Form open={open} handleDrawerToggle={handleDrawerToggle} /> */}
        {/* <List open={open} handleDrawerToggle={handleDrawerToggle}/> */}
        <MiniDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      </Box>
    </div>

  );
}

export default App;
