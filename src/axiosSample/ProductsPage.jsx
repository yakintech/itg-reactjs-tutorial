import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsPage() {

    const [products, setproducts] = useState([])

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/products")
            .then(res => {
                setproducts(res.data)
            })
            .catch(err => {
                console.log('Error', err);
            })

    }, [])

    return (<>
        <ul>
            {
                products.map(item => <li>{item.name} - {item.unitPrice}</li>)
            }
        </ul>

    </>
    )
}

export default ProductsPage