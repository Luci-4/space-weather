import { useEffect, useState} from "react";
import { getDateTimeValue} from "../../../../utils/dateTime";
import { fetchData } from "../../../../utils/data";
import RecentNotification from "./RecentNotification";
import "./RecentNotifications.css";
function RecentNotifications(){
    const [messages, setMessages] = useState(null);
    useEffect(() => {
        (async () => {
            setMessages((await (fetchData("notifications")))
                ?.sort((a, b) => {
                    return getDateTimeValue(b?.issueTime) - getDateTimeValue(a?.issueTime);
                })
                .filter(message => !message?.body?.type?.includes("Weekly Space Weather Summary Report for"))
            )
            
        })();
    }, [])

    // const notificationList = messages
    
    // .map(message => <li key={message.id}><RecentNotification message={message}/></li>)
    if(!messages) {return <h1>Loading...</h1>}
    return (
        <div className="NotifBar">
            {messages.slice(0, 3).map((message, index) => {
                return <RecentNotification key={index} message={message}/>
            })}
        </div>
    );
}

export default RecentNotifications;