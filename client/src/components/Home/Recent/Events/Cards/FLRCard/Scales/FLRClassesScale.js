import React from "react";
import {FLRClasses, calculateFLRPowerFullScore} from "./FLRClasses";
import strengthIcon from "./strength.png";
import "./FLRClassesScale.css"

function FLRClassesScale({currentClass, score}) {
    
    const absoluteScore = calculateFLRPowerFullScore(currentClass, score);
    console.log(`index-${Math.floor(Math.round(absoluteScore*10)/2)}`)
    
    return (
        <div className="flr-classes-scale card-tab">
            
            <img className="card-icon strength-icon" src={strengthIcon} alt="strength"></img>
            <div className="flr-classes-scale-container">
                <div className="flr-class-label-container">
                    <div className="flr-scale-label" style={{left:`${Math.round(absoluteScore*100)}%`}}>

                        <div className="flr-class-text">{currentClass}{score}</div>
                    </div>
                </div>
                <div className="flr-classes-scale-circles">
                    
                    <div className="flr-circle-center" style={{left:`${Math.round(absoluteScore*100)}%`}}>
                        <div className={`flr-class-circle index-${Math.floor(Math.round(absoluteScore*10)/2)}`}></div>
                    </div>
                </div>
            
            </div>
            
        </div>
        
    );
}

export default FLRClassesScale;