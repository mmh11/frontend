import React from 'react'
import { motion } from "framer-motion";
import { Button } from '@mui/material'

export default function contact(){
    const containerStyle={
        display:"flex",
        flexWrap:"wrap",
        gap:"5vw",
        margin:"10vw",
        marginTop:"5vw"
    }
    const container1Style={
        flex:1
    }
    const copywritingStyle={
        paddingTop:"2rem",
        fontSize:"35px",
        fontWeight:"600",
        color:"#676767"
    }
    const cardStyle={
        padding:"3rem",
        backgroundColor:"#eeee",
        borderRadius: "20px",
        flex:1
    }
    const title_style={
        fontSize:"60px",
        color:"#f30987"
    }
    const dividerStyle={
        border: "2px solid #cccc"
    }
    const inputStyle = {
        margin:"1rem 0",
        height:"5vh",
        width:"90%",
        outline:"none",
        border:"1px solid #cccc",
        padding:"5px 20px",
        fontSize:"30px",
        fontWeight:"400",
        color: "#cccc",
        borderRadius: "10px",
        backgroundColor: "#fff"
    }
    const messageBoxStyle = {
        margin:"1rem 0",
        height:"25vh",
        width:"90%",
        outline:"none",
        border:"1px solid #cccc",
        padding:"5px 20px",
        fontSize:"30px",
        fontWeight:"400",
        color: "#cccc",
        borderRadius: "10px",
        backgroundColor: "#fff"
    }
    const buttonStyle = {
        BackgroundColor: "#f30987",
        margin:"1rem 0",
        width: "25VH",
        height: "5VH",
        fontWeight: 600,
        fontSize:"30px",
        fontDecoration: "uppercase"
    }
    const muiButtonSX = {
        backgroundColor: "#f30987",
        "&:hover": {backgroundColor: "transparent",color:"#f30987"}
    };
    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div class="container" style={containerStyle}>
                <div class="container1" style={container1Style}>
                    <h1 style={title_style}>Contact Us</h1>
                    <hr style={dividerStyle}></hr>
                    <div style={copywritingStyle}>
                        <p>Want to list your property?</p>
                        <p>Fill in the form to list your property with us!</p>
                    </div>
                </div>
                <div class="card" style={cardStyle}>
                    <form action="#">
                        <div>
                            <input style={inputStyle} id="sellerName"type="text" placeholder="Full name" required />
                        </div>
                        <div>
                            <input style={inputStyle} id="sellerEmail"type="text" placeholder="Email address" required />
                        </div>
                        <div>
                            <input style={inputStyle} id="landName"type="text" placeholder="Land name(Optional)" />
                        </div>
                        <div>
                            <input style={inputStyle} id="landSource"type="text" placeholder="Land source" required/>
                        </div>
                        <div>
                            <input style={inputStyle} id="expectedPrice"type="number" placeholder="Expected Price(HKD)" required/>
                        </div>
                        <div>        
                            <textarea style={messageBoxStyle} id="comment" maxlength="100" placeholder="Additional information" required="">
                            </textarea>
                        </div>
                        <Button type="submit" 
                                name="submitMessage" 
                                variant="contained"
                                sx={muiButtonSX}
                                style={buttonStyle}
                                //onClick={()=>dispatch()}
                        >SUBMIT
                        </Button>  
                    </form>
                </div>                
            </div>
        </motion.div>
    )
}
