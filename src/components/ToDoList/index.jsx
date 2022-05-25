import { useState } from 'react';

function TodoList(props) {
  if (props.data.length === 0) {
    return (
      <div>
        Add new task...
      </div>
    )}

  return (
    <>
      {props.data.filter((item) => !item.completed ).length === 0  ? <p>I'm done</p> : null}
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
              <span className="sr-only">Complete</span>
            </th>
          </tr>
        </thead>
        <tbody> 
          {props.data.map((job, index) => {
            return (
              <tr id={`row-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                <td id={`job-${index}`} className={`px-6 py-4 ${job.completed ? `line-through` : null }`}>
                  {job.title}
                </td>
                <td className="px-6 py-4">
                  {job.completed ? 'YES' : 'NO'}
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" onClick={(e) => props.handleRemove(e, index)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" id={`remove-${index}`}>Remove</a>
                </td>
                <td className="px-6 py-4 text-right">
                  <a href="#" onClick={(e) => props.handleComplete(e, index)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" id={`completed-${index}`}>Complete</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table> 
    </>
  )
}

export default TodoList;