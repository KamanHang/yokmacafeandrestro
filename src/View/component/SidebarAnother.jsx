import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import projectColor from '../themepack';
import Logo from '../../assets/images/logo.png';
import Dashboard from './Dashboard';
import Appointment from './Appointment';
import RegisterDoctor from './StudentRegister';
import HealthBlogs from './HealthBlogs';
import Account from './Account';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
// import ViewDoctor from './ViewDoctor';
import ViewOrder from './ViewOrders';
import ViewPaidOrders from './ViewPaidOrders';
import PlaceOrder from './PlaceOrder';
import AddFoodProducts from './AddFoodProducts';


// import { MdAssignmentAdd } from "react-icons/md";
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ViewStudent from './Admin/ViewStudent';
import StudentRegisterPage from './StudentRegister';
import QR from './QR';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { jwtDecode } from "jwt-decode";





const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});



const closedMixin = (theme) => ({
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
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

// Placeholder components, replace them with your actual components
const DashboardComponent = () => <Dashboard />;
const ViewOrderComponent = () => <ViewOrder />;
const DoctorRegistrationComponent = () => <StudentRegisterPage />;
const AccountComponent = () => <Account />;
const ViewPaidOrdersComponent = () => <ViewPaidOrders />;
const PlaceOrdersComponent = () => <PlaceOrder />;
const AddFoodProductsComponent = () => <AddFoodProducts />;
const ViewStudentData = () => <ViewStudent />;





export default function SidebarAnother() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');
    // const [userCred, setUserCred] = useState("");
    // const [googleDetailsDecoded, setGoogleDetailsDecoded] = useState([]);



    // setGoogleDetailsDecoded(decoded)
    // console.log(googleDetailsDecoded)


    console.log(localStorage.getItem('userCredentials'))
    const decoded = jwtDecode(localStorage.getItem('userCredentials'))

    // console.log(decoded)

    const userImageUrl = decoded.picture
    // const userImageUrl = "abc"


    // console.log(userImageUrl)


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const icons = [DashboardIcon, PostAddRoundedIcon, VisibilityRoundedIcon, DinnerDiningIcon, AddShoppingCartRoundedIcon, VisibilityRoundedIcon, VisibilityRoundedIcon, QrCodeIcon];
    const icons_below = [userImageUrl];

    const handleMenuItemClick = (text) => {
        setSelectedMenuItem(text);
    };

    const renderComponent = () => {
        switch (selectedMenuItem) {
            case 'Dashboard':
                return <DashboardComponent />;
            case 'View Orders':
                return <ViewOrderComponent />;
            case 'View Paid Orders':
                return <ViewPaidOrdersComponent />
            case 'Add Food Products':
                return <AddFoodProductsComponent />;
            case 'Place Order':
                return <PlaceOrdersComponent />;
            case 'Account':
                return <AccountComponent />;
            case 'View Student':
                return <ViewStudentData />;
            case 'Student Register':
                return <DoctorRegistrationComponent />;
            case 'QRs':
                return <QR />;
            default:
                return null;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ backgroundColor: 'white', boxShadow: 0 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon sx={{ color: projectColor.primaryColor }} />
                    </IconButton>
                    <Box justifyContent='center' sx={{ display: 'flex', boxShadow: 0 }}>
                        <Typography justifyContent='center' variant="h6" color="black">
                            Admin Dashboard
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            height: '25%',
                        }}
                    >
                        <img style={{ width: '100%' }} className="profile" alt="profilepicture" src={Logo} />
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'Place Order', 'View Orders', 'View Paid Orders', 'Add Food Products', 'View Student', 'Student Register', 'QRs'].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ display: 'block' }}
                            onClick={() => handleMenuItemClick(text)}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                    style={{ color: projectColor.primaryColor }}
                                >
                                    {React.createElement(icons[index])}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Account'].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ display: 'block' }}
                            onClick={() => handleMenuItemClick(text)}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                    style={{ color: projectColor.primaryColor }}
                                >
                                    <img src={userImageUrl} alt="My Image" style={{
                                        width: "30px", // Set the width for the icon size
                                        height: "30px", // Set the height to make it a square
                                        borderRadius: "50%", // Make the image circular
                                        objectFit: "cover", // Ensure the image fits within the circle
                                    }} />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {renderComponent()}
            </Box>
        </Box>
    );
}
