import React from "react";
import {useState, useEffect} from "react";
import { fetchData } from "../../../../../../utils/data";
import {formatDateTime, finalFormatDateTime} from "../../../../../../utils/dateTime"

import CMETypeScale from "./Scales/CMETypeScale";
import locationIcon from "./icons/location.png";
import speedIcon from "./icons/speed2.png"
import CardTime from "../CardTime";

function LatLong({lat, long}){
    return (

        <div className="card-tab">
            <img className="card-icon" src={locationIcon} alt="location"></img>
            <p className="latlong">{
                lat && long ? `${lat}, ${long}` : ""
                }</p>
        </div>
    );
}
function Speed({speed, type}){
    return (
        <div className="card-tab">
            <img className="card-icon" src={speedIcon} alt="speed"></img>
            <div>
                <CMETypeScale type = {type}/>
                <p className="speed-value">{speed ? `${speed} km/s` : ""}</p>
            </div>     
        </div>
    );
}


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
            <CardTime time={CMEEvent?.startTime || null}/>
            <LatLong lat={CMEEvent?.latitude ?? null} long={CMEEvent?.longitude ?? null}/>
            <Speed speed={CMEEvent?.speed ?? null} type={CMEEvent?.type}/>
        </div>
    );
}

export default CMECard;