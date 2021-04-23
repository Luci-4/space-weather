import React from "react";
import {useState, useEffect} from "react";
import { fetchData } from "../../../../../../utils/data";
import {formatDateTime, finalFormatDateTime} from "../../../../../../utils/dateTime"
import FLRClassesScale from "./Scales/FLRClassesScale";

function FLRCard() {
    const [FLREvent, setFLREvent] = useState(null);

    useEffect(() => {
        (async () => {
            setFLREvent((await (fetchData("flr")))[0])
            
        })();
        
    }, [])

    

    return (
        <div className="flr-card grid-field noselect">
            <h1 className="card-title">Solar Flare</h1><br/>
            <p className="card-time">{finalFormatDateTime(formatDateTime(FLREvent?.beginTime ?? null))} UTC</p><br/>
            <FLRClassesScale currentClass={FLREvent?.class} score={FLREvent?.score}/>
            <p>Source: {FLREvent?.sourceLocation ?? null}</p>
            <ul>
                {FLREvent?.kpIndices?.map((kpIndex, index) =>{
                    return (
                        <li key={index}>
                            <p>{finalFormatDateTime(formatDateTime(kpIndex?.observedTime))}</p>
                            <p>{kpIndex?.kpIndex}</p>
                            <p>{kpIndex?.source}</p>
                        </li>);
                })}
            </ul>
            
        </div>
    );
}

export default FLRCard;