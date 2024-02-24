import React from 'react'
import { suppliers } from '../data/suppliers'
import { Link } from 'react-router-dom'


function ObjectArraySample3() {

 
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>City</th>
                    <th>Add To Fav</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(item => {

                        return <tr>
                            <td><Link to={'/suppliers/' + item.id}>{item.id}</Link></td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.address?.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ObjectArraySample3