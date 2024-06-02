// import React from 'react';
// import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles({
//     logo: {
//         marginRight: '20px',
//         height: '50px',
//     },
//     title: {
//         flexGrow: 1,
//         textAlign: 'left',
//         marginLeft: '20px',
//     },
//     menuButton: {
//         marginLeft: '20px',
//     },
// });

// const Header = () => {
//     const classes = useStyles();

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [menuId, setMenuId] = React.useState(null);

//     const handleMenuClick = (event, menu) => {
//         setAnchorEl(event.currentTarget);
//         setMenuId(menu);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//         setMenuId(null);
//     };

//     const renderMenu = (menuId) => {
//         switch (menuId) {
//             case 'Project':
//                 return (
//                     <Menu
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl && menuId === 'Project')}
//                         onClose={handleMenuClose}
//                     >
//                         <MenuItem component={Link} to="/Project" onClick={handleMenuClose}>Configuration</MenuItem>
//                         <MenuItem onClick={handleMenuClose}>Assumption</MenuItem>
//                         <MenuItem onClick={handleMenuClose}>Timings</MenuItem>
//                         <MenuItem onClick={handleMenuClose}>PSP-Quote</MenuItem>
//                     </Menu>
//                 );
//             case 'Insert':
//                 return (
//                     <Menu
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl && menuId === 'Insert')}
//                         onClose={handleMenuClose}
//                     >
//                         <MenuItem onClick={handleMenuClose}>Work Plans</MenuItem>
//                         <MenuItem onClick={handleMenuClose}>Work Packages</MenuItem>
//                     </Menu>
//                 );
//             case 'Analysis':
//                 return (
//                     <Menu
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl && menuId === 'Analysis')}
//                         onClose={handleMenuClose}
//                     >
//                         <MenuItem onClick={handleMenuClose}>Tools</MenuItem>
//                         <MenuItem onClick={handleMenuClose}>Review</MenuItem>
//                     </Menu>
//                 );
//             case 'Settings':
//                 return (
//                     <Menu
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl && menuId === 'Settings')}
//                         onClose={handleMenuClose}
//                     >
//                         <MenuItem onClick={handleMenuClose}>Zoom</MenuItem>
//                     </Menu>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return (
//         <AppBar position="fixed" style={{ backgroundColor: 'maroon' }}>
//             <Toolbar>
//                 <div>
//                     <img src="/quo_log.png" alt="logo" className={classes.logo} />
//                     <Box className={classes.title}>
//                         <Typography variant="h6">Project Structure Plan</Typography>
//                     </Box>
//                 </div>
//                 <Button color="inherit" className={classes.menuButton} onClick={(e) => handleMenuClick(e, 'Project')}>Project</Button>
//                 <Button color="inherit" className={classes.menuButton} onClick={(e) => handleMenuClick(e, 'Insert')}>Insert</Button>
//                 <Button color="inherit" className={classes.menuButton} onClick={(e) => handleMenuClick(e, 'Analysis')}>Analysis</Button>
//                 <Button color="inherit" className={classes.menuButton} onClick={(e) => handleMenuClick(e, 'Settings')}>Settings</Button>
//                 {renderMenu(menuId)}
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Header;


import React from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    logo: {
        marginRight: '20px',
        height: '50px',
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        marginLeft: '20px',
    },
    menuButton: {
        marginLeft: '20px',
    },
});

const Header = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuId, setMenuId] = React.useState(null);

    const handleMenuClick = (event, menu) => {
        setAnchorEl(event.currentTarget);
        setMenuId(menu);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuId(null);
    };

    const renderMenu = (menuId) => {
        switch (menuId) {
            case 'Project':
                return (
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl && menuId === 'Project')}
                        onClose={handleMenuClose}
                    >
                        <MenuItem component={Link} to="/Project" onClick={handleMenuClose}>Configuration</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Assumption</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Timings</MenuItem>
                        <MenuItem onClick={handleMenuClose}>PSP-Quote</MenuItem>
                    </Menu>
                );
            case 'Insert':
                return (
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl && menuId === 'Insert')}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Work Plans</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Work Packages</MenuItem>
                    </Menu>
                );
            case 'Analysis':
                return (
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl && menuId === 'Analysis')}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Tools</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Review</MenuItem>
                    </Menu>
                );
            case 'Settings':
                return (
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl && menuId === 'Settings')}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Zoom</MenuItem>
                    </Menu>
                );
            default:
                return null;
        }
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: 'maroon' }}>
            <Toolbar>
                <div>
                    <img src="/quo_log.png" alt="logo" className={classes.logo} />
                    <Box className={classes.title}>
                        <Typography variant="h6">Project Structure Plan</Typography>
                    </Box>
                </div>
                <Button color="inherit" className={classes.menuButton} onClick={(e) => handleMenuClick(e, 'Project')}>Project</Button>
                <Button color="inherit" className={classes.menuButton} onClick={(e) => handleMenuClick(e, 'Insert')}>Insert</Button>
                <Button color="inherit" className={classes.menuButton} onClick={(e) => handleMenuClick(e, 'Analysis')}>Analysis</Button>
                <Button color="inherit" className={classes.menuButton} onClick={(e) => handleMenuClick(e, 'Settings')}>Settings</Button>
                {renderMenu(menuId)}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
