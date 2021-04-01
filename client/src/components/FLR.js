import {formatDateTime} from "../utils/dateTime.js";

function FLR(props){
    return (
        <div>
            <h2>Solar Flare</h2>
            <p>{formatDateTime(props.flr.beginTime)} - {formatDateTime(props.flr.endTime)}</p>
            <p>Peak time: {props.flr.peakTime}</p>
            <p>Class type: {props.flr.classType}</p>
            {/* add symbols and scales for that */}
            <p>Active Region: {props.flr.activeRegionNum}</p>
            <p>Source Location: {props.flr.sourceLocation}</p>
        </div>
    );
}

export default FLR;