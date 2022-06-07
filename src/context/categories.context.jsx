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

    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}

/* to send products info to Firebase
useEffect(()=> {
        addCollectionAndDocuments('categories', SPORT_BALLS_DATA)
    }, [])

    */