import { finalFormatDateTime, formatDateTime } from "../../../../utils/dateTime"

function RecentNotification(props) {
    return (
        <div className="Notification">
            <div className="notif-time">
                <p>{finalFormatDateTime(formatDateTime(props.message.issueTime))}</p>
            </div>
            <div className="notif-content">
                <h2 className="notif-title">{props.message.body.type}</h2>
                <p className="notif-body">{props.message.body.summary.substring(0, 150)}...</p>
            </div>
                
            {/* <div className="message-summary">
                <p>{props.message.body.summary}</p>
            </div> */}
        </div>
    );
}

export default RecentNotification;