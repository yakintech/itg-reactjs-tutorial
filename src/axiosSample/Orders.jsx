import React from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../api/axiosInstance'
import { DataGrid } from '@mui/x-data-grid'
import dayjs from 'dayjs'




function Orders() {

    const { data, isLoading } = useQuery('orders', () => {
        return axiosInstance.get('/orders')
            .then(response => response.data)
    }
    )

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 100
        },
        {
            field: "customerId",
            headerName: "Customer ID",
            width: 150
        },
        {
            field: "orderDate",
            headerName: "Order Date",
            width: 250, // 22 Mayıs 2000 10:00 -> Format
            renderCell: (params) => {
                return dayjs(params.value).format('DD MMMM YYYY dddd HH:mm')
            }
        },
        {
            field: "requiredDate",
            headerName: "Required Date",
            width: 250,
            renderCell: (params) => {
                return dayjs(params.value).format('DD MMMM YYYY dddd HH:mm')
            }
        },
        {
            field: "shippedDate",
            headerName: "Shipped Date",
            width: 250,
            renderCell: (params) => {
                return dayjs(params.value).format('DD MMMM YYYY dddd HH:mm')
            }
        },
        {
            field:"Difference",
            headerName: "Difference in Days",
            width: 100,
            renderCell: (params) => {
                const requiredDate = dayjs(params.row.requiredDate)
                const shippedDate = dayjs(params.row.shippedDate)
                const days =  requiredDate.diff(shippedDate, 'day')

                if (days < 0) {
                    return <span style={{color: 'red'}}>{days}</span>
                }
                else {
                    return <span style={{color: 'green'}}>{days}</span>
                }
            }
        },
        //next order date, next week calc,
        {
            field: "nextOrder",
            headerName: "Next Order",
            width: 150,
            renderCell: (params) => {
                return dayjs(params.row.orderDate).add(7, 'day').format('DD MMMM YYYY dddd HH:mm')
            }
        }

    ]

    return (<>
        <h1>Orders</h1>
        <hr />
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={data || []}
            columns={columns}
        />
        </div>
        
    </>
    )
}

export default Orders


//FORMAT, date difference