import React, { useEffect, useState } from 'react'
import { baseService } from '../api/baseService'
import { DataGrid } from '@mui/x-data-grid'

function SuppliersTable() {

    const [suppliers, setsuppliers] = useState([])

    useEffect(() => {

     loadData()

    }, [])


    const loadData = () => {
        baseService.getAll('suppliers')
        .then(data => {
            setsuppliers(data)
        })
        .catch(err => console.log(err))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'companyName', headerName: 'Company Name', width: 130 },
        { field: 'contactName', headerName: 'Contact Name', width: 130 },
        { field: 'contactTitle', headerName: 'Contact Title', width: 130 },
        {
            field:'delete',
            headerName: 'Delete',
            width: 130,
            renderCell: (params) => (
                <button onClick={() => {

                    baseService.delete('suppliers', params.row.id)
                        .then(data => {
                            loadData()
                        })
                        .catch(err => console.log(err))

                }}>Delete</button>
            )
        }
    ]

    return (<>
        <DataGrid
            rows={suppliers}
            columns={columns}
        />
    </>)
}

export default SuppliersTable