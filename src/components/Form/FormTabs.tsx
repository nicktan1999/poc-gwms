import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import Form from './Product/General/GeneralForms';
import ComponentPartsList from './Product/ComponentParts/ComponentParts';
import Toolbar from './Toolbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ReplacementPartsList from './Product/ReplacementParts/ReplacementParts';
import Admin from './Product/Admin/Admin';
import { useLocation } from 'react-router-dom';

const FormTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);

  const location = useLocation();
  const isNew = location.state?.isNew || false;

  const handleTabChange = (_event: React.SyntheticEvent | null, newValue: number | string | null) => {
    if (typeof newValue === 'number') {
      setActiveTab(newValue);
    }
  };

  const handleDrawerToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const HeaderBar: React.FC = () => {
    return (
      <HeaderContainer>
        <Title>Test Sky Durable - RETURNSKALOGTEST123</Title>
        <Subtitle>Product</Subtitle>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <TabsList>
            <Tab value={1}>General</Tab>
            <Tab value={2}>Replacement Parts</Tab>
            <Tab value={3}>Component Parts</Tab>
            <Tab value={4}>Admin</Tab>
            <Tab value={5}>Audit History</Tab>
          </TabsList>
        </Tabs>
      </HeaderContainer>
    );
  };

  return (
    <div>
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
            gap: 2,
          }}
        >
          <Item sx={{ flexGrow: 1 }}>
            <HeaderBar />
          </Item>
        </Box>
      </Box>

      {activeTab === 1 && <Form open={open} handleDrawerToggle={handleDrawerToggle} isNew={isNew} />}
      {activeTab === 2 && <ReplacementPartsList isNew={isNew} />}
      {activeTab === 3 && <ComponentPartsList isNew={isNew} />}
      {activeTab === 4 && <Admin />}
    </div>
  );
};

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

const Tab = styled(BaseTab)`
  cursor: pointer;
  font-size: 0.95rem;
  background-color: transparent;
  line-height: 1.5;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 10px;
  margin: 9px;
  border: none;
  display: flex;
  justify-content: start;

  &:hover {
    font-weight: bold;
  }

  &:focus {
    outline: none;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    font-weight: bold;
    border-bottom: 2px solid #0c6cbc;
  }
`;

const TabsList = styled(BaseTabsList)`
  min-width: 400px;
  border-radius: 12px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  align-content: space-between;
`;

const HeaderContainer = styled('div')({
  padding: '2px 12px',
});

const Title = styled('h4')({
  textAlign: 'start',
  color: 'black',
  marginBottom: '8px',
});

const Subtitle = styled('h6')({
  textAlign: 'start',
  marginTop: '0px',
});

export default FormTabs;
