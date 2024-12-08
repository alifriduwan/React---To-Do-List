import { useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoItem = (props) => {
  const dialog = useRef();

  const [editing, setEditing] = useState(false);
  // eslint-disable-next-line react/prop-types
  const [title, setTitle] = useState(props.todo.title);

  const openModal = (isEditing) => {
    isEditing ? setEditing(true) : setEditing(false);

    dialog.current.showModal();
  };

  const closeModal = () => {
    dialog.current.close();
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (editing) {
      const task = {
        title: title,
        // eslint-disable-next-line react/prop-types
        date: props.todo.date,
      };
      // eslint-disable-next-line react/prop-types
      props.updateTask(task, props.id);
    } else {
      // eslint-disable-next-line react/prop-types
      props.deleteTask(props.id);
    }

    closeModal();
  };

  const clickOutsideModal = (e) => {
    if (e.target === dialog.current) {
      closeModal();
    }
  };

  return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="h-6 w-6 rounded-full shadow-sm text-white text-sm bg-teal-400 text-center content-center">
            {/* eslint-disable-next-line react/prop-types*/}
            {props.id + 1}
          </div>
          <div>
            {/* eslint-disable-next-line react/prop-types*/}
            <p className="font-semibold">{props.todo.title}</p>
            {/* eslint-disable-next-line react/prop-types*/}
            <p className="text-sm text-gray-400">{props.todo.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => openModal(false)}
            className="todo-btn"
            type="button"
          >
            <MdDelete />
          </button>
          <button
            onClick={() => openModal(true)}
            className="todo-btn "
            type="button"
          >
            <MdEdit />
          </button>
        </div>
      </li>
      <dialog
        ref={dialog}
        className="rounded-md w-[480px]"
        onClick={clickOutsideModal}
      >
        <form className="p-6" onSubmit={submitForm}>
          <h3 className="semi-bold text-xl">
            {editing ? "Edit Task" : "Do you want to delete"}
          </h3>
          <div className="mt-2">
            {editing ? (
              <input
                type="text"
                className="focus:outline-none w-full border rounded py-2 px-3"
                maxLength="30"
                placeholder="Type something here..."
                autoFocus
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              "This will permanenty delete this task"
            )}
          </div>
          <div className="mt-12 text-end space-x-2">
            <button
              type="button"
              className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type="submit"
              className={
                editing
                  ? "rounded bg-teal-500 px-3 py-2 text-white hover:bg-teal-600"
                  : "rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
              }
            >
              {editing ? "Confirm" : "Delete"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default TodoItem;
