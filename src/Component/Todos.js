import React from 'react'
import TodoItem from '../Component/TodoItem'

function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center m-3" >My ToDo List</h3>
            {
                props.todo.length === 0 ? "Empty ToDo List" :
                props.todo.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })}


        </div>
    )
}

export default Todos
