import React from 'react'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'
import data from "./lands"
import ProductItem from '../components/productItem'
import CatItem from "../components/catItem"
import SrcItem from "../components/srcItem"

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
    const page_navStyle = {
        fontSize:"24px"
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
        columnGap: "70px",
        rowGap: "50px",
        listStyle: "none"
    };
    const landList = data.map((data,)=>(
        <ProductItem
            key={data.id}
            title={data.title}
            id={data.id}
            category={data.category}
            source={data.source}
            image={data.image}
            description={data.description}
            price={data.price}
            date={data.date}
        />)
    );
    function getCategories(data){
        return Array.from(new Set(data.map((data)=>(data.category)))); 
    }
    function getSources(data, cat){
        return Array.from(new Set(data.filter(data=>data.category===cat).map((data)=>(data.source)))); 
    }
    function catCount(data,cat){
        return data.filter((cur)=>(cur.category===cat)).length;
    }
    function srcCount(data,src,cat){
        return data.filter((cur)=>(cur.source===src && cur.category===cat)).length;
    }
    const getCatItem = (cat)=>{
        return (
            <CatItem 
                category={cat}
                count={catCount(data,cat)}
            ></CatItem>
        )
    }
    const src_item_list = (srcs, cat)=> srcs.map((src)=>{
        return (
            <SrcItem
            source={src}
            count={srcCount(data,src,cat)}
            />
        )
        }
    );
    const cat_item_list = getCategories(data).map((cat) =>{
        return (
            <div style={item_catStyle}>
                {getCatItem(cat)}
                {src_item_list(getSources(data,cat),cat)}
            </div>
        )}
    )
    const catList = (cat)=> {
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
    const cat_product_list = getCategories(data).map((cat) =>{
        return (
            <div id={cat} style={{marginTop:"10rem"}}>           
                <h1 className="category_Name" style={page_titleStyle}>{cat}</h1>
                <ul className="productList"  style={productListStyle}>
                    {catList(cat)}             
                </ul>
            </div>
        )}
    )
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
                        <div className="product_cat" >
                            {cat_item_list}
                        </div>
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
                        {cat_product_list}
                    </div> 
                </div>                               
            </div>
        </motion.div>
    )
}