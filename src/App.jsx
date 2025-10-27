import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#EAC7C7]">
        <div className="bg-[#EAE0DA] shadow-lg rounded-2xl p-16">
          <h1 className="text-3xl font-bold text-zinc-800 mb-6">To Do List!</h1>

          <div className="mb-4 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add A New To-Do"
              className="flex-1 px-2 py-3 border rounded-l-lg outline-none focus:outline-none"
            />
            <button
              onClick={addTodo}
              className="bg-indigo-400 text-white px-4 py-2 hover:bg-indigo-500 rounded-r-lg"
            >
              Add Task!
            </button>
          </div>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex rounded-lg p-3 bg-[#F5F5F0] border border-[#F5F5F0] items-center"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      )
                    )
                  }
                  className="mr-2 h-5 w-5 text-blue-500"
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() =>
                    setTodos(todos.filter((t) => t.id !== todo.id))
                  }
                  className="ml-2 border-none p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
