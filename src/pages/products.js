import React from 'react'

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
        <div>
    
        </div>
    )
}