
import React from "react";
import "./Home.css";

import RecentEvents from "./Recent/Events/RecentEvents";
import NavBar from "../Navbar/Navbar"
import RecentNotifications from "./Recent/Notifications/RecentNotifications";

function Home() {
    
    return (

        <div className="container">
            <NavBar/>
            <section>
                <div className="banner" data-bg-image="./earth-edge.jpg" ></div>
                <div className="section-content">
                <h1 className="page-title">
                    <span class="first-title-letter title-letter">S</span>
                    <span class="title-letter">P</span>
                    <span class="title-letter">A</span>
                    <span class="title-letter">C</span>
                    <span class="title-letter">E</span>
                    <span> </span>
                    <span class="first-title-letter title-letter">W</span>
                    <span class="title-letter">E</span>
                    <span class="title-letter">A</span>
                    <span class="title-letter">T</span>
                    <span class="title-letter">H</span>
                    <span class="title-letter">E</span>
                    <span class="title-letter">R</span>
                   


                    </h1>
                <RecentEvents/>
                </div>
                
            </section>

            <section class="recent-notifs-section">
                <RecentNotifications/>
            </section>
            
            

        </div>
        
    );
}

export default Home;