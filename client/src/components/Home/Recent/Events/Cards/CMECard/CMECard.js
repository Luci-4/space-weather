import React from "react";
import {useState, useEffect} from "react";
import { fetchData } from "../../../../../../utils/data";
import {formatDateTime, finalFormatDateTime} from "../../../../../../utils/dateTime"

import CMETypeScale from "./Scales/CMETypeScale";
import locationIcon from "./icons/location.png";
import speedIcon from "./icons/speed2.png"

function CMECard() {
    const [CMEEvent, setCMEEvent] = useState(null);
    
    useEffect(() => {
        (async () => {
            setCMEEvent((await (fetchData("cme")))[0])
            
        })();
        
    }, [])

    
    return (
        <div className="cme-card grid-field noselect">
            <h1 className="card-title">Coronal Mass Ejection</h1><br/>
            <p className="card-time">{
                ((e) => {
                    return e ? e + " UTC" : ""
                })(finalFormatDateTime(formatDateTime(CMEEvent?.startTime)))
            }</p>
            <div className="card-tab">
                <img className="card-icon" src={locationIcon} alt="location"></img>
                <p className="latlong">{CMEEvent?.latitude ?? null}, {CMEEvent?.longitude ?? null}</p><br/>
            </div>
            <div className="card-tab">
                <img className="card-icon" src={speedIcon} alt="speed"></img>
                <div>
                    <CMETypeScale type = {CMEEvent?.type}/>
                    <p className="speed-value">{CMEEvent?.speed ?? null} {CMEEvent?.speed ? "km/s" : ""}</p>
                </div>     
            </div>
        </div>
    );
}

export default CMECard;