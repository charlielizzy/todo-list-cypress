import { useState } from 'react';
import TodoListItem from '../TodoListItem';

function TodoList(props) {
  const [todoList, setTodoList] = useState(props.data);

  const removeTodoListItem = (id) => {
    const newTodoList = todoList.filter((job) => job.id !== id);
    setTodoList(newTodoList);
  }
  
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Job
          </th>
          <th scope="col" className="px-6 py-3">
            Completed
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Remove</span>
          </th>
        </tr>
      </thead>
      <tbody> 
        {todoList.map((job, index) => {
          return <TodoListItem handleDelete={removeTodoListItem} job={job} key={index}/>
        })}
      </tbody>
    </table> 
  )
}

export default TodoList;