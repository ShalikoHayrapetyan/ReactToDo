import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList (props){
    return (
        <div className="list-contain">
            <ul id="list">
            {props.items.map((item) => <ToDoItem key={item.id} item={item} delMe={props.delMe}  />)}
            </ul>
        </div>
    )
}
export default ToDoList