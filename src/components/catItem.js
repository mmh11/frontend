import React from "react";

export default function catItem(props){
    const secondaryColor = "#f30987";
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
    const sectionID="#"+props.category;
    return (              
        <div class="cat_name" style={cat_nameStyle}>                                    
            <a href={sectionID}
                style={item_cat_nameStyle}>
                {props.category}
            </a>                                                                           
            <span class="count" style={count_style}>{props.count}</span>
        </div>        
    );
}