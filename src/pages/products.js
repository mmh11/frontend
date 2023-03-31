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
    const sidebar_titleStyle = {
        fontWeight:"normal",
        fontSize:"40px"
    }
    const item_catStyle = {
        listStyle: "none",
        padding:0,
        marginBottom: "2rem",
        width:"400px"
    }
    const cat_nameStyle = {
        fontSize: "35px",
        textDecoration:"none",
        fontWeight: 600,
        marginBottom:"1rem"
    }
    const item_cat_nameStyle = {
        color:secondaryColor,
    }
    const item_srcStyle = {
        fontSize: "30px",
        paddingLeft:"2rem",
        marginBottom:"0.5rem"
    }
    const page_navStyle = {
        fontSize:"24px"
    }
    const count_style = {
        float: "right",
        paddingRight:"2rem"
    }
    const contentAreaStyle = {
        padding:"2rem",
        clear:"both"
    }
    const page_titleStyle = {
        fontSize:"60px",
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
    const catList= (cat)=> {
        return data.filter(data=>data.category===cat).map((data)=>(
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
    }
    function findCategories(data){
        var arr=Array.from(new Set(data.map((data)=>(data.category)))); 
        return arr;
    }
    function findSources(data){
        var arr=Array.from(new Set(data.map((data)=>(data.source)))); 
        return arr;
    }
    function catCount(data,element){
        return data.filter((cur)=>(cur.category===element)).length;
    }
    function srcCount(data,element){
        return data.filter((cur)=>(cur.source==element)).length;
    }
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>  
                    
            <div style={containerStyle}>
                <div className="sidebar" style={sidebarStyle}>
                    <div className="categories">
                        <h1 className="sidebar_title" style={sidebar_titleStyle}>
                            Categories
                        </h1>
                        <ul className="product_cat" >
                            <ul className="item_cat" style={item_catStyle}>
                                <li className="cat_name" style={cat_nameStyle}>                                    
                                    <Link to="" style={item_cat_nameStyle}>Lands</Link>                                                                           
                                    <span className="count" style={count_style}>(4)</span>
                                </li>
                                <li className="item_src" style={item_srcStyle}>
                                    <Link to="">The Sandbox</Link>
                                    <span className="count" style={count_style}>(1)</span>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="contentArea" style={contentAreaStyle}>
                    <nav className="page_nav" style={page_navStyle}>
                        <Link to="/">Home</Link>/
                        <Link to="">Products</Link>
                    </nav>
                    <div className="all_product">
                        <h1 className="page_title" style={page_titleStyle}>Products</h1>
                        <div className="products">
                            <ul className="productList"  style={productListStyle}>
                                {landList}                      
                            </ul>
                        </div>
                    </div>                    
                    <div className="categories">
                        <div className="cat_land">
                            <h1 className="category_Name" style={page_titleStyle}>Lands</h1>
                            <ul className="productList"  style={productListStyle}>
                                {catList("Lands")}             
                            </ul>
                        </div>
                        <div className="cat_option">
                            <h1 className="category_Name" style={page_titleStyle}>Option Item</h1>
                            <ul className="productList"  style={productListStyle}>
                                {catList("Option Item")}             
                            </ul>
                        </div>
                    </div> 
                </div>                               
            </div>
        </motion.div>
    )
}