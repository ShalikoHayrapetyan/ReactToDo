import React from 'react';


function ToDoItem(props) {
    function onDelBtn() {
        props.delMe(props.item.id)
    }
    return <li>{props.item.text}  <button className="del" onClick={onDelBtn}>X</button></li>
}
export default ToDoItem
