
import React from "react";
import "./Home.css";

import RecentEvents from "./Recent/Events/RecentEvents";
import NavBar from "../Navbar/Navbar"
import RecentNotifications from "./Recent/Notifications/RecentNotifications";
import PageTitle from "../PageTitle/PageTitle";

function Home() {
    
    return (

        <div className="container">
            <NavBar/>
            <section>
                <div className="banner" data-bg-image="./earth-edge.jpg" ></div>
                <div className="section-content">
                <PageTitle/>
                <RecentEvents/>
                </div>
                
            </section>

            <section className="recent-notifs-section">
                <RecentNotifications/>
            </section>
            
            

        </div>
        
    );
}

export default Home;