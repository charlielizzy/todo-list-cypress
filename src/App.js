import ToDoList from './components/ToDoList';
import ListInput from './components/ListInput';
import { useState } from 'react';

const initialList = [
  { title: "delectus aut autem", completed: false },
  { title: "quis ut nam facilis et officia qui", completed: false },
  { title: "fugiat veniam minus", completed: false },
  { title: "et porro tempora", completed: true }
];

function App() {
  const [list, setList] = useState(initialList);

  const handleSubmit = (task) => {
    const newTask = { title: task, completed: false }
    setList([...list, newTask]);
  }

  const handleRemove = (e, index) => {
    e.preventDefault();
    list.splice(index, 1);
    setList([...list]);
  }

  const handleComplete = (e, index) => {
    e.preventDefault();
    const newList = [...list];
    newList[index] = { ...newList[index], completed: true};
    setList(newList);
    
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4">
        <h1 className='text-5xl text-center mb-6'>TODO LIST</h1>
        <ListInput handleSubmit={handleSubmit}/>
        <ToDoList data={list} handleRemove={handleRemove} handleComplete={handleComplete}/>
      </div>
    </div>
  );
}

export default App;
