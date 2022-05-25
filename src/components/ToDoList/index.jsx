import { useState } from 'react';

function TodoList(props) {
  if (props.data.length === 0) {
    return (
      <div>
        Add new task...
      </div>
    )}

    const showStar = () => {
      return (
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
 </svg>
      )
    }

  return (
    <>
      {props.data.filter((item) => !item.completed ).length === 0  ? <p>I'm done</p> : null}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">
              <span className="sr-only">Star</span>
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
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Complete</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Priority
            </th>
          </tr>
        </thead>
        <tbody> 
          {props.data.map((job, index) => {
            return (
              <tr id={`row-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                <td className="px-6 py-4">
                  {job.priority ? showStar() : null}
                  
                </td>
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
                <td className="px-6 py-4">
                <a href="#" onClick={(e) => props.handlePriority(e, index)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" id={`priority-${index}`}>Priority</a>
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