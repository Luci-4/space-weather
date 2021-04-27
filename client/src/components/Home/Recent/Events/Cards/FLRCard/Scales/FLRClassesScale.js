import React from "react";
import {FLRClasses, calculateFLRPowerFullScore} from "./FLRClasses";
import strengthIcon from "./strength.png";
import "./FLRClassesScale.css"

function FLRClassesScale({currentClass, score}) {
    
    const absoluteScore = calculateFLRPowerFullScore(currentClass, score);

    // TODO: add loading animation instead of Loading...
    if(null === (null ?? absoluteScore)){
        return (
            <div className="flr-classes-scale card-tab">
                Loading...
            </div>
        );
    }
    
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
                        <div className={`flr-class-circle index-${((currentScore) => {
                            if(null === (null ?? currentScore)){
                                return "none";
                            }
                            return Math.floor(Math.round(currentScore*10)/2);
                        })(absoluteScore)}`}>

                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
        
    );
}

export default FLRClassesScale;