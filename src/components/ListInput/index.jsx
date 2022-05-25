import { useState } from "react";


const ListInput = (props) => {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(task);
    setTask('');
  }

  return(
    <div>
      <form class="m-4 flex justify-around" onSubmit={handleSubmit}>
        <input onChange={(e) => setTask(e.target.value)} value={task} className="rounded-l-lg p-4 border text-gray-800 border-gray-200 bg-white w-full" />
        <button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Add</button>
      </form>
    </div>
  )
}


export default ListInput