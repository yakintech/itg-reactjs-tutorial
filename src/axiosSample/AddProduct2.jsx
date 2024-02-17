import React from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../api/axiosInstance'

function AddProduct2() {

    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
    } = useForm()

    const add = (values) => {

        axiosInstance.post("products", values)
            .then(res => {
                alert("Success!")
            })
            .catch(err => {
                console.log('Error', err);
            })
    }



    return (<>
        <form onSubmit={handleSubmit(add)}>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' {...register("name", { required: true })} />
                {errors.name && <span>Name alanı boş bırakılamaz</span>}
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type='text'  {...register("unitPrice")} />
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type='text'  {...register("unitsInStock")} />
            </div>
            <div>
                <button type='submit'>Add</button>
                {/* <input type='submit' value="Add" /> */}
            </div>
        </form>
    </>)
}

export default AddProduct2

//useState, useEffect