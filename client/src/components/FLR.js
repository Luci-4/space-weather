import {formatDateTime, abbreviateSecondDateTimeInInterval} from "../utils/dateTime.js";

function FLR(props){
    let formatedBeginDateTime = formatDateTime(props.flr.beginTime);
    let formatedEndDateTime = formatDateTime(props.flr.endTime);
    return (
        <div>
            <h2>Solar Flare</h2>
            <p>{formatedBeginDateTime} - {abbreviateSecondDateTimeInInterval(formatedBeginDateTime, formatedEndDateTime)} UTC</p>
            <p>Peak time: {props.flr.peakTime}</p>
            <p>Class type: {props.flr.classType}</p>
            {/* add symbols and scales for that */}
            <p>Active Region: {props.flr.activeRegionNum}</p>
            <p>Source Location: {props.flr.sourceLocation}</p>
        </div>
    );
}

export default FLR;