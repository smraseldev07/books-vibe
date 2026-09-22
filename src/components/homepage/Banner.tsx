import Image from 'next/image';
import React from 'react';
import bannerimage from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
     <section className=''>
           <div className='container mx-auto grid grid-cols-2 gap-4 items-center'>
            <div>
                <h1 className='font-bold text-3xl'>Books to freshen up your bookshelf</h1>
                <button className='btn btn-success'>View The List</button>
            </div>
            <div>
                <Image src={bannerimage} alt='banner'></Image>
            </div>
        </div>
     </section>
    );
};

export default Banner;