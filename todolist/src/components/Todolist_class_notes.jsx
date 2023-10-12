import { useState } from 'react';
import Todotable from './Todotable';

function Todolist_class_notes() {
    //const [description, setDescription] = useState('');
    const [givenTodo, setGivenTodo] = useState({description:"", date:""})
    const [todos, setTodos] = useState([]);

    // to save stuff into the todos array
    const handleClick = () => {
        // this to add new description to the end of the array
        // you do that with ...todos
        setTodos([...todos, givenTodo])
        //to set obj empty again
        setGivenTodo({description: "", date: ""});
    }

    const handleDelete = (row) => {
        setTodos(todos.filter((givenTodo, index) => index != row));
        //console.log("Delete: " + row);
    }

    //onChange event to save whats written in the input
    /*return(
        <>
        <h3>My Todos</h3>
        <input 
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <button onClick={handleClick}>ADD TODO</button>
        <table>
        <tbody>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo}</td>
                    </tr>
                ))}
        </tbody>
        </table>
        </>
    );*/
    
    /*return(
        <>
        <h3>My Todos</h3>
        <input 
            placeholder="Description"
            value={givenTodo.description}
            onChange={e => setGivenTodo({...givenTodo, description: e.target.value})}
        />
        <input
            type="date"
            value={givenTodo.date}
            onChange={e => setGivenTodo({...givenTodo, date: e.target.value})}
        />
        <button onClick={handleClick}>ADD TODO</button>
        <table>
        <tbody>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.description}</td>
                        <td>{todo.date}</td>
                        <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                    </tr>
                ))}
        </tbody>
        </table>
        </>
    )*/
    return(
        <>
        <h3>My Todos</h3>
        <input 
            placeholder="Description"
            value={givenTodo.description}
            onChange={e => setGivenTodo({...givenTodo, description: e.target.value})}
        />
        <input
            type="date"
            value={givenTodo.date}
            onChange={e => setGivenTodo({...givenTodo, date: e.target.value})}
        />
        <button onClick={handleClick}>ADD TODO</button>
        <Todotable todos={todos} deleteTodo={handleDelete}/>
        </>
    )
}

export default Todolist_class_notes;