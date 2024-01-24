const initialTasks = [
  {
    task: "brush teeth",
    number: 1,
  },
  {
    task: "drink milk",
    number: 1,
  },
  {
    task: "buy bread",
    number: 1,
  },
  {
    task: "go shopping",
    number: 1,
  },
];

export default function App() {
  return (
    <div className="todo">
      <Heading />
      <InputForm />
      <TaskList />
    </div>
  );
}

function Heading() {
  return <h1>Get Things Done!</h1>;
}

function InputForm() {
  return (
    <form>
      <input className="input" type="text" placeholder="Type here..." />
      <button>Add Task</button>
    </form>
  );
}

function TaskList() {
  return (
    <div className="tasklist">
      {initialTasks.map((task) => (
        <Task task={task} key={task.number} />
      ))}
    </div>
  );
}

function Task({ task }) {
  return (
    <p className="task">
      {task.task}
      <span>🖋️ ❌</span>
    </p>
  );
}
