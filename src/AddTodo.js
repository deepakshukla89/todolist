import React from 'react'
import { useState } from 'react'

function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Missing Title or Description or Both");
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    const change = (e) => {
        setTitle(e.target.value)
    }
    const descChange = (e) => {
        setDesc(e.target.value)
    }

    return (
        <div className="container my-2 ">
            <h3>Add a ToDo List</h3>
            <form onSubmit={submit} >
                <div className="form-group py-2">
                    <label htmlFor="title" >Title</label>
                    <input type="text" className="form-control" value={title} onChange={change} id="title" placeholder="Title Here" />

                </div>
                <div className="form-group py-2">
                    <label htmlFor="desc">Discription</label>
                    <input type="text" className="form-control" value={desc} id="desc" onChange={descChange} placeholder="Write Here" />
                </div>

                <button type="submit" className="btn btn-success my-2">Add ToDo</button>
            </form>

        </div>
    )
}

export default AddTodo
