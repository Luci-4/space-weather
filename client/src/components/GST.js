function GST(props) {
    const kpIndicesItems = props.gst.kpIndices.map(kpIndex => {
        return <li key={kpIndex.id}>
                        <p>Source: {props.gst.kpIndices[0].source}</p>
                        <p>Observed time: {props.gst.kpIndices[0].observedTime.replace(/T/g, " ").replace(/Z/, " UTC")}</p>
                        <p>KpIndex: {props.gst.kpIndices[0].kpIndex}</p>
                </li> 
    })
    
    return (
        <div>
            <h2>Geomagnetic Storm</h2>
            <p>Start time: {props.gst.startTime.replace(/T/g, " ").replace(/Z/, " UTC")}</p>
            <ul>
                {kpIndicesItems}
            </ul>
            
            
        </div>
        
    );
}

export default GST;