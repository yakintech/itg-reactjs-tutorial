import React from 'react'
import { products } from '../data/products'

function ObjectArraySample2() {


    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice.toFixed(2)}</td>
                        <td>{item.unitsInStock}</td>
                    </tr>)
                }

            </tbody>

        </table>

    </>
    )
}

export default ObjectArraySample2