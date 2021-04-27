import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/data";
import "./NewsMessages.css"

function NewsMessages(){
    const [NewsMessages, setNewsMessages] = useState(null);

    useEffect(() => {
        (async () => {
            setNewsMessages((await (fetchData("notifications"))))
            
        })();
        
    }, [])
    return (
        <div className="NewsMessages">
            {NewsMessages?.map((newsMessage, index) => {
                return <div key={index}>{newsMessage?.type}</div>
                })}
        </div>
    );
}

export default NewsMessages;