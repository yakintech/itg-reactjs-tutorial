import React, { useContext, useEffect, useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'
import { FavoritesContext } from '../context/FavoritesContext'

function ProductPage() {
  
    const [products, setproducts] = useState([])

    const { addToFavorites } = useContext(FavoritesContext)
    

    useEffect(() => {
        axiosInstance.get('/products')
            .then(response => {
                setproducts(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

  return (<>
  <table>
    <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Unit Price</td>
            <td>Add To Fav</td>
        </tr>
    </thead>
    <tbody>
        {
            products.map(p => (
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.unitPrice}</td>
                    <td><button onClick={() => addToFavorites(p)}>Add To Fav</button></td>
                </tr>
            ))
        }
    </tbody>
  </table>
  </>
  )
}

export default ProductPage