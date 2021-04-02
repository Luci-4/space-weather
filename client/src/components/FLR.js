import {formatDateTime, abbreviateSecondDateTimeInInterval} from "../utils/dateTime.js";
import Scale from "./Scale";
import "./Component.css"

function FLR(props){
    let formatedBeginDateTime = formatDateTime(props.flr.beginTime);
    let formatedEndDateTime = formatDateTime(props.flr.endTime);
    const classes = {
        A: 0,
        B: 1,
        C: 2,
        M: 3,
        X: 4
    }
    return (
        <div className="component flr">
            <span className="event-header">
                <h2 className="title">Solar Flare</h2>
                <p className="date">{formatedBeginDateTime} - {abbreviateSecondDateTimeInInterval(formatedBeginDateTime, formatedEndDateTime)} UTC</p>
            </span>
            
            <p>Peak time: {props.flr.peakTime}</p>
            <p>Strength: {props.flr.classType}</p>
            
            <Scale points={Object.keys(classes)}/>
            {/* add symbols and scales for that ABCMX (1.0 -9.0)*/}
            <p>Active Region: {props.flr.activeRegionNum}</p>
            <p>Source Location: {props.flr.sourceLocation}</p>
        </div>
    );
}

export default FLR;