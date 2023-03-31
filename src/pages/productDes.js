import React from 'react'
import { motion } from "framer-motion"
import { Button } from '@mui/material'
import {Link, useParams} from 'react-router-dom';
import data from "./lands.js"
import RecItem from "../components/recItem"
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from "../redux/cartReducer";

function GetParameterID(){
    return useParams();
}

export default function ProductDes(){
    const ProductID = GetParameterID();
    const product=data.find((land)=> land.id ===ProductID.id);
    const {title, id,category,source,image,description,price }=product;
    const recList = data.filter(land=>land.id!=ProductID.id).map((data)=>(
        <RecItem
            key={data.id}
            title={data.title}
            id={data.id}
            category={data.category}
            source={data.source}
            image={data.image}
            description={data.description}
            price={data.price}
        />
    ));
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
        fontSize:"30px"
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
        fontSize:"80px",
        marginBottom: "0.5rem"
    }
    const product_catStyle={
        fontSize:"25px"
    }
    const product_desStyle = {
        margin:0,
        fontSize:"40px"
    }
    const product_des_shortStyle = {
        marginTop:0
    }
    const cat_titleStyle={
        fontWeight:600,
    }
    const product_priceStyle = {
        fontSize:"50px",
        fontWeight: 700
    }
    const buttonStyle = {
        BackgroundColor: "#f30987",
        width: "25VH",
        height: "5VH",
        fontWeight: 600,
        fontSize:"30px",
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
    const rulerStyle = {
        borderTop:  "1px solid #cccc"
    }
    const dispatch = useDispatch()
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div class="container" style={containerStyle}>
            <div class="product_wrapper" style={product_wrapperStyle}>
                    <img class="product_img" style={product_imgStyle} src={image} alt={title}></img>                    
                    <div class="product_summary" style={product_summaryStyle}>
                        <h1 class="product_title" style={product_titleStyle}>{title}</h1>
                        <hr style={rulerStyle}></hr>
                        <div class="product_cat" style={product_catStyle}>
                            <span class="cat_title" style={cat_titleStyle}>Category: </span>
                            <span class="item_cat">{category}</span>
                            <span> / </span>
                            <span class="src">{source}</span>
                        </div>
                        <p class="price" style={product_priceStyle}>
                            <span class="currency">HK $</span>
                            <span class="amount">{price}</span>
                        </p>
                        <h3 class="product_des" style={product_desStyle}>Description</h3>
                        <p class="product_des_short" style={product_des_shortStyle}>
                            {description}
                        </p>
                        {/*<form class="add-to-cart" action="" method="post" encType='multipart/form-data'> I commented this part to test the cart first. by Martin*/}
                        <Button type="submit" 
                                name="add-to-cart" 
                                variant="contained"
                                sx={muiButtonSX}
                                style={buttonStyle}
                                onClick={()=>dispatch(addCart(product))}
                        >ADD TO CART
                        </Button>  
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
                        {recList}
                    </ul>
                </div>                
            </div>
        </motion.div>
    )
};