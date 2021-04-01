import Notification from "./Notification";
import {getDateTimeValue} from "../utils/dateTime.js";

function NotificationBar(props) {
    
    
    const notificationList = props.messages
    .sort((a, b) => {
        return getDateTimeValue(b.issueTime) - getDateTimeValue(a.issueTime);
    })
    .map(message => <li key={message.id}><Notification message={message}/></li>)
    

    return (
        <ul>
            {notificationList}
        </ul>
    );
}

export default NotificationBar;