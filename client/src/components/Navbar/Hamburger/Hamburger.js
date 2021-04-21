import React from "react";
import "./Hamburger.css"
function Hamburger() {
    
    return (
        <button className="mobile-menu-toggle" onClick={
            () => {
                document.getElementById("hamburger-icon").classList.toggle("open");
                const mobileNavMenu = document.getElementById("mobile-nav-menu");
                mobileNavMenu.classList.toggle("active");
                if(mobileNavMenu.classList.contains("active")){
                    mobileNavMenu.style.height = "200px";
                }
                else{
                    mobileNavMenu.style.height = "0";
                }
            }
        }>
            <div id="hamburger-icon" className="hamburger-icon rotatable">
                
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
    );
}

export default Hamburger;