export const TodoList = ({ todos, onDeleteTodo, onToggleDone }) => {
  return (
    <ul className="list-group mt-4 mt-md-2">
      {
        todos.map(todo => (
          <li
            key={todo.id}
            className="list-group-item list-group-item-light mt-2 d-flex justify-content-between">
            <span 
            className= { `align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''}` }
            onClick= { () => onToggleDone( todo.id ) }
            >
              {todo.descripcion}
              </span>
            <button
              className="btn btn-danger"
              onClick={ () => onDeleteTodo( todo.id )}
              >
              Eliminar
            </button>
          </li>
        ))
      }
    </ul>
  )
}
