import { useState } from "react"

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!value || !category) return;

        addTodo(value, category);
        setCategory("");
        setValue("");
    }

  return (
    <div className="todo-form">

        <h2>Criar Tarefa: </h2>
        <form onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder="Digite o titulo" onChange={(event) => setValue(event.target.value)}></input>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm