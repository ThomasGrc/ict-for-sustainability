import "../styles/colorelement.sass"

export function ColorElement({title, boldText, cmy, hex, color}) {
    return <div className={"color-element--container"}>
        <div style={{
            background: color,
            width: "100px",
            height: "100px",
        }}>

        </div>
        <div>
            <div className={"title"}>{title}</div>
            <div className={"bold-text"}>{boldText}</div>
            <div className={"cmy-text"}>{cmy}</div>
            <div className={"hex-text"}>{hex}</div>
        </div>
    </div>
}