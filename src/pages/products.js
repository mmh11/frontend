import React from 'react'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'
import data from "./lands"
import ProductItem from '../components/productItem'

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
    const landList = data.map((data)=>(
        <ProductItem
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
                            {landList}                      
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}