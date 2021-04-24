import React from "react";
import {useState, useEffect} from "react";
import { fetchData } from "../../../../../../utils/data";
import {formatDateTime, finalFormatDateTime} from "../../../../../../utils/dateTime";
import {kpIndices} from "./Scales/KpIndices";
import CardTime from "../CardTime";

function GSTCard() {
    const [GSTEvent, setGSTEvent] = useState(null);

    useEffect(() => {
        (async () => {
            setGSTEvent((await (fetchData("gst")))[0])
            
        })();
        
    }, [])

    
    return (
        <div className="gst-card grid-field noselect">
            <h1 className="card-title">Magnetic Activity</h1><br/>
            <CardTime time={GSTEvent?.startTime ?? null}/>
            <p className="kp-activity">{kpIndices[Math.round(GSTEvent?.maxKpIndex)]}</p>
        </div>
    );
}

export default GSTCard;