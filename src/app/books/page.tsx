import React from 'react';

import { IBook } from '@/types/Books.type';
import BookCard from '@/components/shared/BookCard';

const getbooks = async() =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)

   const data = await res.json()

   return data;

}


const Books = async() => {

const books = await getbooks()



    return (
     <section className="container mx-auto my-8">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {books.map((book:IBook) => {
      return (
        <BookCard book={book} key={book.bookId}></BookCard>
      );
    })}
  </div>
</section>
    );
};

export default Books;