import React from 'react'
import { motion } from "framer-motion"
import HomepageImg from "../images/homepageImg.jpg"
import { Button } from '@mui/material'
import {Link} from 'react-router-dom';

export default function home(){
    const bodyDiv = {
        marginLeft: "8VW"
    }
    const paraDiv = {
        display: "flex"
    }
    const text1 = {
        color: "#f30987",
        fontSize: "6VW",
        margin: 0
    }
    const text2 = {
        color: "#808080",
        margin: 0,
        fontSize: "1.5VW",
    }
    const elementDiv = {
        position: "absolute",
        marginTop: "45VH",
    }
    const imgStyle = {
        width: "50VW",
        height: "32VW",
        marginLeft: "35VW",
        marginTop: "10VH",
        borderRadius: "10VW 5VW",
    }
    const buttonStyle = {
        marginTop: "5VH",
        BackgroundColor: "#f30987",
        width: "15VH",
        height: "5VH"
    }
    const muiButtonSX = {
        backgroundColor: "#f30987",
        "&:hover": {backgroundColor: "transparent",color:"#f30987"}
    };
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={bodyDiv}>
            <div style={paraDiv}>
                <div style={elementDiv}>
                    <h5 style={text1}>Metaphor Lab</h5>
                    <h5 style={text2}>Metaverse Real Estate Trading Platform</h5>
                    <Button
                        variant="contained"
                        sx={muiButtonSX}
                        style={buttonStyle}
                        component={Link} 
                        to="/products">
                        Get Started
                    </Button>
                </div>
                <div>
                    <img src={HomepageImg} style={imgStyle}/>
                </div>
            </div>
        </motion.div>
    )
}