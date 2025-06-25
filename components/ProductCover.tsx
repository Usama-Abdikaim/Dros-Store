import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import BookCoverSvg from './ProductCoverSvg';

type ProductCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<ProductCoverVariant, string> = {
  extraSmall: "product-cover_extra_small",
  small: "product-cover_small",
  medium: "product-cover_medium",
  regular: "product-cover_regular",
  wide: "product-cover_wide",
};

interface Props {
    className?: string;
    variant?: ProductCoverVariant;
    coverColor: string;
    coverImage: string;
}

const ProductCover = ({ 
      className,
      variant = "regular",
      coverColor = "#012B48",
      coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >

      <BookCoverSvg coverColor={coverColor} />

      <div className='absolute z-10' style={{left: '12%',width: '87.5%', height: '88%'}}
      >
        <Image
         src={coverImage}
         alt="Product Cover"
          fill className='rounded-sm boject-fill'
           />

      </div>
      
    </div>
  )
}

export default ProductCover;
