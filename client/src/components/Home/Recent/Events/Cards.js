import { fetchData } from "../../../../utils/data";
import {formatDateTime, finalFormatDateTime} from "../../../../utils/dateTime"
import {useState, useEffect} from "react";
import locationIcon from './location.png';
import CMETypeScale from "./Scales/CMETypeScale";
import FLRClassesScale from "./Scales/FLRClassesScale";

function CMECard() {
    const [CMEEvent, setCMEEvent] = useState(null);
    
    useEffect(() => {
        (async () => {
            setCMEEvent((await (fetchData("cme")))[0])
            
        })();
        
    }, [])

    

    return (
        <div className="cme-card grid-field">
            <h1 className="card-title">Coronal Mass Ejection</h1><br/>
            <p className="card-time">{
                ((e) => {
                    return e ? e + " UTC" : ""
                })(finalFormatDateTime(formatDateTime(CMEEvent?.startTime)))
            }</p>
            <div className="card-tab">
                <img className="card-icon" src={locationIcon}></img>
                <p className="latlong">{CMEEvent?.latitude ?? null}, {CMEEvent?.longitude ?? null}</p><br/>
            </div>
            
            <CMETypeScale type = {CMEEvent?.type}/>
            
            <p>{CMEEvent?.speed ?? null} {CMEEvent?.speed ? "km/s" : ""}</p>
                        

        </div>
    );
}

function GSTCard() {
    const [GSTEvent, setGSTEvent] = useState(null);

    useEffect(() => {
        (async () => {
            setGSTEvent((await (fetchData("gst")))[0])
            
        })();
        
    }, [])

    
    return (
        <div className="gst-card grid-field">
            <h1 className="card-title">Magnetic Geostorm</h1><br/>
            <p className="card-time">{finalFormatDateTime(formatDateTime(GSTEvent?.startTime ?? null))} UTC</p>
                        
        </div>
    );
}

function FLRCard() {
    const [FLREvent, setFLREvent] = useState(null);

    useEffect(() => {
        (async () => {
            setFLREvent((await (fetchData("flr")))[0])
            
        })();
        
    }, [])

    

    return (
        <div className="flr-card grid-field">
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

export {CMECard, GSTCard, FLRCard};