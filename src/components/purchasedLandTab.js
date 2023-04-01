import React from 'react'
import data from "../pages/purchasedItems.js"
import ProductItem from "../components/productItem"

export default function lands(){
    const productListStyle = {
        marginTop:"3rem",
        display:"flex",
        flexWrap:"wrap",
        columnGap: "70px",
        rowGap: "50px",
        listStyle: "none"
    };

    const catList = data.filter(data=>data.category==="Lands").map((data)=>(
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
    />
    ));
    
    return (
        <div>
            <ul className="productList"  style={productListStyle}>
                {catList}             
            </ul>
        </div>
    )
}