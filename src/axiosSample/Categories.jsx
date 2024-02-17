import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Categories() {

    const [categories, setcategories] = useState([])


    useEffect(() => {

        //URL e bir get request atıyorum!
        axios.get("https://northwind.vercel.app/api/categories")
            .then(res => {
                setcategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        return () => {
            
        }

    }, [])


    return (<>
        <ul>
            {
                categories.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>
    )
}

export default Categories


//props, state, effect