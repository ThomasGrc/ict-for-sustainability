import './App.sass';
import React from "react";
import './styles/shared.sass'
import { SendButton, SimpleButton } from "./components/SimpleButton";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

import Goal1 from "./goals/E-WEB-Goal-01.png"
import Goal2 from "./goals/E-WEB-Goal-02.png"
import Goal3 from "./goals/E-WEB-Goal-03.png"
import Goal4 from "./goals/E-WEB-Goal-04.png"
import Goal5 from "./goals/E-WEB-Goal-05.png"
import Goal6 from "./goals/E-WEB-Goal-06.png"
import Goal7 from "./goals/E-WEB-Goal-07.png"
import Goal8 from "./goals/E-WEB-Goal-08.png"
import Goal9 from "./goals/E-WEB-Goal-09.png"
import Goal10 from "./goals/E-WEB-Goal-10.png"
import Goal11 from "./goals/E-WEB-Goal-11.png"
import Goal12 from "./goals/E-WEB-Goal-12.png"
import Goal13 from "./goals/E-WEB-Goal-13.png"
import Goal14 from "./goals/E-WEB-Goal-14.png"
import Goal15 from "./goals/E-WEB-Goal-15.png"
import Goal16 from "./goals/E-WEB-Goal-16.png"
import Goal17 from "./goals/E-WEB-Goal-17.png"


const CssTextField = styled(TextField)({
    '& .MuiFormLabel-root': {
        color: "#4E8A4A",
    },
    '& .MuiInputBase-root': {
        marginBottom: '30px'
    },
    '& .MuiInputBase-input': {
        color: "#4E8A4A",
    },
    '& label.Mui-focused': {
        color: '#4E8A4A',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#4E8A4A',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#4E8A4A',
        },
        '&:hover fieldset': {
            borderColor: '#4E8A4A',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4E8A4A',
        },
    },
});

function App() {
    const onFormSubmit = async (evt) => {
        evt.preventDefault();
        await fetch("/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                "form-name": evt.target["form-name"].value,
                "name": evt.target["name"].value,
                "email": evt.target["email"].value,
                "message": evt.target["message"].value
            })
        }).catch((error) => console.error(error))
    }
    return (
        <div className={"home--container"}>
            <div id='main-section' className='main--section'>
                <div className={"main--content"}>
                    <h3>
                        Welcome to grape
                    </h3>
                    <h1>
                        An ICT for sustainability project run by students
                    </h1>
                    <div>
                        <SimpleButton content={"About us"} onClick={() => { }} />
                        <SimpleButton className={"cursor-extern"} content={"Contact us"} onClick={() => {
                            const el = document.getElementById("contact")
                            el.scrollIntoView()
                        }} />
                    </div>
                </div>
            </div>
            <div id='content-section' className={"content--container"}>
                <div className={"card"}>
                    <h2>RAISING AWARENESS</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                    <div className={"card d-flex align-center direction-column"}>
                        <h2>GOALS</h2>
                        <div className={"goals--container"}>
                            <img src={Goal1}/>
                            <img src={Goal2}/>
                            <img src={Goal3}/>
                            <img src={Goal4}/>
                            <img src={Goal5}/>
                            <img src={Goal6}/>
                            <img src={Goal7}/>
                            <img src={Goal8}/>
                            <img src={Goal9}/>
                            <img src={Goal10} />
                            <img src={Goal11}/>
                            <img src={Goal12}/>
                            <img src={Goal13}/>
                            <img src={Goal14}/>
                            <img src={Goal15}/>
                            <img src={Goal16}/>
                            <img src={Goal17}/>
                        </div>
                        <SimpleButton content={"More info"} onClick={() => window.open("https://www.un.org/sustainabledevelopment/sustainable-development-goals/")}></SimpleButton>
                    </div>
                <div className={"card"}>
                    <h2>RAISING AWARENESS</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div id={"contact"} className={"card"}>
                    <h2>Contact</h2>
                    <form name="contact" onSubmit={onFormSubmit} className={"form--container"}>
                        <input type="hidden" hidden name="form-name" value="contact" />
                        <div>
                            <CssTextField required id="standard-basic" label="Name" name={"name"} variant="outlined" />
                        </div>
                        <div>
                            <CssTextField required id="standard-basic" type={"email"} label="Email" name={"email"} variant="outlined" />
                        </div>
                        <div>
                            <CssTextField required id="standard-basic" type={"text"} multiline rows={4} name={"message"} label="Message" variant="outlined" />
                        </div>
                        <div style={{ width: "80px", float: "right", paddingRight: "40px" }}>
                            <SendButton />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
