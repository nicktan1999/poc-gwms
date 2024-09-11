import * as React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IntegrationInputs from './edit/IntegrationInputs';
import ProductWarrantyInfoInputs from './edit/ProductWarrantyInfoInputs';
import CalculatedDerivedValues from './edit/CalculatedDerivedValue';
import ServiceContracts from './edit/ServiceContracts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.1)`,
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

interface FormProps {
  open: boolean;
  handleDrawerToggle: () => void;
  isNew: boolean;
}

const Form: React.FC<FormProps> = ({ open, handleDrawerToggle, isNew }) => {
  const { id } = useParams();
  const location = useLocation();
  const row = isNew ? {} : location.state?.row || {};

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginLeft: open ? 32 : 10,
        marginRight: 2,
        marginTop: 3,
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
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box
          sx={{
            flexBasis: '49%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Item sx={{ width: '100%' }}>
            <IntegrationInputs row={row} isNew={isNew} />
          </Item>
        </Box>

        <Box
          sx={{
            flexBasis: '49%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Item><ProductWarrantyInfoInputs isNew={isNew} /></Item>
          <Item><CalculatedDerivedValues isNew={isNew} /></Item>
          <Item><ServiceContracts isNew={isNew} /></Item>
        </Box>
      </Box>
    </Box>
  );
}

export default Form;
