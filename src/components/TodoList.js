import React from "react";

const TodoList = ({ todos, setTodos, editTodo, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleComplete = (item) => {
    setTodos(
      todos.map((el) => {
        if (el.id === item.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTask = todos.find((item) => item.id === id);
    setEditTodo(findTask);
  };
  return (
    <div>
      {todos.map((item) => (
        <li className="list-item" key={item.id}>
          <input
            type="text"
            value={item.title}
            className={`list ${item.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(item)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(item)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(item)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
