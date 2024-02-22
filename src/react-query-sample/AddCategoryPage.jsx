import axios from 'axios'
import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { queryClient } from '..'

function AddCategoryPage() {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")


    const {mutate, data, isLoading} = useMutation((newCategory) => {
        return axios.post('https://northwind.vercel.app/api/categories', newCategory)
            .then(res => res.data)
    },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('categories')
            },
            onError: (error) => {
                console.log(error)
            }
        }
    
    )

    
    //add operation with react-query
    const add = () => {
        let newCategory = { name, description }

        mutate(newCategory)

    }


    return (<>

    {
        data && <div>Category added successfully</div>
    }

        {
            !isLoading &&  <div>
                <h1>Add Category</h1>
                <hr />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setdescription(e.target.value)} />
                <button onClick={add}>Add</button>
            </div>
        }
    </>
    )
}

export default AddCategoryPage