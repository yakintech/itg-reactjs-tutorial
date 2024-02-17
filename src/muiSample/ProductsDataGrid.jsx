import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductsDataGrid() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = () => {
        axios.get("https://northwind.vercel.app/api/products")
        .then(res => {
            setproducts(res.data)
        })
    }

    const columns = [
        {
            field: "id",
            headerName: "Product ID",
            width: 200
        },
        {
            field: "name",
            headerName: "Name",
            width: 300
        },
        {
            field: "unitPrice",
            headerName: "Price",
            width: 300
        },
        {
            field: "kdvPrice",
            headerName: "KDV",
            width: 200,
            renderCell: (params) => {
                return <span>{(params.row.unitPrice * 0.2).toFixed(2)}</span>
            }
        },
        {
            field: "Delete",
            headerName: "Delete",
            width: 200,
            renderCell: (params) => {
                return <Button onClick={() => deleteProduct(params.row.id)} variant='contained' color='error'>Delete</Button>
            }
        }
    ]


    const deleteProduct = (id) => {
        // axios.delete("https://northwind.vercel.app/api/products/" + id)
        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
               loadProducts();
            })

    }



    return (<>
        <div style={{ height: 400 }}>
            <DataGrid
                rows={products}
                columns={columns} />
        </div>

    </>)
}

export default ProductsDataGrid