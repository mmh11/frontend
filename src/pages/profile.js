import React,{useState} from 'react'
import { motion } from "framer-motion";
import { Button } from '@mui/material';
import icon from "../images/profile.png";
import LandTab from "../components/purchasedLandTab.js";
import OptionTab from "../components/purchasedOptionTab.js";

export default function Profile(){
    const[activeTab, setActiveTab]=useState("landTab");
    const handleLandTab =()=>{console.log("land clicked");setActiveTab("landTab")};    
    const handleOptionTab = ()=>{
        console.log("option clicked");
        setActiveTab("optionTab")};
    const containerStyle={
        margin:"5rem",
        display:"flex",
        gap:"3rem"
    }
    const sidebarStyle={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"4rem",
        height:"60vh",
        borderRight:"solid 1px #f30987"
    }
    const iconStyle={
        width:"300px",
        height:"300px",
        borderRadius:"50%",
        border:"solid 2px #f30987",
        marginBottom:"2rem"
    }
    const uidTitleStyle = {
        color:"#f30987",
        fontWeight:"700", 
        margin: "1rem" 
    }
    const container2Style = {
        padding:"0.5rem 2rem"
    }
    const infoStyle={
        marginBottom:"3rem",
        borderRadius:"20px",
        width:"60vw"
    }
    const infoTitleStyle={
        fontSize: "40px",
        fontWeight:"400",
        borderBottom:"solid 5px #f30987"
    }
    const emailContainerStyle={
        display:"flex",
        gap:"2rem",
        alignItems:"center",
        marginTop:"0.5rem",
        fontSize:"20px",
    }
    const tabListStyle={
        display:"flex",
        gap:"4rem",
        fontSize:"20px",
        margin:"2rem 0rem"
    }
    const activeStyle = {
        padding:"10px 20px",
        borderRadius:"10px",
        color:"white",
        backgroundColor: "#f30987",
        cursor:"pointer",
    }
    const tabStyle = {
        padding:"10px 20px",
        cursor:"pointer",
    }
    const itemContainerStyle={
        display:"flex",
        gap:"1rem"
    }
    return(
    <motion.div>
        <div class="container" style={containerStyle}>
            <div class="sidebar" style={sidebarStyle}>
                <div class="icon">
                    <img src={icon} alt="userIcon" style={iconStyle}></img>
                </div>
                <div class="userID">
                    <span style={uidTitleStyle}>UID</span>
                    <span class="id">000001</span>
                </div>
            </div>
            <div class="mainContext"  style={container2Style}>
                <div class="info" style={infoStyle}>
                    <span style={infoTitleStyle}>Information</span>
                    <div class="userEmail" style={emailContainerStyle}>
                        <h4 style={{fontWeight:"500"}}>
                            Email
                        </h4>
                        <p class="email">someuser@email.com</p>
                    </div>
                </div>
                <div class="purchased_Item">
                    <h1 style={{fontWeight:"400"}}> Purchased Items</h1>
                    <hr></hr>
                    <div class="itemCat" style={tabListStyle}>
                        <div style={activeTab ==="landTab" ? activeStyle:tabStyle} 
                            class={activeTab ==="landTab" ? "active" : ""} 
                            onClick={handleLandTab}>
                            Lands
                        </div>
                        <div style={activeTab ==="optionTab" ? activeStyle:tabStyle}
                            class={activeTab ==="optionTab" ? "active" : ""} 
                            onClick={handleOptionTab}>
                            Option Items
                        </div>
                    </div>
                    <div class="items" style={itemContainerStyle}>
                        {activeTab==="landTab"?<LandTab/>:<OptionTab/>}
                    </div>
                </div>
            </div>
            
        </div>

    </motion.div>
    )
}