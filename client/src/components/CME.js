function CME(props) {
    
    return (
        <div>
            <h2>Coronal Mass Ejection</h2>
            <p>{props.cme.startTime.replace(/T/g, " ").replace(/Z/, " UTC")}</p>
            <p>Position: [{props.cme.latitude}, {props.cme.longitude}]</p>
            <p>Half Angle: {props.cme.halfAngle}</p>
            <p>Speed: {props.cme.speed} km/s (type {props.cme.type})</p>
            <p>Earth glancing blow: {props.cme.isEarthGB ? "yes": "no"}</p>
            <p>{props.cme.note}</p>
            <p>{props.cme.analysisNote}</p>
            
        </div>
        );
}

export default CME;