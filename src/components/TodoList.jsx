import ActionButton from "./ActionButton";

function TodoList({ tasks, updateTask, move, remove }) {
  tasks.sort((a, b) => b.id - a.id);
  return (
    <div className="flex flex-col w-full mt-5">
      {tasks.map((el, i) => {
        return (
          <div
            className="flex items-center justify-between p-3 mb-3 bg-blue-200 shadow-xl"
            key={i}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={() => updateTask(el.id)}
                checked={el.completed ? true : false}
                className="mr-2 checkbox border-blue-400 [--chkbg:theme(colors.blue.400)] [--chkfg:white] checked:border-blue-400 checkbox-sm"
              />
              <label htmlFor="tes" className="text-blue-700">
                {el.completed ? (
                  <del className="text-red-500"> {el.task.toUpperCase()}</del>
                ) : (
                  el.task.toUpperCase()
                )}
              </label>
            </div>
            <div className="">
              <ActionButton
                id={el.id}
                tasks={tasks}
                move={move}
                remove={remove}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
