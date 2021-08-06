import React, {useState} from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
    const [todos, setData] = useState([
        {
            id:1,
            text: "Write a new blog post.",
            isCompleted: false
        },
        {
            id:2,
            text: "Pick up laundry.",
            isCompleted: false
        },
        {
            id:3,
            text: "Die.",
            isCompleted: false
        }
    ]);

    const addTodo = (todo) => {
        setData([...todos, {text:todo}] );
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setData(newTodos);
    };

    const editTitle = (index, title) => {
        const newTodos = [...todos];
        newTodos[index].text = title;
        setData(newTodos);
    };

    return (
      <div className="parent-container">
          <div className="container top-container">
              <div className="app">
                  <div className="todoform">
                      <TodoForm addTodo={addTodo} />
                      <Todos todos={todos} markComplete={markComplete} editTitle={editTitle}/>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default App;
