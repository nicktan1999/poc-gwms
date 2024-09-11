import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import RecentIcon from '@mui/icons-material/Schedule';
import PinnedIcon from '@mui/icons-material/PushPin';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ActivitiesIcon from '@mui/icons-material/NoteAlt';
import ReportsIcon from '@mui/icons-material/Analytics';
import RegistrantsIcon from '@mui/icons-material/Person';
import RegistrationsIcon from '@mui/icons-material/Task';
import ProductsIcon from '@mui/icons-material/Inventory2';
import SKUsIcon from '@mui/icons-material/Category';
import ReplacementsIcon from '@mui/icons-material/FindReplace';
import ComponentsIcon from '@mui/icons-material/GridView';
import ContractsIcon from '@mui/icons-material/Description';
import MarketsIcon from '@mui/icons-material/Groups';
import RulesIcon from '@mui/icons-material/Gavel';
import FaultIcon from '@mui/icons-material/Terminal';
import AreasIcon from '@mui/icons-material/DynamicFeed';
import SectionsIcon from '@mui/icons-material/Toc';
import LanguagesIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/WorkOutline';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  marginLeft: '2px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor: '#f0ecec',
      top: '50px',
      height: 'calc(100% - 50px)',
    },
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

interface MiniDrawerProps {
  open: boolean;
  handleDrawerToggle: () => void;
}

const MiniDrawer: React.FC<MiniDrawerProps> = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setOpen(prevOpen => !prevOpen);
  // }

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };


  return (
    <Box sx={{ display: 'flex', flexGrow: 1, marginTop: '10px'}}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton
            onClick={handleDrawerToggle}
            sx={[
              {
                minHeight: 48,
                px: 1,
              },
              {
                justifyContent: open ? 'initial' : 'center',
              }
            ]}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {['Home', 'Recent', 'Pinned'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block'}}>
              <ListItemButton
                sx={[
                  {
                    px: 2.5,
                    py: 0.8,
                  },
                  {justifyContent: open ? 'initial' : 'center'}
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    {mr: open ? 2 : 'auto'}
                  ]}
                >
                  {index === 0 ? <HomeIcon /> : index === 1 ? <RecentIcon /> : <PinnedIcon/>}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    {opacity: open ? '1' : '0'}
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {!open && <Divider />}
        {open && (
          <>
            <ListSubheader component="div"
              sx={{
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '15px',
                backgroundColor: '#f0ecec',
              }}
            >
              My Work
            </ListSubheader>
          </>
        )}
        <List>
          {['Dashboards', 'Activities', 'Reports'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    px: 2.5,
                    py: 0.8,
                  },
                  {justifyContent: open ? 'initial' : 'center'}
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    {mr: open ? 2 : 'auto'}
                  ]}
                >
                  {index === 0 ? <DashboardIcon /> : index === 1 ? <ActivitiesIcon /> : <ReportsIcon/>}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    {opacity: open ? '1' : '0'}
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {!open && <Divider />}
        {open && (
          <>
            <ListSubheader component="div"
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '15px',
                backgroundColor: '#f0ecec',
              }}
            >
              Customers
            </ListSubheader>
          </>
        )}
        <List>
          {['Registrants', 'Registrations'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    px: 2.5,
                    py: 0.8,
                  },
                  {justifyContent: open ? 'initial' : 'center'}
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    {mr: open ? 2 : 'auto'}
                  ]}
                >
                  {index === 0 ? <RegistrantsIcon /> : <RegistrationsIcon/>}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    {opacity: open ? '1' : '0'}
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {!open && <Divider />}
        {open && (
          <>
            <ListSubheader component="div"
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '15px',
                backgroundColor: '#f0ecec'
              }}
            >
              Durable Product
            </ListSubheader>
          </>
        )}
        <List>
          {['Products', 'SKUs', 'Replacement Parts', 'Component Parts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              
                sx={[
                  {
                    px: 2.5,
                    py: 0.8,
                  },
                  {justifyContent: open ? 'initial' : 'center'}
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    {mr: open ? 2 : 'auto'}
                  ]}
                >
                  {index === 0 ? <ProductsIcon /> : index === 1 ? <SKUsIcon /> : index === 2 ? <ReplacementsIcon /> : <ComponentsIcon/>}
                  </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    {opacity: open ? '1' : '0'}
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {!open && <Divider />}
        {open && (
          <>
            <ListSubheader component="div"
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '15px',
                backgroundColor: '#f0ecec'
              }}
            >
              Contracts
            </ListSubheader>
          </>
        )}
        <List>
          {['Service Contracts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    px: 2.5,
                    py: 0.8,
                  },
                  {justifyContent: open ? 'initial' : 'center'}
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    {mr: open ? 2 : 'auto'}
                  ]}
                >
                  <ContractsIcon/>
                  </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    {opacity: open ? '1' : '0'}
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {!open && <Divider />}
        {open && (
          <>
            <ListSubheader component="div"
              sx={{
                minWidth: 0,
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '15px',
                backgroundColor: '#f0ecec'
              }}
            >
              Markets
            </ListSubheader>
          </>
        )}
        <List>
          {['Markets (New)', 'Market Rules', 'Fault Code', 'Content Areas', 'Content Sections', 'Languages', 'Business Units'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    px: 2.5,
                    py: 0.8,
                  },
                  {justifyContent: open ? 'initial' : 'center'}
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    {mr: open ? 2 : 'auto'}
                  ]}
                >
                  {index === 0 ? <MarketsIcon /> : index === 1 ? <RulesIcon /> : index === 2 ? <FaultIcon /> : index === 3 ? <AreasIcon /> : index === 4 ? <SectionsIcon /> : index === 5 ? <LanguagesIcon /> : <BusinessIcon/>}
                  </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={[
                    {opacity: open ? '1' : '0'}
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}

export default MiniDrawer;