// this is a stateless component
// better for testing
function Todotable(props) {
//when using passed props you need to write prop.nameofpassedprop
    return(
        <>
        <table>
        <tbody>
                {props.todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.description}</td>
                        <td>{todo.priority}</td> 
                        <td>{todo.date}</td>
                        <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
                    </tr>
                ))}
        </tbody>
        </table>
        </>
    )


}

export default Todotable