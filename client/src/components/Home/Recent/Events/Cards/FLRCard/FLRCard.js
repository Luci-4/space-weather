import React from "react";
import {useState, useEffect} from "react";
import { fetchData } from "../../../../../../utils/data";
import FLRClassesScale from "./Scales/FLRClassesScale";
import CardTime from "../CardTime";

function FLRCard() {
    const [FLREvent, setFLREvent] = useState(null);

    useEffect(() => {
        (async () => {
            const dataArr = (await (fetchData("flr")))
            console.log(dataArr);
            setFLREvent(dataArr?.[0])
            
        })();
        
    }, [])

    

    return (
        <div className="flr-card grid-field noselect">
            <h1 className="card-title">Solar Flare</h1><br/>
            <CardTime time={FLREvent?.beginTime ?? null}/>
            <FLRClassesScale currentClass={FLREvent?.class} score={FLREvent?.score}/>
            <p className="flr-source">{(source => source ? `Source: ${source}` : "")(FLREvent?.sourceLocation)}</p>
            
        </div>
    );
}

export default FLRCard;