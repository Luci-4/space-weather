import React from "react";
import {useState, useEffect} from "react";
import { fetchData } from "../../../../../../utils/data";
import {formatDateTime, finalFormatDateTime} from "../../../../../../utils/dateTime";
import {kpIndices} from "./Scales/KpIndices";

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
            <p className="card-time">{finalFormatDateTime(formatDateTime(GSTEvent?.startTime ?? null))} UTC</p>
            <p className="kp-activity">{kpIndices[Math.round(GSTEvent?.maxKpIndex)]}</p>
        </div>
    );
}

export default GSTCard;