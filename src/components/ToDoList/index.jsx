import { useState } from 'react';

function TodoList(props) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Job
          </th>
          <th scope="col" className="px-6 py-3">
            Completed
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Remove</span>
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Remove</span>
          </th>
        </tr>
      </thead>
      <tbody> 
        {props.data.map((job, index) => {
          return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
              <td className={`px-6 py-4 ${job.completed ? 'line-through' : ''}`}>
                {job.title}
              </td>
              <td className="px-6 py-4">
                {job.completed ? 'YES' : 'NO'}
              </td>
              <td className="px-6 py-4 text-right">
                <a href="#" onClick={(e) => props.handleRemove(e, index)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove</a>
              </td>
              <td className="px-6 py-4 text-right">
                <a href="#" onClick={(e) => props.handleComplete(e, index)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Complete</a>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table> 
  )
}

export default TodoList;