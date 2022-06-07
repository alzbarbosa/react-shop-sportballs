import { createContext, useState, useEffect } from "react";

import { getCategoriesandDocuments, addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    
    useEffect(()=> {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesandDocuments()
            setCategoriesMap(categoryMap)
        }
        
        getCategoriesMap()
    }, [])


/*
    useEffect(()=> {
        addCollectionAndDocuments('categories', SHOP_DATA)
    }, [])
*/
    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}

/*
useEffect(()=> {
        addCollectionAndDocuments('categories', SPORT_BALLS_DATA)
    }, [])

    */