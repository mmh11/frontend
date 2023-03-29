import React, { useEffect, useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export default function CurrencyConverter(){
    const muiButtonSX = {
        "&:hover": { 
            backgroundColor: "transparent",
            textDecoration: "underline"
        }
    }
    const textButtonStyle = {
        maxWidth:"450px",
        marginLeft:"3VW",
        color: "#000000",
        fontSize: "0.9VW",
        marginTop:"0.5VH"
    };
    const [open, setOpen] = useState(false)
    const handleClicked = () => {
        setOpen(!open)
    }

    const [priceData, setPriceData] = useState([])
    const fetchPriceData = () => {
        fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=HKD")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setPriceData(data)
            })
    }
    useEffect(() => {
        fetchPriceData()
    }, [])
    return(
        <Button 
            sx={muiButtonSX} 
            disableRipple 
            style={textButtonStyle}
            onClick={handleClicked}>
            <p>Currency Converter</p>
        </Button>
        
    )
}