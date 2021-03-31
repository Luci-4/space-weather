const { useEffect, useState } = require("react");

function Notification(props) {
    const [expansion, setExpansion] = useState(false);
    useEffect(() => {

    })

    return (
        <div className="notification">
            <div className="message-title">
                <h2>{props.message.messageBody.type}</h2>
                
            </div>
            <div className="message-date">
                <p>{props.message.messageIssueTime}</p>
            </div>
            <div className="message-summary">
                <p>{props.message.messageBody.summary}</p>
            </div>
        </div>
    )
}

export default Notification;