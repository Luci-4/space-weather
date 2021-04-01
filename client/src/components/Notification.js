const { useEffect, useState } = require("react");

function Notification(props) {
    const [expansion, setExpansion] = useState(false);
    useEffect(() => {

    })

    return (
        <div className="notification">
            <div className="message-title">
                <h2>{props.message.body.type}</h2>
                
            </div>
            <div className="message-date">
                <p>{props.message.issueTime}</p>
            </div>
            <div className="message-summary">
                <p>{props.message.body.summary}</p>
            </div>
        </div>
    )
}

export default Notification;