import Notification from "./Notification";
import {getDateTimeValue} from "../utils/dateTime.js";
import "./NotificationBar.css";

function NotificationBar(props) {
    
    const notificationList = props.messages
    .sort((a, b) => {
        return getDateTimeValue(b.issueTime) - getDateTimeValue(a.issueTime);
    })
    .map(message => <li key={message.id}><Notification message={message}/></li>)
    

    return (
        <div className="notification-bar">
             <ul>
                {notificationList}
            </ul>
        </div>
       
    );
}

export default NotificationBar;