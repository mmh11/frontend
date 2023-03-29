import React, { useEffect, useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { motion } from "framer-motion";
import Logo from "../images/metaphorLab.png"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function CurrencyConverter(){
    const diaLogDivStyle = {
        width: "400px",
        height: "450px"
    }
    const iconStyle = {
        color: "#f30987",
        width: "30px",
        height: "30px",
        padding: "15px 15px"
    }
    const textfieldSXStyle = {
        width: "30%",
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
    const textButtonStyleCancel = {
        maxWidth:"400px",
        color: "#000000",
        fontSize: "0.8VW"
    }
    const imageStyle ={
        width: "3VW", 
        height: "3VW",
    }
    const titleDivStyle = {
        display: "flex",
        justifyContent: "center"
    }
    const dialogText = {
        alignSelf: "center",
        color: "#333333",
        fontSize: "1VW",
        paddingBottom: 0,
        display: "inline-flex",
        marginBottom:0
    }
    const pinkDialogText = {
        alignSelf: "center",
        color: "#f30987",
        fontSize: "1VW",
        paddingBottom: 0,
        display: "inline-flex",
        marginBottom:0
    }
    const wordsDivStyle = {
        textAlign: "center"
    }
    const converterDivStyle = {
        marginTop: "20px",
        textAlign: "center",
        display: ""
    }
    const [open, setOpen] = useState(false)
    const handleClicked = () => {
        setOpen(!open)
    }
    const handleChanged = (e) => {
        const inputValue = e.target.value
        if (inputValue !== ""){
            setCustomPriceData(parseFloat(inputValue).toFixed(2)*priceData)
        } else {
            setCustomPriceData(0)
        }
    }
    const [customPriceData, setCustomPriceData] = useState(0)
    const [priceData, setPriceData] = useState([])
    const fetchPriceData = () => {
        fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=HKD")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setPriceData(data.HKD)
            })
    }
    useEffect(() => {
        fetchPriceData()
    }, [])
    return(
        <div>
            <Button 
                sx={muiButtonSX} 
                disableRipple 
                style={textButtonStyle}
                onClick={handleClicked}>
                <p>Currency Converter</p>
            </Button>
            <Dialog open={open} onClose={handleClicked}>
                <DialogContent>
                    <div style={diaLogDivStyle}>
                        <div style={titleDivStyle}>
                            <img src={Logo} alt="" style={imageStyle}></img>
                        </div>
                        <div style={wordsDivStyle}>
                            <p style={dialogText}>
                                Real-time Currency Converter
                            </p>
                            <p>
                                (between HKD & ETH)
                            </p>
                            <br/>
                            <div>
                                <motion.svg
                                    style={iconStyle}
                                    animate={{
                                        scale: [1, 1.5, 1.5, 1.5, 1],
                                        rotate: [0, 0, 180, 360, 360]
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut",
                                        times: [0, 0.2, 0.5, 0.8, 1],
                                        repeat: Infinity,
                                        repeatDelay: 0.5
                                    }}
                                >
                                    <CurrencyExchangeIcon/>
                                </motion.svg>
                            </div>
                            <p style={pinkDialogText}>
                                1 ETH worths &nbsp;<h4 style={{margin:0}}>${priceData}</h4>&nbsp; HKD currently
                            </p>
                        </div>
                        <br/><br/>
                        <div style={converterDivStyle}>
                            <TextField
                                sx={textfieldSXStyle}
                                id="outlined-basic" 
                                label="Amount of ETH"
                                variant="standard"
                                onChange={handleChanged}
                            />
                            <p style={dialogText}>
                                &nbsp;=&nbsp;<h4 style={{margin:0}}>${customPriceData}</h4>&nbsp;HKD
                            </p>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={textButtonStyleCancel} 
                        onClick={handleClicked}> 
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}