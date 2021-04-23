import React from "react";
import "./RecentEvents.css";
import CMECard from "./Cards/CMECard/CMECard";
import GSTCard from "./Cards/GSTCard/GSTCard";
import FLRCard from "./Cards/FLRCard/FLRCard";

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