import React from "react";
import {Link} from 'react-router-dom';

export default function ProductItem(props){
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
        <li class="itemWrapper" style={itemWrapperStyle}>
            <Link to={`/products/${props.id}`}>
                <img class="item-thumbnail" style={thumbnailStyle} src={props.image} alt={props.title} ></img>
            </Link>
            <div class="item_summary" >
                <span class="item_cat">{props.category}</span>/
                <span class="item_src">{props.source}</span>
                <Link to={`/products/${props.id}`}>
                    <h2 class="item_name" style={item_nameStyle}>{props.title}</h2>
                </Link>
                <span class="price" style={priceStyle}>
                    <span class="currency">HK $</span>
                    <span class="amount">{props.price}</span>
                </span>
            </div> 
        </li>

    );
};