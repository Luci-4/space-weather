import { finalFormatDateTime, formatDateTime } from "../../../../utils/dateTime"

function NotifTime({time}){
    return (
        
        <div className="notif-time">{
                (unformatedTime => {
                    return unformatedTime ? finalFormatDateTime(formatDateTime(unformatedTime)).split(", ").join(" ") : ""
                })(time)
            }
        </div>
        
    );
}

function NotifBody({summary}){
    return (
        <p className="notif-body">
            {summary ? `${summary}...` : ""}
        </p>
    );
}
// TODO: add some kind of offline responses 

function RecentNotification(props) {
    return (
        
        <div className="Notification">
            <NotifTime time={props?.message?.issueTime}/>
            <div className="notif-content">
                <h2 className="notif-title">{props?.message?.body?.type}</h2>
                <NotifBody summary={props?.message?.body?.summary?.substring(0, 150)}/>
            </div>
                
            {/* <div className="message-summary">
                <p>{props.message.body.summary}</p>
            </div> */}
        </div>
    );
}

export default RecentNotification;