import React from 'react'

function UserDetail(props) {

    const { name, surname, age } = props

    return (<>
        <h1>Name: {name}</h1>
        <h1>Surname: {surname}</h1>
        <h1>Age: {age}</h1>
    </>
    )
}

export default UserDetail




