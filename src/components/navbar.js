import React, {useState} from 'react'
import Logo from "../images/metaphorLab.png"
import {Link,useLocation} from 'react-router-dom';
import { AppBar, Button, Toolbar, Grid, Badge} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../components/loginDialog.js"
import CurrencyConverter from "../components/currencyConverter.js"
import { useSelector } from 'react-redux';

export default function Navbar(){
    const appbarStyle = {
        background: "transparent", 
        boxShadow: "none"
    };
    const buttonStyle = {
        maxWidth:"300px",
        marginLeft:"8VW",
    };
    const muiButtonSX = {
        "&:hover": { 
            backgroundColor: "transparent",
            textDecoration: "underline"
        }
    };
    const textButtonStyle = {
        maxWidth:"450px",
        marginLeft:"3VW",
        color: "#000000",
        fontSize: "0.9VW",
        marginTop:"0.5VH"
    };
    const textButtonStyleClicked = {
        maxWidth:"450px",
        marginLeft:"3VW",
        color: "#f30987",
        fontSize: "0.9VW",
        marginTop:"0.5VH"
    };
    const imageStyle ={
        width: "6VW", 
        height: "6VW",
    };
    const gridStyle = {
        whiteSpace: "nowrap",
        marginRight: "8VW",
        display: "inline-flex"
    }
    const gridStyle2 = {
        display: "inline-flex"
    }
    const nameDivStyle = {
        alignSelf: "center",
        color: "#f30987",
        fontSize: "1.5VW"
    }
    const location = useLocation().pathname;
    const currentCart = useSelector((state) => state.cart.cart)
    return(
        <AppBar position="static" style={appbarStyle}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Grid style={gridStyle2}>
                    <Button component={Link} to="/" sx={muiButtonSX} disableRipple style={buttonStyle}>
                        <img src={Logo} alt="" style={imageStyle}></img>
                    </Button>
                    <h1 style={nameDivStyle}>Metaphor Lab</h1>
                </Grid>
                <Grid style={gridStyle}>
                    <Button 
                        component={Link} 
                        to="/" 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={(location==="/")?textButtonStyleClicked:textButtonStyle}>
                        <p>Home</p>
                    </Button>
                    <Button 
                        component={Link} 
                        to="/products" 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={(location==="/products")?textButtonStyleClicked:textButtonStyle}>
                        <p>Products</p>
                    </Button>
                    <CurrencyConverter/>
                    <Button 
                        component={Link} 
                        to="/profile" 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={(location==="/profile")?textButtonStyleClicked:textButtonStyle}>
                        <p>Profile</p>
                    </Button>
                    <Button 
                        component={Link} 
                        to="/contact" 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={(location==="/contact")?textButtonStyleClicked:textButtonStyle}>
                        <p>Contact Us</p>
                    </Button>
                    <Button 
                        component={Link} 
                        to="/cart" 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={(location==="/cart")?textButtonStyleClicked:textButtonStyle}>
                        <Badge badgeContent={currentCart.length} color="secondary">
                            <ShoppingCartIcon/>
                        </Badge>
                    </Button>
                    <LoginDialog/>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}