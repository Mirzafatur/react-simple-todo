import { useState } from "react";
import "./index.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function handleAddTodo(todoItem) {
    setTodoItems((items) => [...items, todoItem]);
  }

  function handleFinishedTodo(id) {
    setTodoItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, finished: !item.finished } : item
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodoItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Header />
      <TodoList
        todoItems={todoItems}
        onFinishedTodo={handleFinishedTodo}
        onDeleteTodo={handleDeleteTodo}
      />
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

function TodoList({ todoItems, onFinishedTodo, onDeleteTodo }) {
  return (
    <div className="todo-list">
      {todoItems.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onFinishedTodo={onFinishedTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

function TodoItem({ todo, onFinishedTodo, onDeleteTodo }) {
  return (
    <div className="todo-item">
      <p style={todo.finished ? { textDecoration: "line-through" } : {}}>
        {todo.todo}
      </p>
      <div className="item-action">
        {todo.priority == "1" && (
          <p style={{ color: "#0C7B17", backgroundColor: "#EBFFED" }}>
            Low Priority 😁
          </p>
        )}
        {todo.priority == "2" && (
          <p style={{ color: "#847500", backgroundColor: "#FFFDEB" }}>
            Medium Priority 😎
          </p>
        )}
        {todo.priority == "3" && (
          <p style={{ color: "#A41900", backgroundColor: "#FFECEB" }}>
            High Priority 🤯
          </p>
        )}
        <input
          type="checkbox"
          value={todo.finished}
          onChange={() => onFinishedTodo(todo.id)}
        />
        <div className="delete-btn" onClick={() => onDeleteTodo(todo.id)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.25012 5.57153C1.25012 5.15732 1.58591 4.82153 2.00012 4.82153H21.9999C22.4141 4.82153 22.7499 5.15732 22.7499 5.57153C22.7499 5.98575 22.4141 6.32153 21.9999 6.32153H2.00012C1.58591 6.32153 1.25012 5.98575 1.25012 5.57153Z"
              fill="#A41900"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.60724 6.32153V16.8999C5.60724 19.3023 7.5548 21.2499 9.95724 21.2499H14.0428C16.4452 21.2499 18.3928 19.3023 18.3928 16.8999V6.32153H5.60724ZM4.10724 5.67153C4.10724 5.20209 4.4878 4.82153 4.95724 4.82153H19.0428C19.5122 4.82153 19.8928 5.2021 19.8928 5.67153V16.8999C19.8928 20.1308 17.2737 22.7499 14.0428 22.7499H9.95724C6.72637 22.7499 4.10724 20.1308 4.10724 16.8999V5.67153Z"
              fill="#A41900"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.14288 9.82141C9.5571 9.82141 9.89288 10.1572 9.89288 10.5714V16.2856C9.89288 16.6998 9.5571 17.0356 9.14288 17.0356C8.72867 17.0356 8.39288 16.6998 8.39288 16.2856V10.5714C8.39288 10.1572 8.72867 9.82141 9.14288 9.82141Z"
              fill="#A41900"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.8571 9.82141C15.2713 9.82141 15.6071 10.1572 15.6071 10.5714V16.2856C15.6071 16.6998 15.2713 17.0356 14.8571 17.0356C14.4429 17.0356 14.1071 16.6998 14.1071 16.2856V10.5714C14.1071 10.1572 14.4429 9.82141 14.8571 9.82141Z"
              fill="#A41900"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.71436 2.75012C9.024 2.75012 8.46436 3.30977 8.46436 4.00012V5.57151C8.46436 5.98572 8.12857 6.32151 7.71436 6.32151C7.30014 6.32151 6.96436 5.98572 6.96436 5.57151V4.00012C6.96436 2.48134 8.19557 1.25012 9.71436 1.25012H14.2857C15.8045 1.25012 17.0357 2.48134 17.0357 4.00012V5.57151C17.0357 5.98572 16.6999 6.32151 16.2857 6.32151C15.8715 6.32151 15.5357 5.98572 15.5357 5.57151V4.00012C15.5357 3.30977 14.976 2.75012 14.2857 2.75012H9.71436Z"
              fill="#A41900"
            />
          </svg>
        </div>
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
      id: Date.now(),
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
