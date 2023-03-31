import React from "react";
import {Link} from 'react-router-dom';

export default function catItem(props){
    const item_srcStyle = {
        fontSize: "30px",
        paddingLeft:"2rem",
        marginBottom:"0.5rem"
    }
    const count_style = {
        float: "right",
        paddingRight:"2rem"
    }
    return (       
        <div className="item_src" style={item_srcStyle}>
            <span>{props.source}</span>
            <span className="count" style={count_style}>({props.count})</span>
        </div>
    );
}