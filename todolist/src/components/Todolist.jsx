import { useState, useRef } from 'react';
import { AgGridReact } from "ag-grid-react";
// mui imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// ag-grid imports
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function Todolist() {
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
    };

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
    };

    const givenDateFunc = (date) => {
        let d = date.toISOString()
        d = d.slice(0, 10);
        setGivenTodo({...givenTodo, date: d});
    };

    return (
        <>
            <Stack mt={2} direction="row" spacing={2} alignItems="center" justifyContent="center">
                <TextField
                    label="Description"
                    value={givenTodo.description}
                    onChange={e => setGivenTodo({ ...givenTodo, description: e.target.value })}
                />
                <TextField
                    label="Priority"
                    value={givenTodo.priority}
                    onChange={e => setGivenTodo({ ...givenTodo, priority: e.target.value })}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DatePicker 
                    label="Date" 
                    onChange={date => givenDateFunc(date)}    
                />
                </LocalizationProvider>
                <Button variant="contained" onClick={handleClick}>ADD TODO</Button>
                <Button variant="contained" color="error" onClick={handleDelete}>DELETE</Button>
            </Stack>
            <Stack alignItems='center' justifyContent="center">
                <div className='ag-theme-material' style={{ width: "50%", height: 500 }}>
                    <AgGridReact
                        ref={gridRef}
                        onGridReady={params => gridRef.current = params.api}
                        rowData={todos}
                        rowSelection='single'
                        columnDefs={columnDefs}
                        animateRows={true}
                    />
                </div>
            </Stack>
        </>
    )
}

export default Todolist;