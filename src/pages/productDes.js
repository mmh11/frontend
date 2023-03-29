import React from 'react'
import { motion } from "framer-motion"
import { Button } from '@mui/material'
import {Link} from 'react-router-dom';

import land1 from "../images/lands/land1.png"
import land2 from "../images/lands/land2.png"
import land3 from "../images/lands/land3.jpg"
import land4 from "../images/lands/land4.png"

export default function ProductDes(){
    const containerStyle = {
        marginLeft:"2rem",
        marginRight:"2rem",
        padding:"3rem",
    }    
    const product_wrapperStyle = {
        display: "flex",
        flexWrap: "wrap",
        itemAlign: "stretch",
        gap: "20px",
        padding:"2rem",
        fontSize:"25px"
    }
    const product_imgStyle = {
        width:"600px",
        height: "600px",
        margin:"3rem"
    }
    const product_summaryStyle = {
        flex:1
    }
    const product_titleStyle = {
        fontSize:"60px",
        marginBottom: "0.5rem"
    }
    const product_catStyle={
        fontSize:"20px"
    }
    const product_desStyle = {
        margin:0
    }
    const product_des_shortStyle = {
        marginTop:0
    }
    const cat_titleStyle={
        fontWeight:600,
    }
    const product_priceStyle = {
        fontSize:"40px",
        fontWeight: 700
    }
    const buttonStyle = {
        BackgroundColor: "#f30987",
        width: "15VH",
        height: "5VH",
        fontWeight: 600,
        fontDecoration: "uppercase"
    }
    const muiButtonSX = {
        backgroundColor: "#f30987",
        "&:hover": {backgroundColor: "transparent",color:"#f30987"}
    };
    const recommendationStyle = {
        margin:"3rem"
    }
    const recTitleStyle = {
        borderTop: "4px solid #f30987"
    }
    const recProduct_Style = {
        listStyle: "none",        
        padding:0,
        marginTop:"3rem",
        display:"flex",
        flexWrap:"wrap",
        columnGap: "2rem",
        rowGap: "50px",        
    }
    const recitemWrapperStyle = {
        itemAlign:"center",
        textAlign: "center",
        padding:"1rem",
        backgroundColor:"#EEEEEE",
        borderRadius: "25px"
    }
    const recThumbnailStyle = {
        width:250,
        height:250,
        borderRadius: "10px",
        padding:0
    }
    const recItem_nameStyle = {
        margin:"0.5rem"
    }
    const recPriceStyle ={
        display:"block",
        fontWeight:600,
        fontSize: "20px",
    }
    const rulerStyle = {
        borderTop:  "1px solid #cccc"
    }
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            //style={{backgroundColor:"#EDEDED",}}
        >
            <div class="container" style={containerStyle}>
                <div class="product_wrapper" style={product_wrapperStyle}>
                    <img class="product_img" style={product_imgStyle} src={land1} alt="Land1"></img>                    
                    <div class="product_summary" style={product_summaryStyle}>
                        <h1 class="product_title" style={product_titleStyle}>Land 1</h1>
                        <hr style={rulerStyle}></hr>
                        <div class="product_cat" style={product_catStyle}>
                            <span class="cat_title" style={cat_titleStyle}>Category: </span>
                            <span class="item_cat">Lands</span>
                            <span> / </span>
                            <span class="src">The Sandbox</span>
                        </div>
                        <p class="price" style={product_priceStyle}>
                            <span class="currency">HK $</span>
                            <span class="amount">120,000.00</span>
                        </p>
                        <h3 class="product_des" style={product_desStyle}>Description</h3>
                        <p class="product_des_short" style={product_des_shortStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec porttitor, ex eu cursus imperdiet, mi dui congue libero, at rhoncus diam sem id nulla. 
                            Donec pulvinar fringilla massa. Aliquam rhoncus tellus nec ipsum euismod ultricies. 
                            Vivamus pharetra non enim ut varius.
                        </p>
                        <form class="add-to-cart" action="" method="post" encType='multipart/form-data'>
                            <Button type="submit" 
                                    name="add-to-cart" 
                                    variant="contained"
                                    sx={muiButtonSX}
                                    style={buttonStyle}
                            >ADD TO CART
                            </Button>
                        </form>      
                    </div>
                </div>
                
                <div class="recommendation" style={recommendationStyle}>
                    <h1 class="recTitle">
                        <span style={recTitleStyle}>
                            Recommended items
                        </span>
                    </h1>
                    <hr style={rulerStyle}></hr>
                    <ul class="otherProducts" style={recProduct_Style}>
                        <li class="itemWrapper" style={recitemWrapperStyle}>
                            <Link to="/productDes">
                                <img class="item-thumbnail" 
                                    style={recThumbnailStyle}
                                    src={land1} alt="land1"></img>
                            </Link>
                            <div class="item_summary">
                                <span class="item_cat">Lands</span>
                                <span> / </span>
                                <span class="item_src">The Sandbox</span>
                                <Link to="">
                                    <h2 class="item_name" style={recItem_nameStyle}>Land 1</h2>
                                </Link>
                                <span class="price" style={recPriceStyle}>
                                    <span class="currency">HK $</span>
                                    <span class="amount">11,000.00</span>
                                </span>
                            </div> 
                        </li> 
                    </ul>
                </div>                
            </div>
        </motion.div>
    )
}