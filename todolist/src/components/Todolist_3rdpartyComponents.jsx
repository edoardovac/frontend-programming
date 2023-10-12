/*import { useState, useRef } from 'react';
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function Todolist_3rdpartyComponents() {
    const [givenTodo, setGivenTodo] = useState({ description: "", date: "", priority: "" })
    const [todos, setTodos] = useState([]);
    // to use a component's function
    const gridRef = useRef();

    //ag grid 
    const [columnDefs] = useState([
        { field: "description", sortable: true, filter: true, floatingFilter: true },
        {
            field: "priority", sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        },
        { field: "date", sortable: true, filter: true, headerName: 'Due date', floatingFilter: true }
    ]);



    // to save stuff into the todos array
    const handleClick = () => {
        // this to add new description to the end of the array
        // you do that with ...todos
        setTodos([...todos, givenTodo])
        //to set obj empty again
        setGivenTodo({ description: "", date: "", priority: "" });
    }

    const handleDelete = () => {
        //setTodos(todos.filter((givenTodo, index) => index != row));
        if (gridRef.current.getSelectedNodes().length > 0) {
            // returns an array and we select its first element
            console.log(gridRef.current.getSelectedNodes()[0].id);
            setTodos(todos.filter((givenTodo, index) => index != gridRef.current.getSelectedNodes()[0].id));
        }
        else {
            alert("Please select row first");
        }
    }

    return (
        <>
            <h3>My Todos</h3>
            <input
                placeholder="Description"
                value={givenTodo.description}
                onChange={e => setGivenTodo({ ...givenTodo, description: e.target.value })}
            />
            <input
                placeholder="Priority"
                value={givenTodo.priority}
                onChange={e => setGivenTodo({ ...givenTodo, priority: e.target.value })}
            />
            <input
                type="date"
                value={givenTodo.date}
                onChange={e => setGivenTodo({ ...givenTodo, date: e.target.value })}
            />
            <button onClick={handleClick}>ADD TODO</button>
            <button onClick={handleDelete}>DELETE</button>
            <div className='ag-theme-material' style={{ width: 500, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    rowSelection='single'
                    columnDefs={columnDefs}
                    animateRows={true}
                />
            </div>
        </>
    )
}

export default Todolist_3rdpartyComponents;
*/
