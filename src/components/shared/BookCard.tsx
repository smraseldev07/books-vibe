import { IBook } from '@/types/Books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ibookcardprop {
    book : IBook
}

const BookCard = ({book} : ibookcardprop) => {
    return (
        <div
          key={book.bookId}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Book Image */}
          <figure className="h-72 bg-gray-100">
            <Image
              src={book.image}
              alt={book.bookName}

              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Card Content */}
          <div className="p-5">
            {/* Category + Rating */}
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                {book.category}
              </span>

              <span className="text-sm font-semibold text-yellow-500">
                ⭐ {book.rating}
              </span>
            </div>

            {/* Book Name */}
            <h2 className="mb-1 text-xl font-bold text-gray-900">
              {book.bookName}
            </h2>

            {/* Author */}
            <p className="mb-3 text-sm text-gray-500">
              By <span className="font-medium text-gray-700">{book.author}</span>
            </p>

            {/* Review */}
            <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-600">
              {book.review}
            </p>

            {/* Tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Book Information */}
            <div className="mb-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4 text-sm">
              <div>
                <p className="text-gray-400">Pages</p>
                <p className="font-semibold text-gray-800">
                  {book.totalPages}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Published</p>
                <p className="font-semibold text-gray-800">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Publisher</p>
                <p className="font-semibold text-gray-800">
                  {book.publisher}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Category</p>
                <p className="font-semibold text-gray-800">
                  {book.category}
                </p>
              </div>
            </div>

            {/* Button */}
           <Link href={`/books/${book.bookId}`}>
            <button className="btn w-full rounded-xl bg-slate-900 text-white hover:bg-slate-700">
              View Details
            </button>
           </Link>
          </div>
        </div>
    );
};

export default BookCard;