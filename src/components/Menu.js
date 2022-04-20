import "../styles/menu.sass"
import { InstagramLogo } from "./InstagramLogo"

export function Menu() {

    return <>
        <div className="menu--logo">
            Grape<span>.</span>
        </div>
        <div onClick={() => window.open("https://instagram.com/")} className="menu--instagram">
            INSTAGRAM <InstagramLogo />
        </div>
    </>
}