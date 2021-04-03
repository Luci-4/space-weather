import fetch from "node-fetch";
import React, {useState, useEffect} from "react";
import NotificationBar from "../NotificationBar";
import CME from "../CME";
import GST from "../GST";
import FLR from "../FLR";
import "./Home.css";
import image from "./xraysun.jpg";
import RecentEvents from "./RecentEvents";
import {fetchData} from "../../utils/data";

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

        // async function fetchData(){
            
        //         for(let arg of Object.keys(args)){
        //             const api_url = `posts/${arg}/`;
        //             const res = await fetch(api_url);
                    
        //             const data = await res.json();
        //             console.log(arg);
        //             console.log(data);
        //             args[arg](data);
        //     }
            
        // }
        
        Object.keys(args).forEach(key => {
            
            args[key](fetchData(key))
        })
        
    }, [])
    if(!GSTData || !CMEData || !FLRData || !NotificationsData) {return <h1>LOADING... </h1>}
    
    return (

        <div className="container">
            {/* <img src={image} alt="idk"/> */}
            <RecentEvents/>
            <span className="main">
                
            </span>
            {/* <span className="sidebar">
                <NotificationBar messages={NotificationsData}/>
            </span>  */}
            
            
        </div>
        
    );
}

export default Home;