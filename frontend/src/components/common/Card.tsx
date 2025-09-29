import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, TrendingDown } from 'lucide-react';
import type { CardProps } from '../../types';
import Rating from './Rating';

const Card = ({ cardData }: CardProps) => {
  const { name, images, price, id, mrp } = cardData;
  const discount = mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0;

  return (
    <Link
      to={`/products/${id}`}
      className="flex flex-col bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-lg w-full sm:w-64 md:w-72 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-slate-700"
    >
      {/* Product Image */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600">
        <img
          src={images?.[0] || '/placeholder-image.jpg'}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-110 p-2 sm:p-4"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1">
            <TrendingDown size={12} /> {discount}% OFF
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-2.5 border-t border-gray-100 dark:border-slate-700">
        {/* Product Name */}
        <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-sm sm:text-base line-clamp-2 leading-snug min-h-[2.5rem]">
          {name}
        </h3>

        {/* Price and Action Buttons */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            <p className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">
              ${price.toFixed(2)}
            </p>
            {mrp > price && (
              <p className="text-xs text-gray-400 dark:text-gray-500 line-through">
                ${mrp.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1 sm:gap-2">
            <button className="flex items-center justify-center gap-1 sm:gap-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all duration-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:scale-105 active:scale-95 text-xs font-medium shadow-sm border border-primary-200 dark:border-primary-800">
              <ShoppingCart size={14} /> Add
            </button>
            <button className="flex items-center justify-center gap-1 sm:gap-1.5 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all duration-300 hover:from-primary-700 hover:to-primary-800 dark:hover:from-primary-600 dark:hover:to-primary-700 hover:scale-105 active:scale-95 text-xs font-medium shadow-md hover:shadow-lg">
              <CreditCard size={14} /> Buy
            </button>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-1 sm:mt-2">
          <Rating product={cardData} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
