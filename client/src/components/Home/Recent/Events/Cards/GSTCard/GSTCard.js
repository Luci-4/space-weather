import React from "react";
import {useState, useEffect} from "react";
import { fetchData } from "../../../../../../utils/data";
import {formatDateTime, finalFormatDateTime} from "../../../../../../utils/dateTime"

function GSTCard() {
    const [GSTEvent, setGSTEvent] = useState(null);

    useEffect(() => {
        (async () => {
            setGSTEvent((await (fetchData("gst")))[0])
            
        })();
        
    }, [])

    
    return (
        <div className="gst-card grid-field noselect">
            <h1 className="card-title">Magnetic Geostorm</h1><br/>
            <p className="card-time">{finalFormatDateTime(formatDateTime(GSTEvent?.startTime ?? null))} UTC</p>
                        
        </div>
    );
}

export default GSTCard;