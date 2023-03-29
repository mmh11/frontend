import React from 'react'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom';
import land1 from "../images/lands/land1.png"
import land2 from "../images/lands/land2.png"
import land3 from "../images/lands/land3.jpg"
import land4 from "../images/lands/land4.png"

export default function Products(){
    const secondaryColor = "#f30987"
    const containerStyle = {
        display:"flex",
        gap: "10px"
    };
    const sidebarStyle={
        display:"flex",
        padding: "2rem",
        paddingTop: 0,
        borderRight: "2px solid #cccccc"
    }
    const item_catStyle = {
        listStyle: "none",
        padding:0,
        marginBottom: "2rem",
        width:"300px"
    }
    const cat_nameStyle = {
        fontSize: 25,
        textDecoration:"none",
        fontWeight: 600,
        marginBottom:"1rem"
    }
    const item_cat_nameStyle = {
        color:secondaryColor
    }
    const item_srcStyle = {
        fontSize: 20,
        paddingLeft:"2rem",
        marginBottom:"0.5rem"
    }
    const count_style = {
        float: "right",
        paddingRight:"2rem"
    }
    const contentAreaStyle = {
        padding:"2rem"
    }
    const page_titleStyle = {
        fontSize:"40px",
        color: secondaryColor
    }
    const productListStyle = {
        marginTop:"3rem",
        display:"flex",
        flexWrap:"wrap",
        columnGap: "40px",
        rowGap: "50px",
        listStyle: "none"
    };
    const itemWrapperStyle = {
        itemAlign:"center",
        textAlign: "center"
    }
    const thumbnailStyle = {
        width:400,
        height:400
    }
    const item_nameStyle = {
        marginBottom: "0.5rem"
    }
    const priceStyle ={
        display:"block",
        fontWeight:600,
        fontSize: "20px",
    }
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div style={containerStyle}>
                <div class="sidebar" style={sidebarStyle}>
                    <div class="categories">
                        <h1 class="sidebar_title" style={{fontWeight:"normal"}}>
                            Categories
                        </h1>
                        <ul class="product_cat" >
                            <ul class="item_cat" style={item_catStyle}>
                                <li class="cat_name" style={cat_nameStyle}>                                    
                                    <Link to="" style={item_cat_nameStyle}>Lands</Link>                                                                           
                                    <span class="count" style={count_style}>(4)</span>
                                </li>
                                <li class="item_src" style={item_srcStyle}>
                                    <Link to="">The Sandbox</Link>
                                    <span class="count" style={count_style}>(1)</span>
                                </li>
                                <li class="item_src" style={item_srcStyle}>
                                    <Link to="">Decentraland</Link>
                                    <span class="count" style={count_style}>(1)</span>
                                </li>
                                <li class="item_src" style={item_srcStyle}>
                                    <Link to="">Somnium Space</Link>
                                    <span class="count" style={count_style}>(1)</span>
                                </li>
                                <li class="item_src" style={item_srcStyle}>
                                    <Link to="">Other</Link>
                                    <span class="count" style={count_style}>(1)</span>
                                </li>
                            </ul>
                            <ul class="item_cat" style={item_catStyle}>
                                <li class="cat_name"  style={cat_nameStyle}>                                    
                                    <Link to="" style={item_cat_nameStyle}>Option item</Link>                                                                           
                                    <span class="count" style={count_style}>(4)</span>
                                </li>
                                <li class="item_src" style={item_srcStyle}>
                                    <Link to="">The Sandbox</Link>
                                    <span class="count" style={count_style}>(1)</span>
                                </li>
                                <li class="item_src" style={item_srcStyle}>
                                    <Link to="">Decentraland</Link>
                                    <span class="count" style={count_style}>(1)</span>
                                </li>
                                <li class="item_src" style={item_srcStyle}>
                                    <Link to="">Somnium Space</Link>
                                    <span class="count" style={count_style}>(1)</span>
                                </li>
                                <li class="item_src" style={item_srcStyle}>
                                    <Link to="">Other</Link>
                                    <span class="count" style={count_style}>(1)</span>
                                </li>
                            </ul>                           

                        </ul>
                    </div>
                </div>
                <div class="contentArea" style={contentAreaStyle}>
                    <nav class="page_nav">
                        <Link to="/">Home</Link>/
                        <Link to="">Products</Link>
                    </nav>
                    <h1 class="page_title" style={page_titleStyle}>Products</h1>
                    <div class="products">
                        <ul class="productList"  style={productListStyle}>
                            <li class="itemWrapper" style={itemWrapperStyle}>
                                <Link to="/productDes">
                                    <img class="item-thumbnail" src={land1} alt="land1" style={thumbnailStyle}></img>
                                </Link>
                                <div class="item_summary" >
                                    <span class="item_cat">Lands</span>/
                                    <span class="item_src">The Sandbox</span>
                                    <Link to="">
                                        <h2 class="item_name" style={item_nameStyle}>Land 1</h2>
                                    </Link>
                                    <span class="price" style={priceStyle}>
                                        <span class="currency">HK $</span>
                                        <span class="amount">11,000.00</span>
                                    </span>
                                </div> 
                            </li>     
                            <li class="itemWrapper" style={itemWrapperStyle}>
                                <Link to="">
                                    <img class="item-thumbnail" src={land2} alt="land2" style={thumbnailStyle}></img>
                                </Link>
                                <div class="item_summary">
                                    <span class="item_cat">Lands</span>/
                                    <span class="item_src">Decentraland</span>
                                    <Link to="">
                                        <h2 class="item_name" style={item_nameStyle}>Land 2</h2>
                                    </Link>
                                    <span class="price" style={priceStyle}>
                                        <span class="currency">HK $</span>
                                        <span class="amount">99,000.00</span>
                                    </span>
                                </div> 
                            </li>   
                            <li class="itemWrapper" style={itemWrapperStyle}>
                                <Link to="">
                                    <img class="item-thumbnail" src={land3} alt="land3" style={thumbnailStyle}></img>
                                </Link>
                                <div class="item_summary">
                                    <span class="item_cat">Lands</span>/
                                    <span class="item_src">Somnium Space</span>
                                    <Link to="">
                                        <h2 class="item_name" style={item_nameStyle}>Land 3</h2>
                                    </Link>
                                    <span class="price" style={priceStyle}>
                                        <span class="currency">HK $</span>
                                        <span class="amount">20,000.00</span>
                                    </span>
                                </div> 
                            </li>   
                            <li class="itemWrapper" style={itemWrapperStyle}>
                                <Link to="">
                                    <img class="item-thumbnail" src={land4} alt="land4" style={thumbnailStyle}></img>
                                </Link>
                                <div class="item_summary">
                                    <span class="item_cat">Option Item</span>/
                                    <span class="item_src">Other</span>
                                    <Link to="">
                                        <h2 class="item_name" style={item_nameStyle}>Land 4</h2>
                                    </Link>
                                    <span class="price" style={priceStyle}>
                                        <span class="currency">HK $</span>
                                        <span class="amount">120,000.00</span>
                                    </span>
                                </div> 
                            </li>                      
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}