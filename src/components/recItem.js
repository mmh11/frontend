import React from "react";
import {Link} from 'react-router-dom';

export default function recItem(props){
    const recitemWrapperStyle = {
        itemAlign:"center",
        textAlign: "center",
        padding:"1rem",
        backgroundColor:"#EBECF0",
        borderRadius: "25px"
    }
    const recItem_metaInfoStyle = {
        fontSize:"20px"
    }
    const recThumbnailStyle = {
        width:450,
        height:450,
        borderRadius: "10px",
        padding:0
    }
    const recItem_nameStyle = {
        margin:"0.5rem",
        fontSize:"40px"
    }
    const recPriceStyle ={
        display:"block",
        fontWeight:600,
        fontSize: "25px",
    }
    return(
        <li class="itemWrapper" style={recitemWrapperStyle}>
            <Link to={`/products/${props.id}`}>
                <img class="item-thumbnail" style={recThumbnailStyle}
                    src={props.image} alt={props.title} ></img>
            </Link>
            <div class="item_summary">
                <div class="item_metaInfo" style={recItem_metaInfoStyle}>
                    <span class="item_cat">{props.category}</span>
                    <span> / </span>
                    <span class="item_src">{props.source}</span>
                </div>
                
                <Link to={`/products/${props.id}`}>
                    <h2 class="item_name" style={recItem_nameStyle}>{props.title}</h2>
                </Link>
                <span class="price" style={recPriceStyle}>
                    <span class="currency">HK $</span>
                    <span class="amount">{props.price}</span>
                </span>
            </div> 
        </li> 
    );
};