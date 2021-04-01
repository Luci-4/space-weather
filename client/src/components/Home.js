import fetch from "node-fetch";
import React, {useState, useEffect} from "react";
import NotificationBar from "./NotificationBar";
import CME from "./CME";
import GST from "./GST";
import FLR from "./FLR";

function Home() {
    const [CMEData, setCMEData] = useState(null);
    const [GSTData, setGSTData] = useState(null);
    const [FLRData, setFLRData] = useState(null);
    const [NotificationsData, setNotificationsData] = useState(null);

    useEffect(() => {
        
        const args = {
            "cme": setCMEData, 
            "gst": setGSTData, 
            "flr": setFLRData, 
            "notifications": setNotificationsData
        }

        async function fetchData(){
            
                for(let arg of Object.keys(args)){
                    const api_url = `posts/${arg}/`;
                    const res = await fetch(api_url);
                    
                    const data = await res.json();
                    console.log(arg);
                    console.log(data);
                    args[arg](data);
            }
            
        }
        fetchData();
    }, [])
    if(!GSTData || !CMEData || !FLRData || !NotificationsData) {return <h1>LOADING... </h1>}
    console.log("constructing...")
    
    // console.log("cmedata:", CMEData);
    // console.log("gstdata: ", GSTData);
    // console.log("flrdata:", FLRData);
    // console.log("notifdata: ", NotificationsData);
    return (
        <div>
            <h1>Hello</h1>
            <CME cme={CMEData}/>
            <GST gst={GSTData}/>
            <FLR flr={FLRData}/>
            <NotificationBar messages={NotificationsData}/>
        </div>
    );
}

export default Home;