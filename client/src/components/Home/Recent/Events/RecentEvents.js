import React from "react";
import "./RecentEvents.css";
import {CMECard, GSTCard, FLRCard} from "./Cards";

function RecentEvents() {
    
    return (
        <div className="RecentEvents">
            <h2>
                Recent Events
            </h2>
            <div className="recent-events-container">
                <div className="grid-container">
                    <CMECard/>
                    <GSTCard/>
                    <FLRCard/>
                </div>
            </div>

        </div>
    )
}

export default RecentEvents;