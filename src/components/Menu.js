import "../styles/menu.sass"
import { InstagramLogo } from "./InstagramLogo"
import {GrapeLogo} from "./GrapeLogo";

export function Menu() {

    return <>
        <div className="menu--logo">
            <GrapeLogo /><span>Grape</span>
        </div>
        <div onClick={() => window.open("https://www.instagram.com/grapethehague/")} className="menu--instagram">
           <span>INSTAGRAM</span><InstagramLogo />
        </div>
    </>
}