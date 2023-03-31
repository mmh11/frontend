import React from 'react'
import { motion } from "framer-motion"
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card } from '@mui/material'
import { removeCart } from "../redux/cartReducer";
import { fontWeight } from '@mui/system';

export default function Cart(){
    const muiButtonSX = {
        backgroundColor: "#8f8f8f",
        "&:hover": { 
            backgroundColor: "#8f8f8f",
        }
    }
    const muiButtonSX2 = {
        backgroundColor: "#fccf38",
        "&:hover": { 
            backgroundColor: "#bf9b22",
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
    const dispatch = useDispatch()
    const currentCart = useSelector((state) => state.cart.cart)
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
                <p style={rightPStyle}>Subtotal:&nbsp;{totalPrice}</p>
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
                        style={textButtonStyleClicked}>
                        Checkout
                    </Button>
                </div>
            </div>}
        </motion.div>
    )
}