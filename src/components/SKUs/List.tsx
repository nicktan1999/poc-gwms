import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Toolbar from './Toolbar';
import ProductList from './SkusList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

interface ListProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

const SKUsList: React.FC<ListProps> = ({ open, handleDrawerToggle }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginLeft: open ? 32 : 10,
        marginRight: 2,
        marginTop: 7,
        transition: 'margin-left 0.3s',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: 'auto',
        paddingTop: '9px'
      }}
    >

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
        }}
      >
        <Item sx={{ flexGrow: 1 }}>
          <Toolbar />
        </Item>
      </Box>
        
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: 2
        }}
      >
        <Item sx={{ paddingLeft: 2, paddingRight: 2, overflow: 'hidden'}}>
          <h4 style={{textAlign: 'start', color: 'black', marginBottom: '8px'}}>Active Durables</h4>
          <ProductList />
        </Item>
      </Box>
    </Box>
  );
}

export default SKUsList;
