"use client"

import { BookContext } from '@/context/BooksContext';
import { IBook } from '@/types/Books.type';
import React, { useContext } from 'react';



const ReadButton = ({book} : {book : IBook}) => {
    const { readbooks, setreadbooks } = useContext(BookContext) as {
        readbooks: IBook[];
        setreadbooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

const handleReadbook = () => {
  

    setreadbooks([...readbooks , book])
    
}    
    return <button className="btn btn-primary" onClick={ ()=> handleReadbook()}>
          Read Now
        </button>
        
   
};

export default ReadButton;