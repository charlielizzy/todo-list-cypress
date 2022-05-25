import ToDoList from "./components/ToDoList";
import ListInput from "./components/ListInput";
import { useState } from "react";

const initialList = [
  { title: "Mow lawn", completed: false, priority: false },
  { title: "Grocery shop", completed: false, priority: false },
  { title: "Clean car", completed: false, priority: false },
  { title: "Do taxes", completed: true, priority: false },
];

function App() {
  const [list, setList] = useState(initialList);

  const handleSubmit = (task) => {
    const newTask = { title: task, completed: false };
    setList([...list, newTask]);
  };

  const handleRemove = (e, index) => {
    e.preventDefault();
    list.splice(index, 1);
    setList([...list]);
  };

  const handleComplete = (e, index) => {
    e.preventDefault();
    const newList = [...list];
    newList[index] = { ...newList[index], completed: true };
    setList(newList);
  };

  const handlePriority = (e, index) => {
    e.preventDefault();
    const newList = [...list];
    newList[index] = { ...newList[index], priority: true };
    setList(newList);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4">
        <h1 className="text-5xl text-center mb-6">TODO LIST</h1>
        <ListInput handleSubmit={handleSubmit} />
        <ToDoList
          data={list}
          handleRemove={handleRemove}
          handleComplete={handleComplete}
          handlePriority={handlePriority}
        />
      </div>
    </div>
  );
}

export default App;
