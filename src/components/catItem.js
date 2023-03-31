import React from "react";
import {Link} from 'react-router-dom';
import data from "../pages/lands"

export default function catItem(props){
    const cat_nameStyle = {
        fontSize: "35px",
        textDecoration:"none",
        fontWeight: 600,
        marginBottom:"1rem"
    }
    const item_cat_nameStyle = {
        color:secondaryColor,
    }
    const count_style = {
        float: "right",
        paddingRight:"2rem"
    }
    return (       
        <li class="cat_name" style={cat_nameStyle}>                                    
            <Link to="" style={item_cat_nameStyle}>{props.category}</Link>                                                                           
            <span class="count" style={count_style}>{props.count}</span>
        </li>        
    );
}