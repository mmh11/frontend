import React, {useState} from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Logo from "../images/metaphorLab.png"

export default function LoginDialog(){
    const muiButtonSX = {
        "&:hover": { 
            backgroundColor: "transparent",
            textDecoration: "underline"
        }
    }
    const textButtonStyleClicked = {
        maxWidth:"450px",
        marginLeft:"3VW",
        color: "#f30987",
        fontSize: "0.9VW",
        marginTop:"0.5VH"
    }
    const textfieldSXStyle = {
        "& .MuiInputBase-root": {
            color: "#cccccc"
        },
        " .MuiInputLabel-root": {
            color: "#cccccc"
        },
        "& label.Mui-focused": {
            color: "#f30987"
        },
        '& .MuiInput-underline:before': { 
            borderBottomColor: 'black' 
        },
        '& .MuiInput-underline:after': { 
            borderBottomColor: 'black' 
        },
    }
    const dialogText = {
        alignSelf: "center",
        color: "#333333",
        fontSize: "1VW",
        paddingBottom: 0,
        fontWeight: "bold"
    }
    const textButtonStyleClicked2 = {
        maxWidth:"400px",
        color: "#f30987",
        fontSize: "0.8VW"
    }
    const textButtonStyleCancel = {
        maxWidth:"400px",
        color: "#cccccc",
        fontSize: "0.8VW"
    }
    const imageStyle ={
        width: "3VW", 
        height: "3VW",
    }
    const titleDivStyle = {
        display: "flex",
        justifyContent: "center"
    }

    // dialog control
    const [open, setOpen] = useState(false)
    const handleClicked = () => {
        setOpen(!open)
    }

    // data
    const [registerInput, setRegisterInput] = useState({
        email: '',
        password: ''
    })
    const handleRegister = (event) => {
        event.preventDefault()
        console.log(registerInput)
    }
    const handleChangeReg = (event) => {
        const {name, value} = event.target
        setRegisterInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }
    
    return(
        <div>
            <Button 
                sx={muiButtonSX} 
                disableRipple 
                style={textButtonStyleClicked}
                onClick={handleClicked}>
                <p>Login</p>
            </Button>
            <Dialog open={open} onClose={handleClicked}>
                <DialogContent>
                    <div style={titleDivStyle}>
                        <img src={Logo} alt="" style={imageStyle}></img>
                    </div>
                    <p style={dialogText}>
                        Have an account? Login here!
                    </p>
                    <TextField
                        sx={textfieldSXStyle}
                        id="outlined-basic" 
                        label="email address"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        sx={textfieldSXStyle}
                        id="outlined-basic" 
                        label="Password"
                        variant="standard"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button sx={muiButtonSX} disableRipple style={textButtonStyleClicked2} onClick={handleClicked}> 
                        Login
                    </Button>
                </DialogActions>
                <DialogContent>
                    <p style={dialogText}>
                        Or join us here!
                    </p>
                    <TextField
                        sx={textfieldSXStyle}
                        id="outlined-basic" 
                        label="email address"
                        variant="standard"
                        fullWidth
                        name="email"
                        value={registerInput.email}
                        onChange={handleChangeReg}
                    />
                    <TextField
                        sx={textfieldSXStyle}
                        id="outlined-basic" 
                        label="Password"
                        variant="standard"
                        fullWidth
                        name="password"
                        value={registerInput.password}
                        onChange={handleChangeReg}
                    />
                </DialogContent>
                <DialogActions>
                    <Button 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={textButtonStyleCancel} 
                        onClick={handleClicked}> 
                        Cancel
                    </Button>
                    <Button 
                        sx={muiButtonSX} 
                        disableRipple 
                        style={textButtonStyleClicked2} 
                        onClick={handleRegister}> 
                        Register
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}