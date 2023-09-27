import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../utility/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Services from '../Components/Services';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    const handleScroll = () => {
        var scroll = window.scrollY;

        // Check if the user has scrolled beyond a certain point (e.g., 300 pixels)
        if (scroll >= 200) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <>
            <div className={`header ${isScrolled ? 'fix-header' : ''}`}>
                <div className="bound">
                    <div className="topsec">
                        <div className="logo"><Link className="nav-Link" to="/"><img src={logo} alt="Logo" /></Link></div>
                        <div className="menu">
                            <Link to="/" className='toggle-menu' style={{ display: "none" }}>Menu</Link>
                            <ul>
                                <li className="nav-item parent"><Link className="nav-Link" to="/">Home</Link></li>
                                <li className="nav-item parent"><Link className="nav-Link" to="/carts"><ShoppingCartIcon /></Link></li>
                                <li className="nav-item parent"><Link className="nav-Link" to="#"><FormatAlignJustifyIcon onClick={handleClickOpen} /></Link></li>
                                <li className="nav-item get-free"><Link className="nav-Link" to="#">Get Started</Link></li>
                            </ul>

                        </div>
                    </div>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                         
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                <Services />
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Close
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            </div>

        </>
    )
}

export default Navbar