import './App.sass';
import React, {useState} from "react";
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
import {ColorElement} from "./components/ColorElement";
import {Headline} from "./components/Headline";


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
    const [sent, setSent] = useState(false);

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
        }
        ).catch((error) => console.error(error))
        setSent(true)
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
                        <SimpleButton content={"Our project"} onClick={() => {
                            const el = document.getElementById("content-section")
                            el.scrollIntoView()
                        }} />
                        <SimpleButton content={"Contact us"} onClick={() => {
                            const el = document.getElementById("contact")
                            el.scrollIntoView()
                        }} />
                    </div>
                </div>
            </div>
            <div id='content-section' className={"content--container"}>
                <div className={"card"}>
                    <Headline content={"Our project"} />
                    <p className={"text-expand"}>
                        Population growth, climate change, energy needs and a high standard of living; it seems like we are exhausting our earth. The United Nations committed to 17 sustainable development goals but a lot needs to be done to get on track in achieving them. Innovation, recycling, sustainable behavior seems to be the only answer to ensure a livable future for next generations.</p>
                    <Headline left={true} content={"How we do it"} className={"text-right"}/>
                    <p className={"text-expand"}>By publishing a post every week on Instagram, Grape has the goal to help people near the Hague, Netherlands, work towards these sustainable development goals by giving more exposure to sustainable organizations. We hope that communities give a try to these organizations and change their habits for more sustainable ones.</p>
                </div>
                    <div className={"container d-flex align-center direction-column"}>
                        <Headline center={true} content={"GOALS"} />
                        <p className={"text-center"}>As defined by the United Nations, there are a total of 17 sustainable development goals. These are a call for action to the inhabitant of our earth. These goals provide a shared blueprint for peace and prosperity for people and the planet, now and into the future.</p>
                        <div className={"goals--container"}>
                            <img src={Goal1} alt={""}/>
                            <img src={Goal2} alt={""}/>
                            <img src={Goal3} alt={""}/>
                            <img src={Goal4} alt={""}/>
                            <img src={Goal5} alt={""}/>
                            <img src={Goal6} alt={""}/>
                            <img src={Goal7} alt={""}/>
                            <img src={Goal8} alt={""}/>
                            <img src={Goal9} alt={""}/>
                            <img src={Goal10}  alt={""}/>
                            <img src={Goal11} alt={""}/>
                            <img src={Goal12} alt={""}/>
                            <img src={Goal13} alt={""}/>
                            <img src={Goal14} alt={""}/>
                            <img src={Goal15} alt={""}/>
                            <img src={Goal16} alt={""}/>
                            <img src={Goal17} alt={""}/>
                        </div>
                        <SimpleButton className={"cursor-extern"}  content={"More info"} onClick={() => window.open("https://www.un.org/sustainabledevelopment/sustainable-development-goals/")}/>
                    </div>
                <div className={"card"}>
                    <Headline content={"Our choice"}/>
                    <p className={"text-expand"}>As of now, we are exclusively focussing organization near the Hague, in the Netherlands. We select organizations that work towards one or more sustainable development goal and we try to promote as many of them as possible. But we are definitely missing quite a few of them and you think there is one that we are missing out on, do not hesitate to let us know via the contact form bellow!</p>
                </div>
                <div className={"container"}>
                    <Headline content={"Our colors"}/>
                    <div className={"ourcolor--container"}>
                        <ColorElement color={"#E51F40"} hex={"#E51F40"} cmy={"C 0 | M 96 | Y 66 | K 0"} title={"RED FOR"} boldText={"GROCERIES"}/>
                        <ColorElement color={"#447259"} hex={"#447259"} cmy={"C 0 | M 96 | Y 66 | K 0"} title={"GREEN FOR"} boldText={"RESTAURANTS"}/>
                        <ColorElement color={"#323759"} hex={"#323759"} cmy={"C 0 | M 96 | Y 66 | K 0"} title={"BLUE FOR"} boldText={"FASHION"}/>
                    </div>
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
                            <SendButton sent={sent} />
                        </div>
                    </form>
                </div>

             </div>
        </div>
    );
}

export default App;
