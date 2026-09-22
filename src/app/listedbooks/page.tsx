"use client"
import React from 'react';
import { useContext } from 'react';
import { BookContext } from '@/context/BooksContext';

import { IBook } from '@/types/Books.type';
import Image from 'next/image';


const ListedBook = () => {

    const { readbooks, wishlist } = useContext(BookContext) as {
        readbooks: IBook[];
        wishlist: IBook[];
    };

    console.log(readbooks , wishlist);
    
    return (
        <div className='container mx-auto'>

            <h2 className='bg-amber-200 my-7 text-center py-3'>listed books</h2>

            {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Read books" />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    { 
        readbooks.map((book: IBook) => {
            return<div key={book.bookId} className="container mx-auto my-10 max-w-3xl"> <div className="rounded-2xl bg-base-100 shadow-xl border border-base-200 overflow-hidden"> {/* Image */} <figure className="bg-base-200 p-8"> <Image src={book.image} alt={book.bookName} width={500} height={600} className="mx-auto h-[350px] w-full object-contain rounded-xl" /> </figure> {/* Content */} <div className="p-6"> {/* Title */} <div> <h2 className="text-3xl font-bold"> {book.bookName} </h2> <p className="mt-2 text-gray-500"> Written by{" "} <span className="font-semibold text-base-content"> {book.author} </span> </p> </div> {/* Badges */} <div className="mt-4 flex flex-wrap gap-2"> <span className="badge badge-primary badge-lg"> {book.category} </span> <span className="badge badge-warning badge-lg"> ⭐ {book.rating} </span> <span className="badge badge-outline badge-lg"> {book.totalPages} Pages </span> </div> {/* Review */} <div className="mt-6"> <h3 className="mb-2 text-xl font-semibold"> About the Book </h3> <p className="leading-7 text-gray-600"> {book.review} </p> </div> {/* Tags */} <div className="mt-5"> <h3 className="mb-2 font-semibold"> Tags </h3> <div className="flex flex-wrap gap-2"> {book.tags.map((tag) => ( <span key={tag} className="rounded-full bg-base-200 px-3 py-1 text-sm" > #{tag} </span> ))} </div> </div> {/* Book Details */} <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"> <div className="rounded-xl bg-base-200 p-4"> <p className="text-sm text-gray-500"> Publisher </p> <p className="font-semibold"> {book.publisher} </p> </div> <div className="rounded-xl bg-base-200 p-4"> <p className="text-sm text-gray-500"> Published </p> <p className="font-semibold"> {book.yearOfPublishing} </p> </div> <div className="rounded-xl bg-base-200 p-4"> <p className="text-sm text-gray-500"> Total Pages </p> <p className="font-semibold"> {book.totalPages} </p> </div> <div className="rounded-xl bg-base-200 p-4"> <p className="text-sm text-gray-500"> Rating </p> <p className="font-semibold"> ⭐ {book.rating} </p> </div> </div> {/* Button */} <div className="mt-6 flex gap-3"> <button className="btn btn-primary flex-1"> Read Now </button> <button className="btn btn-outline"> Add to Wishlist </button> </div> </div> </div> </div>
        })
    }
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="WishList" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">{
        wishlist.map((book: IBook) => {
            return <div key={book.bookId} className="container mx-auto my-10 max-w-3xl"> <div className="rounded-2xl bg-base-100 shadow-xl border border-base-200 overflow-hidden"> {/* Image */} <figure className="bg-base-200 p-8"> <Image src={book.image} alt={book.bookName} width={500} height={600} className="mx-auto h-[350px] w-full object-contain rounded-xl" /> </figure> {/* Content */} <div className="p-6"> {/* Title */} <div> <h2 className="text-3xl font-bold"> {book.bookName} </h2> <p className="mt-2 text-gray-500"> Written by{" "} <span className="font-semibold text-base-content"> {book.author} </span> </p> </div> {/* Badges */} <div className="mt-4 flex flex-wrap gap-2"> <span className="badge badge-primary badge-lg"> {book.category} </span> <span className="badge badge-warning badge-lg"> ⭐ {book.rating} </span> <span className="badge badge-outline badge-lg"> {book.totalPages} Pages </span> </div> {/* Review */} <div className="mt-6"> <h3 className="mb-2 text-xl font-semibold"> About the Book </h3> <p className="leading-7 text-gray-600"> {book.review} </p> </div> {/* Tags */} <div className="mt-5"> <h3 className="mb-2 font-semibold"> Tags </h3> <div className="flex flex-wrap gap-2"> {book.tags.map((tag) => ( <span key={tag} className="rounded-full bg-base-200 px-3 py-1 text-sm" > #{tag} </span> ))} </div> </div> {/* Book Details */} <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"> <div className="rounded-xl bg-base-200 p-4"> <p className="text-sm text-gray-500"> Publisher </p> <p className="font-semibold"> {book.publisher} </p> </div> <div className="rounded-xl bg-base-200 p-4"> <p className="text-sm text-gray-500"> Published </p> <p className="font-semibold"> {book.yearOfPublishing} </p> </div> <div className="rounded-xl bg-base-200 p-4"> <p className="text-sm text-gray-500"> Total Pages </p> <p className="font-semibold"> {book.totalPages} </p> </div> <div className="rounded-xl bg-base-200 p-4"> <p className="text-sm text-gray-500"> Rating </p> <p className="font-semibold"> ⭐ {book.rating} </p> </div> </div> {/* Button */} <div className="mt-6 flex gap-3"> <button className="btn btn-primary flex-1"> Read Now </button> <button className="btn btn-outline"> Add to Wishlist </button> </div> </div> </div> </div>
        })
    }</div>

 
</div>
         
        </div>
    );
};

export default ListedBook;