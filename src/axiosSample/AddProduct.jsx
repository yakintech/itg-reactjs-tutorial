import axios from 'axios'
import React, { useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'

function AddProduct() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState(0)

    const add = () => {
        let newProduct = {
            name: name,
            unitPrice: unitPrice
        }

        // axios.post("https://northwind.vercel.app/api/products", newProduct)
        //     .then(res => {
        //         alert("Success!")
        //     })

        axiosInstance.post("products", newProduct)
            .then(res => {
                alert("Success!")
            })
            .catch(err => {
                console.log('Error', err);
            })

    }

    return (<>

        <div>
            <label htmlFor="">Name:</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Unit Price:</label>
            <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

    </>)
}

export default AddProduct