import { useState } from "react";
import "./index.css";

function App() {
  return (
    <>
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

      <div className="input-form">
        <form>
          <input type="text" placeholder="Add todo" />
          <select>
            <option value="1">Low Priority 😁</option>
            <option value="2">Medium Priority 😎</option>
            <option value="3">High Priority 🤯</option>
          </select>
          <button className="submit-btn">Add</button>
        </form>
      </div>
    </>
  );
}

export default App;
