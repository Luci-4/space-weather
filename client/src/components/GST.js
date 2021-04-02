import {formatDateTime} from "../utils/dateTime.js";
import "./Component.css";

function GST(props) {
    const kpIndicesItems = props.gst.kpIndices.map(kpIndex => {
        return <li key={kpIndex.id}>
                        <p>Source: {props.gst.kpIndices[0].source}</p>
                        <p>Observed time: {formatDateTime(props.gst.kpIndices[0].observedTime)} UTC</p>
                        <p>KpIndex: {props.gst.kpIndices[0].kpIndex}</p>
                </li> 
    })
    
    return (
        <div className="component gst">
            <span className="event-header">
                <h2 className="title">Geomagnetic Storm</h2>
                <p className="date">{formatDateTime(props.gst.startTime)} UTC</p>
            </span>
            
            <ul>
                {kpIndicesItems}
            </ul>
            
            
        </div>
        
    );
}

export default GST;