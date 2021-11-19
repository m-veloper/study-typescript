import React, {CSSProperties} from "react";
import {Todo} from "../module/todos";

type TodoItemPros = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

function TodoItem({todo, onToggle, onRemove}: TodoItemPros) {

    const handleToggle = () => onToggle(todo.id);
    const handleRemove = () => onRemove(todo.id);

    const textStyle: CSSProperties = {
        textDecoration: todo.done ? "line-through" : "none"
    }
    const removeStyle: CSSProperties = {
        color: "red",
        marginLeft: 8
    }
    return (
        <li>
            <span onClick={handleToggle} style={textStyle}>{todo.text}</span>
            <span onClick={handleRemove} style={removeStyle}>(x)</span>
        </li>
    )
}

export default TodoItem;