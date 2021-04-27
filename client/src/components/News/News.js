import React from "react";
import NavBar from "../Navbar/Navbar";
import NewsMessages from "./NewsMessages/NewsMessages";
import "./News.css"

function News() {
    return (
        <div className="container">
            <NavBar/>
            <div className="news-messages-container">
                <NewsMessages/>
            </div>
            
        </div>
    );
}

export default News;