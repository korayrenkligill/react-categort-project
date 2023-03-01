import React from "react";

function Tab(props){
    return(
        <div className="Tab">
            <button onClick={()=>{props.setColor("red")}} className={props.active === "red" ? "Active" : ""}>Red</button>
            <button onClick={()=>{props.setColor("green")}} className={props.active === "green" ? "Active" : ""}>Green</button>
            <button onClick={()=>{props.setColor("blue")}} className={props.active === "blue" ? "Active" : ""}>Blue</button>
            <button onClick={()=>{props.setColor("all")}} className={props.active === "all" ? "Active" : ""}>All</button>
        </div>
    )
}
export default Tab;