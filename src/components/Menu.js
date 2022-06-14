import "../styles/menu.sass"
import { InstagramLogo } from "./InstagramLogo"

export function Menu() {

    return <>
        <div className="menu--logo">
            Grape<span>.</span>
        </div>
        <div onClick={() => window.open("https://www.instagram.com/grapethehague/")} className="menu--instagram">
           <span>INSTAGRAM</span><InstagramLogo />
        </div>
    </>
}