import "../styles/headline.sass"

export function Headline({content, className, left, center}) {
    return <div className={className}>
        <h2 className={`headline ${left ? "left" : ""} ${center ? "center" : ""}`}>
            <span>
                {content}
            </span>
        </h2>
    </div>
}
