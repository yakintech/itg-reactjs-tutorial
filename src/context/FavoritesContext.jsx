import { createContext, useState } from "react";


export const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([])

    const addToFavorites = (product) => {
        setfavorites([...favorites, product])
    }

    const removeFromFavorites = (product) => {
        setfavorites(favorites.filter(f => f.id !== product.id))
    }

    const clear = () => {
        setfavorites([])
    }

    return <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clear }}>
        {children}
    </FavoritesContext.Provider>

}