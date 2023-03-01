import React from "react";
import './../Block.css'

export default function Block(props){
    if(props.category === props.color || props.category === "all")
        return <div style={{order: props.order}} className={props.color === "red" ? "red block" : props.color === "green" ? "green block" : "blue block"}/>
}