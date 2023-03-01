import React from "react";
import './../Block.css'

export default function Block(props){
    return <div className={props.color === "red" ? "red block" : props.color === "green" ? "green block" : "blue block"}/>
}