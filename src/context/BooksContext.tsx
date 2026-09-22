"use client"

import React, { createContext, ReactNode, useState } from 'react';



export const BookContext = createContext({})

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readbooks , setreadbooks] = useState([])
    const [wishlist , setwishlist] = useState([])

    const sharedData = {
        readbooks , setreadbooks , wishlist , setwishlist
    }
return <BookContext.Provider value={sharedData}>
{children}
</BookContext.Provider>
}
export default BooksProvider;