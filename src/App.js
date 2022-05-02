import './App.sass';
import React from "react";
import './styles/shared.sass'
import {SendButton, SimpleButton} from "./components/SimpleButton";
import {TextField} from "@mui/material";
import styled from "@emotion/styled";

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
                  <SimpleButton content={"About us"} onClick={() => {}} />
                  <SimpleButton content={"Contact us"} onClick={() => {}} />
              </div>
          </div>
      </div>
      <div id='content-section' className={"content--container"}>
        <div className={"card--type1 card"}>
            <h2>RAISING AWARENESS</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
        <div className={"card--type2 card"}>
          <h2>RAISING AWARENESS</h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className={"card--type3 card"}>
          <h2>Contact</h2>
            <form name="contact" method="POST" className={"form--container"}>
                <input type="hidden" hidden name="form-name" value="contact" />
                <div>
                    <CssTextField id="standard-basic" label="Name" name={"name"} variant="outlined" />
                </div>
                <div>
                    <CssTextField id="standard-basic" type={"email"} label="Email" name={"email"} variant="outlined" />
                </div>
                <div>
                    <CssTextField id="standard-basic" type={"text"} multiline rows={4} name={"message"} label="Message"  variant="outlined" />
                </div>
                <div style={{width: "80px", float: "right", paddingRight: "40px"}}>
                    <SendButton />
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default App;
