import "./NewsMessage.css"
const darkcolors = [
    "#ba7300",
    "#ba1600",
    "#00ba57",
    "#8fba00",
    "#ba0032",
    "#8fba00",
    "#32ba00",
    "#00ba57"
]
const lightcolors = [
    "#ff0080",
    "#8000ff",
    "#80ff00",
    "#ffbf00",
    "#ff8000",
    "#00ff00",
]
function getTypeColor(type){
    const array = lightcolors
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement
    
    switch(type){
        case "CME":
            return "#ba0032"
        case "Report":
            return "#8fba00"
        case "RBE":
            return "#32ba00"
        case "IPS":
            return "#00ba57"
        default:
            return "black"

    }
}

function getLink(text){
    const indexOfHttps = text.indexOf("https://")
    console.log(indexOfHttps)
    let url = ""
    if (indexOfHttps !== -1){
        for (let i = indexOfHttps; i<=text.length; i++){
            const char = text[i]
            console.log(url) 
            console.log(char)
            if (char === " " || char === "\n"){
                return url
            }
            url += char

        }

    }
    return null
}
function NewsMessage(props){
    console.log(props)
    return (
        <div 
            className="NewsMessage" 
            // style={{
            //     borderLeft: "10px",
            //     borderLeftStyle: "solid", 
            //     borderLeftColor: getTypeColor(props.type),
            // }}
            >
            <div 
                className="color-bar" 
                style={{
                    background: getTypeColor(props.type)
                }}>

            </div>
            <div className="message"
                style={{    background: props.indexIsEven ? "rgba(0, 18, 109, 0.5)" : "rgba(0, 18, 109, 0.65)" }}
            >

                <div className="type-bar" >
                    <span>{props?.body?.type}</span>
                    <span>{props?.type}</span>
                </div>
                <img src={getLink(props?.body?.summary)}></img>
                <div className="news-message-content" style={{whiteSpace: "pre-wrap"}}>
                    {props?.body?.summary}
                </div>
            </div>
        </div>
    )
}
export default NewsMessage