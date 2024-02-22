import React from 'react'
import { useQuery } from 'react-query'
import { queryClient } from '..'
import { axiosInstance } from '../api/axiosInstance'

function CategoryPage() {

    //usequery get, getById....
    const { data, isLoading, error } = useQuery('categories', () => {
        return axiosInstance.get('categories')
            .then(res => res.data)
    },
        {
            staleTime: 1000 * 60 * 5 // 5 minutes
            // refetchInterval: 1000 * 10 // 10 seconds
        }
    )

    const clearCache = () => {
        queryClient.invalidateQueries('categories')
    }

    return (<>

        <h1>Categories</h1>
        <hr />
        <button onClick={clearCache}>Clear Cache</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {isLoading && <tr><td colSpan="3">Loading...</td></tr>}
                {error && <tr><td colSpan="3">Error: {error.message}</td></tr>}
                {data && data.map(category => (
                    <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    )
}

export default CategoryPage