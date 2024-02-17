import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CustomerPage() {



    const [customers, setcustomers] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        loadCustomers();
    }, [])

    const loadCustomers = () => {
        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data)
                setloading(false)
            })
    }


    const deleteCustomer = (id) => {

        axios.delete("https://northwind.vercel.app/api/customers/" + id)
            .then(res => {
                loadCustomers();
            })
    }


    return (<>
        {
            loading == true ? <h1>loading...</h1> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td><button onClick={() => deleteCustomer(item.id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

    </>
    )
}

export default CustomerPage


//GET, POST, PUT, DELETE