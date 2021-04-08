
import React from "react";
import "./Home.css";

import RecentEvents from "./Recent/RecentEvents";

function Home() {
    
    return (

        <div className="container">
            <div className="banner" data-bg-image="./xraysun.jpg" >

			</div>
            <RecentEvents/>

        </div>
        
    );
}

export default Home;