import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

function Todos() {
    
const {data, isLoading, error} = useQuery('todos', () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.data)

})

  return (<>
  <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            {isLoading && <tr><td colSpan="3">Loading...</td></tr>}
            {error && <tr><td colSpan="3">Error: {error.message}</td></tr>}
            {data && data.map(todo => (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? 'Yes' : 'No'}</td>
                </tr>
            ))}
        </tbody>
  </table>
  </>)
}

export default Todos