import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Todo = () => {
    const [todos, setTodos] = useState([{ id: 1, text: "mango" }]);
    const [ipvalue, setIpvalue] = useState("");

    const inputText = (e) => {
        setIpvalue(e.target.value);
    };

    const add = () => {
        setTodos([...todos, { id: todos.length + 1, text: ipvalue }]);
        setIpvalue("");
    };

    const delfunc = (delid) => {
        let newtodos = todos.filter((element) => delid !== element.id);
        setTodos(newtodos);
    };

    return (
        <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
            <div className="bg-primary p-4 rounded-lg shadow-lg w-100" style={{ maxWidth: '600px' }}>
                <h1 className="text-white mb-4">To-Do List</h1>
                <div className="d-flex mb-4">
                    <input
                        onChange={inputText}
                        value={ipvalue}
                        type="text"
                        placeholder="Add your task"
                        className="form-control me-2"
                    />
                    <button
                        onClick={add}
                        className="btn btn-success"
                    >
                        ADD
                    </button>
                </div>
                {todos.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center bg-light p-2 mb-2 rounded border border-secondary">
                        <h4 className="text-dark">
                            {item.id}. {item.text}
                        </h4>
                        <button
                            onClick={() => delfunc(item.id)}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;
