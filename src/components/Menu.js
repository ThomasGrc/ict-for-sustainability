import "../styles/menu.sass"
import { InstagramLogo } from "./InstagramLogo"

export function Menu() {

    return <>
        <div className="menu--logo">
            Grape<span>.</span>
        </div>
        <div className="menu--instagram">
            INSTAGRAM <InstagramLogo />
        </div>
    </>
}