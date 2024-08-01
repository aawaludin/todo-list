function ActionButton({ id, tasks, move, remove }) {
  let itemId = id;
  let currentIndex = tasks.findIndex((el) => el.id === itemId);
  let firstIndex = currentIndex - 1;
  let lastIndex = currentIndex + 1;

  let firstButton = "";
  if (tasks[firstIndex] != undefined) {
    firstButton = "⬆️";
  }

  let lastButton = " ";
  if (tasks[lastIndex] != undefined) {
    lastButton = "⬇️";
  }
  return (
    <div className="">
      <span className="">
        <button onClick={() => move(currentIndex, firstIndex)}>
          {firstButton}
        </button>
      </span>
      <span className="">
        <button onClick={() => move(currentIndex, lastIndex)}>
          {lastButton}
        </button>
      </span>
      <span className="mr-3">
        <button onClick={() => remove(id)}> ❌ </button>
      </span>
    </div>
  );
}

export default ActionButton;
