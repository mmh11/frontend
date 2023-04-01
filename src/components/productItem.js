import React from "react";
import {Link} from 'react-router-dom';

export default function ProductItem(props){
    const itemWrapperStyle = {
        itemAlign:"center",
        textAlign: "center"
    }
    const item_metaInfoStyle = {
        fontSize:"30px"
    }
    const thumbnailStyle = {
        width:500,
        height:500
    }
    const item_nameStyle = {
        margin: "0.5rem",
        fontSize:"45px"
    }
    const priceStyle ={
        display:"block",
        fontWeight:600,
        fontSize: "30px",
    }
    return(        
        <li class="itemWrapper" style={itemWrapperStyle}>
            <Link to={`/products/${props.id}`}>
                <img class="item-thumbnail" style={thumbnailStyle} src={props.image} alt={props.title} ></img>
            </Link>
            <div class="item_summary" >
                <div class="item_metaInfo" style={item_metaInfoStyle}>
                    <span class="item_cat">{props.category}</span>/
                    <span class="item_src">{props.source}</span>
                </div>
                {props.date===undefined ?
                    <Link to={`/products/${props.id}`}>
                        <h2 class="item_name" style={item_nameStyle}>{props.title}</h2>
                    </Link>
                :
                <div>
                    <h2 class="item_name" style={item_nameStyle}>{props.title}</h2>
                    <span class="date_of_purchase" style={priceStyle}>
                        <span class="data_title">Date of purchase: </span>
                        <span class="data">{props.date}</span>
                    </span>
                </div>
                }
                <span class="price" style={priceStyle}>
                    <span class="currency">HK $</span>
                    <span class="amount">{props.price}</span>
                </span>
                
            </div> 
        </li>

    );
};