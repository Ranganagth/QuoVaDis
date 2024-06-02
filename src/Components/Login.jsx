import React, { useState } from "react";
import { Button, Box, Container, Snackbar, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import "../App.css";
import Header from './Header';
import Table from './Table';

const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [open, setOpen] = useState(false);

    const handleSignIn = () => {
        setIsSignedIn(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    if (isSignedIn) {
        return (
            <>
                <Header />
                <Box mt={10}>
                    <Container>
                        <Table />
                    </Container>
                </Box>
            </>
        );
    }

    return (
        <div className="login-page">
            <div className="container">
                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign In</h1>
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <span>or another service to continue with</span>
                        <div className="social-container">
                            <a href="https://www.facebook.com/login.php/" className="social" alt="facebook"><FaFacebookF /></a>
                            <a href="https://accounts.google.com/signin" className="social" alt="google"><FaGoogle /></a>
                            <a href="https://x.com/i/flow/login" className="social" alt="twitter"><FaTwitter /></a>
                        </div>
                        <button
                            type="button"
                            onClick={handleClick}
                            style={{
                                color: '#03045E',
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                textDecoration: 'underline',
                                margin: '15px 0'
                            }}
                        >
                            Forgot Your Password?
                        </button>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Contact IT admin to reset your password"
                            action={action}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                display: "block",
                                margin: "3rem 0",
                                backgroundColor: "#a8012d",
                                textTransform: "none",
                                width: "15vw",
                                fontSize: "1.2rem",
                                minHeight: "52.5px",
                            }}
                            onClick={handleSignIn}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <img src="M.png" width="100px" alt="M logo" />
                            <img src="quo_log.png" width="250px" alt="Quo logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

// // Login.js
// import React, { useState } from "react";
// import Header from './Header';
// import Table from './Table';
// import { Button, Box, Container, Snackbar, IconButton } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import "./style.css";

// const Login = () => {
//     const [isSignedIn, setIsSignedIn] = useState(false);
//     const [open, setOpen] = useState(false);

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }
//         setOpen(false);
//     };

//     const action = (
//         <IconButton
//             size="small"
//             aria-label="close"
//             color="inherit"
//             onClick={handleClose}
//         >
//             <CloseIcon fontSize="small" />
//         </IconButton>
//     );

//     const handleClick = () => {
//         setOpen(true);
//     };

//     const handleSignIn = () => {
//         setIsSignedIn(true);
//     };

//     if (isSignedIn) {
//         return (
//             <>
//                 <Header />
//                 <Box mt={10}>
//                     <Container>
//                         <Table />
//                     </Container>
//                 </Box>
//             </>
//         );
//     }

//     return (
//         <div className="background">
//             <div className="shape"></div>
//             <div className="shape"></div>
//             <form>
//                 <h3>Login Here</h3>

//                 <label htmlFor="username">Username</label>
//                 <input type="text" placeholder="Email or Phone" id="username" />

//                 <label htmlFor="password">Password</label>
//                 <input type="password" placeholder="Password" id="password" />

//                 <button
//                     type="button"
//                     onClick={handleClick}
//                     style={{
//                         color: '#03045E',
//                         background: 'none',
//                         border: 'none',
//                         padding: 0,
//                         cursor: 'pointer',
//                         textDecoration: 'underline',
//                         margin: '15px 0'
//                     }}
//                 >
//                     Forgot Your Password?
//                 </button>
//                 <Snackbar
//                     open={open}
//                     autoHideDuration={6000}
//                     onClose={handleClose}
//                     message="Contact IT admin to reset your password"
//                     action={action}
//                 />

//                 <Button
//                     variant="contained"
//                     sx={{
//                         display: "block",
//                         margin: "3rem 0",
//                         backgroundColor: "#a8012d",
//                         textTransform: "none",
//                         width: "15vw",
//                         fontSize: "1.2rem",
//                         minHeight: "52.5px",
//                     }}
//                     onClick={handleSignIn}>Log In</Button>
//                 <div className="social">
//                     <div className="go">
//                         <i className="fab fa-google"></i> Google
//                     </div>
//                     <div className="fb">
//                         <i className="fab fa-microsoft"></i> Microsoft
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;
