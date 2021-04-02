import {formatDateTime} from "../utils/dateTime";
import "./CME.css";
import "./Component.css";

function CME(props) {
    
    return (
        <div className="component cme">
            <span className="event-header">
                
                <h2 className="title">Coronal Mass Ejection</h2>
            
            
                <p className="date">{formatDateTime(props.cme.startTime)} UTC</p>
                
                
            </span>
            
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