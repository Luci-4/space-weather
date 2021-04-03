import React, {useState, useEffect} from "react";
import "./RecentEvents.css";
import NotificationBar from "../NotificationBar";
import { fetchData } from "../../utils/data";
function RecentEvents() {
    const [NotificationsData, setNotificationsData] = useState(null);
    useEffect(() => {
        (async () => {
            setNotificationsData(await (fetchData("notifications")))
        })()
        
    }, [])
    if(!NotificationsData){return <h1>Loading...</h1> }
    
    return (
        <div className="RecentEvents">
            <div className="recent-events-container">
            <NotificationBar messages={NotificationsData.slice(0, 7)}/>
            </div>

        </div>
    )
}

export default RecentEvents;