
function TodoListItem(props) {  
  return(
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
        {props.job.id}
      </th>
      <td className="px-6 py-4">
        {props.job.title}
      </td>
      <td className="px-6 py-4">
        {props.job.completed ? 'YES' : 'NO'}
      </td>
      <td className="px-6 py-4 text-right">
      <a href="#" onClick={() => props.handleDelete(props.job.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove</a>
      </td>
    </tr>
  )
}

export default TodoListItem;