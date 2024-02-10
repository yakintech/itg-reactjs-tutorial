import React from 'react'
import { suppliers } from '../data/suppliers'


function ObjectArraySample3() {
  return (<>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>City</th>
            </tr>
        </thead>
        <tbody>
            {
                suppliers.map(item => {

                    return <tr>
                        <td>{item.id}</td>
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