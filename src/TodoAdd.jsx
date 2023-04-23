import { useForm } from "./Hooks/useForm";

export const TodoAdd = ( { onNewTodo } ) => {

    const { descripcion, hundleChange, hundleReset } = useForm({ descripcion: '' });


    const hundleSubmit = (e) => {
        e.preventDefault();

        if (descripcion.length === 0) return;

        const todo = {
            id: new Date().getTime() * 3,
            done: false,
            descripcion,
        }
        
        onNewTodo( todo );
        hundleReset('');
    }

    return (
        <form
            className="shadow p-3"
            autoComplete="off"
            noValidate
            onSubmit={hundleSubmit}
        >

            <div className="mb-2 form-floating">
                <input
                    type="text"
                    name="descripcion"
                    value={descripcion}
                    onChange={hundleChange}
                    id="todo"
                    placeholder="¿Qué hay de hacer?"
                    className="form-control"
                />
                <label htmlFor="todo" className="text-secondary" >¿Qué hay de hacer?</label>
            </div>

            <button type="text" className="btn btn-success"> Guardar </button>
        </form>
    )
}
