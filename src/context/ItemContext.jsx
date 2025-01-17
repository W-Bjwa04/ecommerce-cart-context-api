import { createContext, useContext, useState } from "react";


export const ItemContext = createContext(null)


export const useItem = ()=>{
    const data = useContext(ItemContext)

    return data
}



export const  ItemContextProvider = (props)=>{
    // define the data of the context 

    const [items, setItems] = useState([])


    return (
        <ItemContext.Provider value={{items, setItems}}>
           { props.children}
        </ItemContext.Provider>
    )
}