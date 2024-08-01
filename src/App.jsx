import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Alert from "./components/Alert";
import Banner from "./components/Banner";

function App() {
  const newTask = useRef("");
  // mboh
  const [taskComplet, setTaskComplet] = useState(0);
  const STORAGE = "TODOLIST_APP";
  const [tasks, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE)) || [];
  });
  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
    const complete = tasks.filter((el) => el.completed == true).length;
    setTaskComplet(complete);
  }, [tasks]);

  function setId() {
    if (tasks == "") {
      return 1;
    } else {
      return tasks[0].id + 1;
    }
  }

  function addTask(e) {
    e.preventDefault();
    if (newTask.current.value == "") {
      document.getElementById("my_modal_1").showModal();
      return false;
    }
    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false,
    };
    setTask([...tasks, data]);
    newTask.current.value = "";
  }

  function updateTask(id) {
    let taskItem = [];
    tasks.map((el, i) => {
      if (el.id === id) {
        taskItem[i] = { ...el, completed: !el.completed };
      } else {
        taskItem[i] = el;
      }
    });
    setTask(taskItem);
  }

  function move(currentIndex, updateIndex) {
    const currentData = tasks[currentIndex];
    const updateData = tasks[updateIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[updateIndex] = { ...updateData, id: currentData.id };

    const newData = [...tasks];
    setTask(newData);
  }

  function remove(id) {
    if (window.confirm("yakin dihapus?")) {
      setTask(tasks.filter((el) => el.id != id));
    }
  }

  return (
    <>
      <div className="flex justify-center w-screen min-h-[500px] p-5 text-white bg-white">
        <div className="flex flex-col min-w-96">
          <Banner />
          <Form
            newTask={newTask}
            addTask={addTask}
            tasks={tasks}
            taskComplete={taskComplet}
          />

          <TodoList
            tasks={tasks}
            updateTask={updateTask}
            move={move}
            remove={remove}
          />
          <Alert />
        </div>
      </div>
    </>
  );
}

export default App;
