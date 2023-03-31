import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Dialog, DialogActions, DialogContent, Button, Card, Snackbar } from '@mui/material'
import { removeCart } from "../redux/cartReducer";
import Logo from "../images/metaphorLab.png"

export default function Cart(){
    const muiButtonSX = {
        backgroundColor: "#8f8f8f",
        "&:hover": { 
            backgroundColor: "#8f8f8f",
        }
    }
    const muiButtonSX2 = {
        backgroundColor: "#f30987",
        "&:hover": { 
            backgroundColor: "#bf066a",
        }
    }
    const textButtonStyleClicked = {
        maxWidth:"450px",
        color: "white",
        fontSize: "0.7VW",
        marginTop:"0.5VH",
        height: "50px",
        marginLeft: "1VW",
        marginRight: "1VW"
    }
    const bodyDivStyle = {
        marginLeft: "8VW",
        marginRight: "8VW"
    }
    const titleStyle = {
        textAlign: "center",
        fontSize: "24px"
    }
    const miniItemCardStyle = {
        marginTop: "20px",
        height: "100px",
        width: "70%",
        display: "flex",
        verticalAlign: "center"
    }
    const centerTextStyle = {
        alignSelf: "center",
        fontSize: "24px",
        marginLeft: "100px"
    }
    const centerBoldTextStyle = {
        alignSelf: "center",
        fontSize: "24px",
        marginLeft: "100px",
        fontWeight: "bold"
    }
    const imgStyle = {
        maxWidth: "100px",
        maxHeight: "100px"
    }
    const bottomDivStyle = {
        textAlign: "center"
    }
    const rightPStyle= {
        fontSize: "1VW",
        textAlign: "right",
        marginRight: "12VW",
        fontWeight: "bold"
    }
    const dialogStyle = {
        backgroundColor: "#3b3b3b",
        color: "white",
        padding: 0
    }
    const textfieldSXStyle = {
        "& .MuiInputBase-root": {
            color: "#cccccc"
        },
        " .MuiInputLabel-root": {
            color: "#cccccc"
        },
        "& label.Mui-focused": {
            color: "#f30987"
        },
        '& .MuiInput-underline:before': { 
            borderBottomColor: 'black' 
        },
        '& .MuiInput-underline:after': { 
            borderBottomColor: 'black' 
        },
    }
    const dispatch = useDispatch()
    const currentCart = useSelector((state) => state.cart.cart)
    const [open, setOpen] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const handleSnack = () => {
        setSnackbarOpen(!snackbarOpen)
    }
    const handleClicked = () => {
        setOpen(!open)
    }
    const handleCheckout = () =>{
        console.log(currentCart)
        // after user clicked checkout, pass data of the "currentCart" to the backend !!
        // some code send to backend
        dispatch(removeCart()) // this line remove all temporary data in the redux(the cart)
        setOpen(!open)
        setSnackbarOpen(!snackbarOpen)
    }
    let totalPrice = 0.00
    for (let i in currentCart){
        let itemPrice = currentCart[i].goods.price.replace(/,/g, '')
        totalPrice = totalPrice + (parseFloat(itemPrice))
    }
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {currentCart.length === 0 ?
            <div style={bodyDivStyle}>
                <br/>
                <p style={titleStyle}>
                    Your Shopping Cart Is Empty!
                </p>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={10000}
                    onClose={handleSnack}
                    message="Purchase Successfully!"
                />
            </div>:
            <div style={bodyDivStyle}>
                <br/>
                <p style={titleStyle}>
                    Your Shopping Cart
                </p>
                <div style={{textAlign: "-webkit-center"}}>
                    {currentCart.map(item => (
                        <Card style={miniItemCardStyle}>
                            <img style={imgStyle} src={item.goods.image}></img>
                            <p style={centerTextStyle}>Product Name:&nbsp;</p>
                            <p style={centerBoldTextStyle}>{item.goods.title}</p>
                            <p style={centerTextStyle}>Product Price:&nbsp;</p>
                            <p style={centerBoldTextStyle}>{item.goods.price}</p>
                        </Card>
                    ))}
                </div>
                <p style={rightPStyle}>Subtotal:&nbsp;${totalPrice}</p>
                <br/><br/><br/>
                <div style={bottomDivStyle}>
                    <Button 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={textButtonStyleClicked}
                        onClick={()=>dispatch(removeCart())}>
                        Remove All Cart Items
                    </Button>
                    <Button 
                        sx={muiButtonSX2} 
                        disableRipple 
                        style={textButtonStyleClicked}
                        onClick={handleClicked}>
                        Checkout
                    </Button>
                    <Dialog 
                        open={open} 
                        PaperProps={{sx: {width: "50%", minHeight: "600px"}}}
                        onClose={handleClicked}>
                        <DialogContent style={dialogStyle}>
                            <div style={{marginLeft: "5VW", marginRight: "5VW", marginTop: "7VW"}}>
                                <p style={{fontSize: "1.5VW", color: "#f30987"}}>Card Detail</p>
                                <TextField label="Card Number" variant="standard" style={{width:"90%"}} sx={textfieldSXStyle}/>
                                <br/><br/>
                                <p>Expiry Date</p>
                                <div style={{display: "flex"}}>
                                    <TextField label="M" variant="standard" style={{width:"20%"}} sx={textfieldSXStyle}/>
                                    &nbsp;<p>/</p>&nbsp;
                                    <TextField label="Y" variant="standard" style={{width:"20%"}} sx={textfieldSXStyle}/>
                                </div>
                                <br/><br/>
                                <p>CVV Code</p>
                                <TextField label="CVV" variant="standard" sx={textfieldSXStyle}/>
                                <br/><br/><br/><br/>
                            </div>
                            <Button style={{width: "100%", backgroundColor: "#f30987", color:"white", marginTop:"4VH", height: "100px"}} onClick={handleCheckout}>Checkout</Button>
                        </DialogContent>
                    </Dialog>
                </div>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={10000}
                    onClose={handleSnack}
                    message="Purchase Successfully!"
                />
            </div>}
        </motion.div>
    )
}