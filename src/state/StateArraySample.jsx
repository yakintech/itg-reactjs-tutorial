import React, { useState } from 'react'
import { suppliers } from '../data/suppliers'

function StateArraySample() {

    const [supplierState, setSupplierState] = useState(suppliers)

    return (<>

        <h1>Length: {supplierState.length}</h1>
        <hr />
        <button onClick={() => setSupplierState([])}>Clear</button>
        <hr/>
        
        <ul>
            {
                supplierState.map(item => <li>{item.companyName}</li>)
            }
        </ul>

    </>
    )
}

export default StateArraySample