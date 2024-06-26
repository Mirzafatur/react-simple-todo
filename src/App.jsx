import { useState } from "react";
import "./index.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function handleAddTodo(todoItem) {
    setTodoItems((items) => [...items, todoItem]);
  }

  return (
    <>
      <Header />
      <TodoList todoItems={todoItems} />
      <InputForm onAddTodo={handleAddTodo} />
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="greeting">
        <h1>Good Morning!</h1>
        <p>Let's set your to-do list for today 🏆</p>
      </div>
      <div className="action">
        <select>
          <option value="input">Sort by Input</option>
          <option value="priority">Sort by Priority</option>
          <option value="finished">Sort by Finished Status</option>
        </select>
        <button>Clear Todo</button>
      </div>
    </div>
  );
}

function TodoList({ todoItems }) {
  return (
    <div className="todo-list">
      {todoItems.map((todo) => (
        <TodoItem todo={todo.todo} priority={todo.priority} />
      ))}
    </div>
  );
}

function TodoItem({ todo, priority }) {
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <div className="item-action">
        <p>{priority}</p>
        <input type="checkbox" />
      </div>
    </div>
  );
}

function InputForm({ onAddTodo }) {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!todo) return;

    const newTodo = {
      date: Date.now(),
      todo,
      priority,
      checked: false,
    };
    onAddTodo(newTodo);
    setTodo("");
    setPriority(1);
  }

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="1">Low Priority 😁</option>
          <option value="2">Medium Priority 😎</option>
          <option value="3">High Priority 🤯</option>
        </select>
        <button className="submit-btn">Add</button>
      </form>
    </div>
  );
}

export default App;
