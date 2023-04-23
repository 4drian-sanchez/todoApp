import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from './Hooks/useTodo';

export const TodoApp = () => {

    const { state, onNewTodo, onDeleteTodo, onToggleDone, todosCount, todosPending } = useTodo()

    return (
        <main className="container-xl">

            <h1 className="text-center fs-3 mt-4">
                Todos { todosCount } <small className="fs-5">pendientes: { todosPending }</small>
            </h1>

            <div className="row mt-3 p-2">
                <div className="col-12 col-md-7 order-1 order-md-0">

                    <TodoList
                        todos={state}
                        onDeleteTodo={onDeleteTodo}
                        onToggleDone={onToggleDone}
                    />

                </div>
                <div className="col-12 col-md-5">
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>
            </div>

        </main>


    )
}
