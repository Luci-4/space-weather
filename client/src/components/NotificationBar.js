import Notification from "./Notification";

function NotificationBar(props) {
    
    
    const notificationList = props.messages.map(message => <li key={message.id}><Notification message={message}/></li>)

    return (
        <ul>
            {notificationList}
        </ul>
    );
}

export default NotificationBar;