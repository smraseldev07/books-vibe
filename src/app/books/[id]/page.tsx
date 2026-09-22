import ReadButton from '@/components/booksdetail/ReadButton';
import WishlistButtton from '@/components/booksdetail/WishlistButton';

import { IBook } from '@/types/Books.type';
import Image from 'next/image';
import React from 'react';

interface bookdetailprop {
    params : Promise<{
        id : string
    }>;
}

const getbooks = async() =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json` ,{cache : 'no-store'})

   const data = await res.json()

   return data;

}

const BookDetail = async({params} : bookdetailprop)  => {
const {id} = await params
const bookdata = await getbooks()

const book = bookdata.find((book : IBook) => book.bookId === Number(id)) as IBook
    return (
     <div className="container mx-auto my-10">
  <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">

    {/* Book Image */}
    <figure className="lg:w-1/3 bg-base-200 p-6">
      <Image
        src={book.image}
        alt={book.bookName}
        width={500}
        height={600}
        className="w-full h-[400px] object-contain rounded-xl"
      />
    </figure>

    {/* Book Information */}
    <div className="card-body lg:w-2/3">

      {/* Title & Author */}
      <div>
        <h2 className="text-3xl font-bold text-base-content">
          {book.bookName}
        </h2>

        <p className="mt-2 text-lg text-gray-500">
          By <span className="font-semibold text-base-content">
            {book.author}
          </span>
        </p>
      </div>

      {/* Category & Rating */}
      <div className="flex flex-wrap gap-3 mt-3">
        <span className="badge badge-primary badge-lg">
          {book.category}
        </span>

        <span className="badge badge-warning badge-lg">
          ⭐ {book.rating}
        </span>

        <span className="badge badge-outline badge-lg">
          {book.totalPages} Pages
        </span>
      </div>

      {/* Review */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">
          Review
        </h3>

        <p className="text-gray-600 leading-7">
          {book.review}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Tags</h3>

        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-ghost"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 text-sm">

        <div className="bg-base-200 rounded-lg p-3">
          <p className="text-gray-500">Publisher</p>
          <p className="font-semibold">{book.publisher}</p>
        </div>

        <div className="bg-base-200 rounded-lg p-3">
          <p className="text-gray-500">Year of Publishing</p>
          <p className="font-semibold">{book.yearOfPublishing}</p>
        </div>

      </div>

      {/* Action */}
      <div className="card-actions justify-end mt-5">
       <ReadButton book = {book}></ReadButton>

<WishlistButtton book={book}></WishlistButtton>
       
      </div>

    </div>
  </div>
</div>
    );
};

export default BookDetail;