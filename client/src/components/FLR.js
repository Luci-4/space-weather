function FLR(props){
    return (
        <div>
            <h2>Solar Flare</h2>
            <p>{props.flr.beginTime.replace(/T/g, " ").replace(/Z/, " UTC")} - {props.flr.endTime.replace(/T/g, " ").replace(/Z/, " UTC")}</p>
            <p>Peak time: {props.flr.peakTime}</p>
            <p>Class type: {props.flr.classType}</p>
            {/* add symbols and scales for that */}
            <p>Active Region: {props.flr.activeRegionNum}</p>
            <p>Source Location: {props.flr.sourceLocation}</p>
        </div>
    );
}

export default FLR;