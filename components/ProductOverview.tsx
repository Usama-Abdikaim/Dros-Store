import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import ProductCover from './ProductCover';

const ProductOverview = ({
      title,
      author,
      genre,
      rating, 
      total_copies,
      available_copies,
      description,
      color,
      cover,
      id,

}: Product) => {
  return (
    <section className="prodcut-overview">
        <div className='flex flex-1 flex-col gap-5'>
            <h1 className='font-bold text-4xl text-blue-900 font-poppins'>
                {title}
            </h1>
            <div className='product-info'>
              <div className="flex flex-row items-center gap-3">
                <p>
                  By <span className='font-semibold text-light-200'>{author}</span>
                </p>
                <span className="text-gray-400">|</span>
                <p>
                  <span className='font-semibold text-light-200'>{genre}</span>
                </p>
              </div>
              <div className='flex flex-row gap-1'>
                 {/* <Image src="/icons/star.svg" alt="star" width={22} height={22} /> */}
                 <p>{rating}</p>
              </div>
            </div>

          <div>
              <p>
               Total Products <span>{total_copies}</span>
              </p>

              <p>
               Available Products <span>{available_copies}</span>
              </p>
          </div>

           <p className="book-description">{description}</p>

           <Button className='product-overview_btn bg-blue-700'>
            <p className='font-bold text-xl'>Take Product</p>
           </Button>
        </div>


        <div className='relative flex flex-1 justify-center'>
            <div className='relative'>
                <ProductCover
                  variant='wide'
                  className='z-10'
                  coverColor={color}
                  coverImage={cover}
                 />

                 <div className='absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden'>
                    <ProductCover
                     variant='wide'
                     coverColor={color}
                     coverImage={cover}
                 />
                 </div>
            </div>
        </div>
      
    </section>
  )
}

export default ProductOverview;
