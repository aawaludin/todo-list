import React from "react";

function Form({ addTask, newTask, tasks, taskComplete }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mt-2 mb-5 text-xl font-bold text-black">
        <div>
          <span className="text-5xl">📃</span>
          <span className="mr-3 text-4xl">TODO-LIST</span>
        </div>
        <span className="p-2 mt-4 mr-3 text-sm text-white rounded-md shadow-md bg-slate-400">
          {taskComplete}/{tasks.length}
        </span>
      </div>
      <form className="flex w-full mb-4">
        <input
          type="text"
          placeholder="Tambah Kerjaan"
          className="w-full max-w-xs mr-3 text-black input input-bordered"
          ref={newTask}
        />
        <button
          onClick={addTask}
          className="flex items-center justify-center w-12 text-xl font-extrabold bg-blue-400 rounded-full"
        >
          <span>+</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
