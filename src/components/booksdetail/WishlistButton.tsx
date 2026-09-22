'use client'
import { BookContext } from '@/context/BooksContext';
import { IBook } from '@/types/Books.type';
import React, { useContext } from 'react';



const WishlistButtton = ({book} : {book : IBook}) => {
    const { wishlist, setwishlist } = useContext(BookContext) as {
        wishlist: IBook[];
        setwishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

    function handlewishlist() {
        console.log('button clicked', book);

        setwishlist([...wishlist, book]);

    }    
    return (
         <button className="btn " onClick={() => handlewishlist()}>
          Wishlist 
        </button>
    )
   
};

export default WishlistButtton;