import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

function Favorites() {

    const { favorites, clear } = useContext(FavoritesContext)

    return (<>
        <h1>{favorites.length}</h1>
        <button onClick={() => clear()}>Empty</button>
        <ul>
            {
                favorites.map(f => (
                    <li key={f.id}>{f.name}</li>
                ))
            }
        </ul>
    </>
    )
}

export default Favorites