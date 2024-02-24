import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'

function ProductPage() {
  
    const [products, setproducts] = useState([])

    useEffect(() => {
        axiosInstance.get('/products')
            .then(response => {
                setproducts(response.data)
            })
    }, [])

  return (<>
  </>
  )
}

export default ProductPage