import React from "react";
import {FLRClasses} from "./FLRClasses";
import "./FLRClassesScale.css"

function FLRClassesScale({currentClass, score}) {
    return (
        <div className="flr-classes-scale-container">
            <ul className="flr-classes-scale-list">
                {FLRClasses.map((classItem, index) => {
                    let isInCurrentClass = classItem === currentClass;
                    let itemClassName = isInCurrentClass ? "flr-class" :"flr-class-scale-item";
                        return (
                            <li className={itemClassName}key={index}>
                                
                                {classItem}{isInCurrentClass ? null : null}
                                
                            </li>
                            )

                })}
            </ul>
            
            <ul className="flr-classes-scale-circles">
                {FLRClasses.map((classItem, index) => {
                        let isInCurrentClass = classItem === currentClass;
                        let itemClassName = isInCurrentClass ? `flr-class-circle index-${index} thick-circle` :`flr-class-circle index-${index}`;
                        return (
                            <li key={index}>
                                <div className={itemClassName}></div>
                            </li>
                            )

                })}
            </ul>
            
        </div>
        
    );
}

export default FLRClassesScale;